"use strict";

async function fillSection(section) {
    var content = [];
    console.debug('Fetching index');
    var index = await fetch('https://raw.githubusercontent.com/{{site.github.repository_nwo}}/main/javascripts/index.json')
        .then((response) => response.json())
        .catch(console.error);
    console.debug('Fetched index');
    content.push(document.createElement('hr'));
    var toc = document.createElement('section');
    content.push(toc);
    toc.id = 'toc';
    var ttoc = document.createElement('h3');
    toc.appendChild(ttoc);
    ttoc.textContent = 'Table of Content';
    var ul = document.createElement('ul');
    toc.appendChild(ul);
    for (let i = 0; i < index.length; i++) {
        var li = document.createElement('ul');
        ul.appendChild(li);
        li.innerHTML = '<a href="#' + encodeURIComponent(index[i].replaceAll(/[^a-zA-Z0-9\x21\$\x26\x27\(\)\*\+\x2c\x2d\.\/\x3a\x3b\x3d\?\x40_]/g, '-').replaceAll(/\x2d+/g, '-').trim()) + '">' + index[i] + '</a>';
    }
    var loading = document.getElementById('loading');
    for (let i = 0; i < index.length; i++) {
        loading.textContent += '.';
        content.push(document.createElement('hr'));
        console.debug('Adding ' + index[i]);
        var bookmarklet = document.createElement('section');
        content.push(bookmarklet);
        bookmarklet.className = 'bookmarklet';
        var title = document.createElement('h3');
        bookmarklet.appendChild(title);
        var tlink = document.createElement('a');
        title.appendChild(tlink);
        tlink.className = 'name';
        tlink.id = index[i].replaceAll(/[^a-zA-Z0-9\x21\$\x26\x27\(\)\*\+\x2c\x2d\.\/\x3a\x3b\x3d\?\x40_]/g, '-').replaceAll(/\x2d+/g, '-').trim();
        tlink.textContent = index[i].trim();
        console.debug('Fetching description for ' + index[i]);
        var text = await fetch('https://raw.githubusercontent.com/{{site.github.repository_nwo}}/main/javascripts/' + encodeURIComponent(index[i]) + '.txt')
            .then((response) => response.text())
            .catch(console.error);
        console.debug('Fetched description for ' + index[i]);
        var desc = document.createElement('h4');
        bookmarklet.appendChild(desc);
        desc.textContent = 'Description';
        var description = document.createElement('p');
        bookmarklet.appendChild(description);
        description.textContent = text.trim();
        console.debug('Fetching source code for ' + index[i]);
        var js = await fetch('https://raw.githubusercontent.com/{{site.github.repository_nwo}}/main/javascripts/' + encodeURIComponent(index[i]) + '.js')
            .then((response) => response.text())
            .catch(console.error);
        console.debug('Fetched source code for ' + index[i]);
        var book = document.createElement('h4');
        bookmarklet.appendChild(book);
        book.textContent = 'Bookmarklet';
        var instructions = document.createElement('p');
        bookmarklet.appendChild(instructions);
        instructions.innerHTML = 'Drag and drop or bookmark this link: <a href="javascript:(function()%7B' + encodeURIComponent(js.replace(/[\r\n\t]+/gm, ' ').replace(/\x20+/gm, ' ').trim()) + '%7D)()">' + index[i] + '</a>';
        var code = document.createElement('h4');
        bookmarklet.appendChild(code);
        code.textContent = 'Source code';
        var pre = document.createElement('pre');
        bookmarklet.appendChild(pre);
        pre.className = 'code';
        var source = document.createElement('code');
        pre.appendChild(source);
        source.textContent = js.trim();
    }
    content.push(document.createElement('hr'));
    section.replaceChildren(...content);
}

