let $div = document.getElementById("simple-div");
$div.attachShadow({ mode: "open" });
$div.shadowRoot.innerHTML = `
    <style>
        p {
            color: blue;
        }
    </style>
    <p>Paragraph text within the Shadow DOM!</p>
`;