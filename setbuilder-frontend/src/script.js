document.addEventListener("DOMContentLoaded", function(){

  rightSidePanel();
  fetchSetlist();
  fetchAllSongs();
  // renderSetlist();
})



function rightSidePanel(){
  let allSongsBtn = document.createElement('button')
  let createSetlistBtn = document.createElement('button')
  let createSongButton = document.createElement('button')
  let rightSideDiv = document.getElementById("right-panel")

  allSongsBtn.innerText = "Repertoire"
  createSongButton.innerText = "Add New Song"
  createSetlistBtn.innerText = "Create New Setlist"

  allSongsBtn.className = "ui primary basic button"
  createSongButton.className = "ui secondary basic button"
  createSetlistBtn.className = "ui positive basic button"



  rightSideDiv.appendChild(allSongsBtn);
  rightSideDiv.appendChild(createSongButton);
  rightSideDiv.appendChild(createSetlistBtn);

  allSongsBtn.addEventListener('click', renderAllSongs)
  createSongButton.addEventListener('click', createSongForm)
  createSetlistBtn.addEventListener('click', createSetlist)

};

function fetchSetlist(){
  fetch(`http://localhost:3000/setlists`)
  .then(r => r.json())
    .then(data => {
      data.forEach(setlist => {renderSetlistTitle(setlist)
        //function renderSetlistSongs to sidebar
      });
    });
}

function renderSetlistTitle(setlist){
  let sidebarDiv = document.getElementById("setlist-div")
  let h1 = document.createElement('h1')
  sidebarDiv.className = "ui celled list"
  h1.innerText = setlist.title
  sidebarDiv.appendChild(h1)
  //use this function to render setlist song names to sidebar as well
};

function renderSetlistSongs(setlist){
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

}


function fetchAllSongs(){
  fetch(`http://localhost:3000/songs`)
    .then(r => r.json())
      .then(data => {
        data.forEach(song => {renderSong(song) //should render to showPanel
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
          let deleteBtn = document.createElement('button')

          editBtn.innerText = "Edit Notes"
          deleteBtn.innerText = "Delete from Set"
          editBtn.id = data.id
          deleteBtn.id = data.id
          editBtn.className ="ui primary button"
          deleteBtn.className ="ui button"

          showPanel.innerHTML = ""
          showPanel.appendChild(header)
          showPanel.appendChild(notes)
          showPanel.appendChild(editBtn)
          showPanel.appendChild(deleteBtn)

          header.innerText = data.name
          notes.innerText = data.notes
          editBtn.addEventListener('click', editNotes)
          deleteBtn.addEventListener('click', deletefromSetlist)
          notes.contentEditable = "false"
          //for showPanel have key words come up as different colors for each named section of a song and display in big letters
      });
};


function editNotes(e){
  e.preventDefault()
  let id = e.currentTarget.id
  let songName = e.currentTarget.parentNode.querySelector("h1").innerText
  let notes = e.currentTarget.parentNode.querySelector("p")
  let editBtn = e.currentTarget


  if (notes.contentEditable === "false"){
    notes.contentEditable = !!notes.contentEditable
    editBtn.innerText = "Save Notes"
    editBtn.addEventListener('click', updateSong)
    //fetch patch function to update db
  } else {
    notes.contentEditable = !notes.contentEditable
    editBtn.innerText = "Edit Notes"
    };
};


function deletefromSetlist(){
    console.log("Deleted")
};


function updateSong(e){
  e.preventDefault();
  let id = e.currentTarget.id
  let notes = e.currentTarget.parentElement.querySelector('p').innerText
  fetch(`http://localhost:3000/songs/${id}`, {
    "method": "PATCH",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify({
      "notes": notes
    })
  }).then(r =>
    r.json())
  .then(json => {
    console.log(json)
  });
};


 function renderAllSongs(){
   console.log('All Songs')
   //view all songs in the showPanel with just the title and a button to add song to setlist on the right
   //fetch all songs
   fetch(`http://localhost:3000/songs`)
     .then(r => r.json())
       .then(data => {
         data.forEach(song => {renderSongs(song)
         });
       });
 }

 function renderSongs(){
   console.log("All Songs")
   //function fetchAllSongs()
 }



function createSongForm(){
 console.log('New Song')
 //will open up a new song form in the showPanel
 //form will have placeholder text for the name and will have contentEditable <p> with basic song form filled in
 //will open up dropdown to add to or create setlist
}

function createSetlist(){
  console.log('Create Setlist')
  //will create a new setlist
  // use oojs here
};
