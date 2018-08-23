document.addEventListener("DOMContentLoaded", function(){

  rightSidePanel();
  fetchSetlist();

})



function rightSidePanel(){
  let allSongsBtn = document.getElementById("allSongs-btn")
  let createSetlistBtn = document.getElementById("createSetlist-btn")
  let createSongButton = document.getElementById("addNewSong-btn")
  let createSongForm = document.getElementById("songForm")
  createSongForm.style.display = "none"


  // let rightSideDiv = document.getElementById("right-panel")
  // let addSongForm = document.createElement('div')

  let addSong = false
  allSongsBtn.addEventListener('click', renderAllSongs)
  createSetlistBtn.addEventListener('click', createSetlist)
  createSongButton.addEventListener('click', () => {
     // hide & seek with the form
     addSong = !addSong
     if (addSong) {
       createSongForm.style.display = 'block'
       createSongForm.addEventListener('submit', submitHandler)
     } else {
       createSongForm.style.display = 'none'
     }
   });


// YOUR CODE HERE



};

function fetchSetlist(){
  fetch(`http://localhost:3000/setlists`)
  .then(r => r.json())
    .then(data => {
      renderSetlistTitle(data)
    });
}


//make choosing a setlist a dropdown
function renderSetlistTitle(data){
    data.forEach( setlist => {

      let select = document.getElementById("dropdown");
      let select2 = document.getElementById("dropdown-form");

      let option = document.createElement("option")
      let option2 = document.createElement("option")


      option.textContent = setlist.title
      option2.textContent = setlist.title
      option.id = setlist.id
      option2.id = setlist.id

      option.addEventListener('click', renderSetlistSongs)
      select.appendChild(option)
      select2.appendChild(option2)
    });


  let sidebarDiv = document.getElementById("setlist-div")
  let rightSideDiv = document.getElementById("right-panel")
  // let h1 = document.createElement('h1')

  sidebarDiv.className = "ui celled list"
  rightSideDiv.className = "ui celled list"
  // h1.innerText = setlist.title
  // sidebarDiv.appendChild(h1)

  // h1.addEventListener('click', renderSetlistSongs )//find setlist)
  //use this function to render setlist song names to sidebar as well
};

function renderSetlistSongs(e){
  let id = e.options[e.selectedIndex].id
  let ul = document.getElementById("setlist-order")
  ul.innerHTML = ""
  fetch(`http://localhost:3000/setlists/${id}`)
  .then(r => r.json())
    .then(data => {
      data.songs.forEach(song =>{
          let sidebarDiv = document.getElementById("setlist-div")
          let ul = document.getElementById("setlist-order") //make this ul a sidebar
          let li = document.createElement('li') //give this li the drag and drop capability
          li.id = song.id
          li.className = "column"
          li.innerHTML = `${song.name}`
          Sortable.create(ul)
          //create showButton at right so reveal song notes in showPanel
          li.addEventListener('click', renderNotesHandler)
          //have 'drag handle' on left side of li
          sidebarDiv.appendChild(ul)
          ul.appendChild(li)
        //function renderSetlistSongs to sidebar
      });
    });
  };


// function fetchAllSongs(){
//   fetch(`http://localhost:3000/songs`)
//     .then(r => r.json())
//       .then(data => {
//         data.forEach(song => {console.log(song)//renderSong(song) //should render to showPanel
//         });
//       });
// };

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
          let emptyDiv =  document.createElement('div')

          editBtn.innerText = "Edit Notes"
          deleteBtn.innerText = "Delete from Set"
          editBtn.id = `edit-${data.id}`
          deleteBtn.id = `delete-${data.id}`
          editBtn.className ="ui button"
          deleteBtn.className ="ui secondary button"

          showPanel.innerHTML = ""



          showPanel.appendChild(header)
          showPanel.appendChild(notes)
          showPanel.appendChild(emptyDiv)
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
  e.preventDefault();
  console.log("edit")
  // let id = e.currentTarget.id
  // let songName = e.currentTarget.parentNode.querySelector("h1").innerText
  // let notes = e.currentTarget.parentNode.querySelector("p")
  // let editBtn = e.currentTarget
  //
  //
  //
  // if (notes.contentEditable === "false"){
  //   notes.contentEditable = !!notes.contentEditable
  //   editBtn.innerText = "Save Notes"
  //   editBtn.addEventListener('click', updateSong)
  //   //fetch patch function to update db
  // } else {
  //   notes.contentEditable = !notes.contentEditable
  //   editBtn.innerText = "Edit Notes"
  //   };
};
//
function submitHandler(e){
  e.preventDefault();
  console.log("hello")
  // debugger
  // let name = document.querySelector("#name-input").value;
  // let notes = document.querySelector("#sprite-input").value;
  // postNewSong(name, notes)
}


// function postNewSong(name, notes){
//   window.alert('submited')
//   console.log('clicked')
//   fetch(`http://localhost:3000/songs/`, {
//     "method": "POST",
//     "headers": {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     "body": JSON.stringify({
//       "name": name
//       "notes": notes
//     })
//   }).then(r =>
//     r.json())
//   .then(json => {
//     console.log(json)
//   });
// };


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


 function renderAllSongs(e){
   e.preventDefault();
   let showPanel = document.getElementById("show-panel")
   showPanel.innerHTML = ""
   fetch(`http://localhost:3000/songs`)
     .then(r => r.json())
       .then(data => {
         let sortedData = data.sort(function(a, b) {
           return a.name.localeCompare(b.name);
            });
         sortedData.forEach(song => {
           let ul = document.createElement('ul')
           let li = document.createElement('li')
           li.innerText = song.name
           li.id = song.id
           li.addEventListener('click', addSongToSet)
           showPanel.appendChild(ul)
           ul.appendChild(li)
         });
       });
 }

//get this feature to add a song to a setlist to work
function addSongToSet(e){
  console.log('Song Added')
  let id = e.currentTarget.id
  let dropdown = document.getElementById("dropdown")
  let setlistId = dropdown.options[dropdown.selectedIndex].id
  fetch(`http://localhost:3000/songs/${id}`, {
      "method": "PATCH",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({
        "setlist.id": setlistId
      })
    }).then(r =>
      r.json())
    .then(json => {
      console.log(json)
    });
    };


// function updateSetlist(data){
//   fetch(`http://localhost:3000/songs/${id}`, {
//     "method": "PATCH",
//     "headers": {
//       "Content-Type": "application/json"
//     },
//     "body": JSON.stringify({
//       "songs":
//     })
//   }).then(r =>
//     r.json())
//   .then(json => {
//     console.log(json)
//   });
//
// };






 //will open up a new song form in the showPanel
 //form will have placeholder text for the name and will have contentEditable <p> with basic song form filled in
 //will open up dropdown to add to or create setlist

function createSetlist(){
  console.log('Create Setlist')
  //will create a new setlist
  // use oojs here
};
