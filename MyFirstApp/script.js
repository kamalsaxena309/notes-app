let input = document.getElementById("noteInput");
let addBtn = document.getElementById("addBtn");
let notesList = document.getElementById("notesList");
let downloadBtn = document.getElementById("downloadBtn");


let notes = JSON.parse(localStorage.getItem("notes")) || [];


// Notes dikhane ka function
function showNotes(){

    notesList.innerHTML = "";


    notes.forEach((note,index)=>{

        let div = document.createElement("div");

        div.innerHTML = `
        <p>${note}</p>
        <button onclick="deleteNote(${index})">Delete</button>
        `;


        notesList.appendChild(div);

    });

}



// Note add karna
addBtn.onclick = function(){


    let text = input.value.trim();



    if(text === ""){

        alert("Pehle note likho");

        return;

    }



    // same note rokna
    if(notes.includes(text)){

        alert("Ye note pehle se hai");

        return;

    }



    notes.push(text);



    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );



    input.value = "";


    showNotes();

};




// Note delete karna
function deleteNote(index){


    notes.splice(index,1);



    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );



    showNotes();

}




// Notes download karna
downloadBtn.onclick = function(){


    let file = notes.join("\n\n");


    let blob = new Blob([file], {
        type:"text/plain"
    });



    let link = document.createElement("a");


    link.href = URL.createObjectURL(blob);


    link.download = "My_Notes.txt";


    link.click();


};




// Start me notes load
showNotes();