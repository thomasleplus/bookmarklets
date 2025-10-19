/*jslint white:true */

function minify(js) {
  return (
    "javascript:(function()%7B%22use%20strict%22%3B%20" +
    encodeURIComponent(
      js
        .replace(/[\r\n\t]+/gm, " ")
        .replace(/\x20+/gm, " ")
        .trim(),
    ) +
    "%7D)()"
  );
}

function normalize(s) {
  return s
    .replaceAll(
      /[^a-zA-Z0-9\x21$\x26\x27()*+\x2c\x2d./\x3a\x3b\x3d?\x40_]/g,
      "-",
    )
    .replaceAll(/\x2d+/g, "-");
}

// biome-ignore-start lint/correctness/noUnusedVariables: init() is used in HTML
// eslint-disable-next-line no-unused-vars
async function init(path) {
// biome-ignore-end lint/correctness/noUnusedVariables: init() is used in HTML
  document.getElementById("mininame").oninput = () => {
    document.getElementById("minified").textContent =
      document.getElementById("mininame").value;
  };
  document.getElementById("plaintext").oninput = () => {
    document.getElementById("minified").href = minify(
      document.getElementById("plaintext").value,
    );
  };
  const content = [];
  console.debug("Fetching index");
  const index = await fetch(
    "https://raw.githubusercontent.com/" +
      path +
      "/main/javascripts/index.json",
  )
    .then((response) => response.json())
    .catch(console.error);
  console.debug("Fetched index");
  content.push(document.createElement("hr"));
  const toc = document.createElement("section");
  content.push(toc);
  toc.id = "toc";
  const ttoc = document.createElement("h3");
  toc.appendChild(ttoc);
  ttoc.textContent = "Examples (" + index.length + ")";
  const ul = document.createElement("ul");
  toc.appendChild(ul);
  let i;
  for (i = 0; i < index.length; i++) {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML =
      '<a href="#' +
      encodeURIComponent(normalize(index[i].name)) +
      '">' +
      index[i].name +
      "</a>";
  }
  const loading = document.getElementById("loading");
  let j;
  for (j = 0; j < index.length; j++) {
    loading.textContent += ".";
    content.push(document.createElement("hr"));
    console.debug("Adding " + index[j].name);
    const bookmarklet = document.createElement("section");
    content.push(bookmarklet);
    bookmarklet.className = "bookmarklet";
    const title = document.createElement("h3");
    bookmarklet.appendChild(title);
    const tlink = document.createElement("a");
    title.appendChild(tlink);
    tlink.className = "name";
    tlink.id = normalize(index[j].name);
    tlink.textContent = index[j].name;
    const desc = document.createElement("h4");
    bookmarklet.appendChild(desc);
    desc.textContent = "Description";
    const description = document.createElement("p");
    bookmarklet.appendChild(description);
    description.textContent = index[j].description;
    console.debug("Fetching source code for " + index[j].name);
    const js = await fetch(
      "https://raw.githubusercontent.com/" +
        path +
        "/main/javascripts/" +
        encodeURIComponent(index[j].name) +
        ".js",
    )
      .then((response) => response.text())
      .catch(console.error);
    console.debug("Fetched source code for " + index[j].name);
    const book = document.createElement("h4");
    bookmarklet.appendChild(book);
    book.textContent = "Bookmarklet";
    const instructions = document.createElement("p");
    bookmarklet.appendChild(instructions);
    instructions.innerHTML =
      'Drag and drop or bookmark this link: <a href="' +
      minify(js) +
      '">' +
      index[j].name +
      "</a>";
    const code = document.createElement("h4");
    bookmarklet.appendChild(code);
    code.textContent = "Source code";
    const pre = document.createElement("pre");
    bookmarklet.appendChild(pre);
    pre.className = "highlight";
    const source = document.createElement("code");
    pre.appendChild(source);
    source.textContent = js.trim();
    const edit = document.createElement("a");
    bookmarklet.appendChild(edit);
    edit.textContent = "Edit it!";
    edit.href = "#editor";
    edit.onclick = ((a1, a2) => () => {
      const e1 = document.getElementById("plaintext");
      e1.value = a1;
      e1.dispatchEvent(new Event("input"));
      const e2 = document.getElementById("mininame");
      e2.value = a2;
      e2.dispatchEvent(new Event("input"));
    })(js, index[j].name);
  }
  content.push(document.createElement("hr"));
  document.getElementById("bookmarklets-list").replaceChildren(...content);
}
