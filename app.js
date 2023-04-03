const newNote = document.querySelector(".new-note-btn");
const main = document.querySelector(".maincontainer");
const dropNote = document.querySelector(".removeNote");


newNote.addEventListener('click', addnote);
dropNote.addEventListener('click', removeNote);

function addnote(){
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.innerHTML= `
    <div id="options">
    <i class="edit fas fa-edit"></i>
    <i class="removeNote fas fa-trash-alt"></i>
    </div>
    <div class="note-body">
    <textarea>
    
    </textarea>
    </div>
    `
    noteDiv.querySelector(".removeNote").addEventListener(
        "click", function(){
            noteDiv.remove();
        }
    )
    main.appendChild(noteDiv);
}

function removeNote(){
    note.remove();
}
