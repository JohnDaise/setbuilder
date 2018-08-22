document.addEventListener("DOMContentLoaded", function(){


  fetchSetlist();
  fetchAllSongs();
  // renderSetlist();
})

//
function fetchSetlist(){
  fetch(`http://localhost:3000/setlists`)
  .then(r => r.json())
    .then(data => {
      data.forEach(setlist => {renderSetlistTitle(setlist)
      });
    });
}



function renderSetlistTitle(setlist){
  let sidebarDiv = document.getElementById("setlist-div")
  let h1 = document.createElement('h1')

  h1.innerText = setlist.title
  sidebarDiv.appendChild(h1)
};


function fetchAllSongs(){
  fetch(`http://localhost:3000/songs`)
    .then(r => r.json())
      .then(data => {
        data.forEach(song => {renderSong(song)
        });
      });
};

function renderSong(song){
  let sidebarDiv = document.getElementById("setlist-div")
  let ul = document.getElementById("setlist-order") //make this ul a sidebar
  let li = document.createElement('li') //give this li the drag and drop capability

  li.id = song.id
  li.className = "column"
  li.innerHTML = `${song.name}`
  li.draggable = "true"
  //create showButton at right so reveal song notes in showPanel
  li.addEventListener('click', renderNotesHandler)
  //have 'drag handle' on left side of li
  sidebarDiv.appendChild(ul)
  ul.appendChild(li)

};


function renderNotesHandler(e){
  e.preventDefault();
  let id = e.currentTarget.id

  renderNotes(id);
};

function renderNotes(id){
  fetch(`http://localhost:3000/songs/${id}`)
    .then(r => r.json())
      .then(data => { data

          let header = document.createElement('h1')
          let notes = document.createElement('p')
          let showPanel = document.getElementById("show-panel")
          let editBtn = document.createElement('button')
          editBtn.innerText = "Edit Notes"
          editBtn.id = data.id

          showPanel.innerHTML = ""
          showPanel.appendChild(header)
          showPanel.appendChild(notes)
          showPanel.appendChild(editBtn)

          header.innerText = data.name
          notes.innerText = data.notes
          editBtn.addEventListener('click', updateNotes)
          notes.contentEditable = "false"

      });
};


function updateNotes(e){
  console.log('clicked')
  let id = e.currentTarget.id
  let songName = e.currentTarget.parentNode.querySelector("h1").innerText
  let notes = e.currentTarget.parentNode.querySelector("p").innerText
  let editBtn = e.currentTarget

  if (notes.contentEditable = "false"){

  } else{ }
  //when clicked innertext of button changes to "save"
  //p becomes editable (notes.contentEditable = "true")


  //when clicked again innertext of button changes to "edit"
  //p no longer editable (notes.contentEditable = "false")
  //this will make a patch call to update notes


};




//have this render on center showPanel div
// let id = e.currentTarget.id
//
// let showPanel = document.createElement('div')
// let title = document.createElement('h2')
// let notes = document.createElement('p')
// title.innerText = e.currentTarget.innerText
// showPanel.appendChild(title)
//for showPanel have key words come up as different colors for each named section of a song and display in big letters
