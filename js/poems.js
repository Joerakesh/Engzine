const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("../../../data/poems.json")
    .then((res) => res.json())
    .then((data) => {
        const poem = data.poems[id];

        document.getElementById("title").innerText = poem.title;

        let html = "";
        poem.content.forEach((line) => {
            html += `<p>${line}</p>`;
        });
        document.getElementById("content").innerHTML = html;

        document.getElementById("author").innerText = `by ${poem.author}`;
    });