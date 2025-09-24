"use strict";

/*jslint white:true */

function minify(js) {
  return (
    "javascript:(function()%7B" +
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

// init() is used in HTML
// eslint-disable-next-line no-unused-vars
async function init(path) {
  document.getElementById("mininame").oninput = function () {
    document.getElementById("minified").textContent =
      document.getElementById("mininame").value;
  };
  document.getElementById("plaintext").oninput = function () {
    document.getElementById("minified").href = minify(
      document.getElementById("plaintext").value,
    );
  };
  var content = [];
  console.debug("Fetching index");
  var index = await fetch(
    "https://raw.githubusercontent.com/" +
      path +
      "/main/javascripts/index.json",
  )
    .then(function (response) {
      return response.json();
    })
    .catch(console.error);
  console.debug("Fetched index");
  content.push(document.createElement("hr"));
  var toc = document.createElement("section");
  content.push(toc);
  toc.id = "toc";
  var ttoc = document.createElement("h3");
  toc.appendChild(ttoc);
  ttoc.textContent = "Examples (" + index.length + ")";
  var ul = document.createElement("ul");
  toc.appendChild(ul);
  var i;
  for (i = 0; i < index.length; i++) {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML =
      '<a href="#' +
      encodeURIComponent(normalize(index[i].name)) +
      '">' +
      index[i].name +
      "</a>";
  }
  var loading = document.getElementById("loading");
  var j;
  for (j = 0; j < index.length; j++) {
    loading.textContent += ".";
    content.push(document.createElement("hr"));
    console.debug("Adding " + index[j].name);
    var bookmarklet = document.createElement("section");
    content.push(bookmarklet);
    bookmarklet.className = "bookmarklet";
    var title = document.createElement("h3");
    bookmarklet.appendChild(title);
    var tlink = document.createElement("a");
    title.appendChild(tlink);
    tlink.className = "name";
    tlink.id = normalize(index[j].name);
    tlink.textContent = index[j].name;
    var desc = document.createElement("h4");
    bookmarklet.appendChild(desc);
    desc.textContent = "Description";
    var description = document.createElement("p");
    bookmarklet.appendChild(description);
    description.textContent = index[j].description;
    console.debug("Fetching source code for " + index[j].name);
    var js = await fetch(
      "https://raw.githubusercontent.com/" +
        path +
        "/main/javascripts/" +
        encodeURIComponent(index[j].name) +
        ".js",
    )
      .then(function (response) {
        return response.text();
      })
      .catch(console.error);
    console.debug("Fetched source code for " + index[j].name);
    var book = document.createElement("h4");
    bookmarklet.appendChild(book);
    book.textContent = "Bookmarklet";
    var instructions = document.createElement("p");
    bookmarklet.appendChild(instructions);
    instructions.innerHTML =
      'Drag and drop or bookmark this link: <a href="' +
      minify(js) +
      '">' +
      index[j].name +
      "</a>";
    var code = document.createElement("h4");
    bookmarklet.appendChild(code);
    code.textContent = "Source code";
    var pre = document.createElement("pre");
    bookmarklet.appendChild(pre);
    pre.className = "highlight";
    var source = document.createElement("code");
    pre.appendChild(source);
    source.textContent = js.trim();
    var edit = document.createElement("a");
    bookmarklet.appendChild(edit);
    edit.textContent = "Edit it!";
    edit.href = "#editor";
    edit.onclick = (function (a1, a2) {
      return function () {
        var e1 = document.getElementById("plaintext");
        e1.value = a1;
        e1.dispatchEvent(new Event("input"));
        var e2 = document.getElementById("mininame");
        e2.value = a2;
        e2.dispatchEvent(new Event("input"));
      };
    })(js, index[j].name);
  }
  content.push(document.createElement("hr"));
  document.getElementById("bookmarklets-list").replaceChildren(...content);
}
