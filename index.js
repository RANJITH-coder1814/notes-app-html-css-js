function addNote() {
    const noteText = document.getElementById("note").value;
    const notesList = document.getElementById("notesList");

    if (noteText === "") return;

    const noteDiv = document.createElement("div");
    noteDiv.innerHTML = `
        <p>${noteText}</p>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;
    notesList.appendChild(noteDiv);
    document.getElementById("note").value = "";
}
