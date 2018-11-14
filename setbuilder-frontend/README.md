SetBuilder

A note-taking tool for solo artists to keep track of their song arrangements for performances.


Features:

Create Songs

User is able to create new song arrangements by clicking "Add New Song" button. This will open a new form that includes a Dropdown (to select which setlist the user would like add this new song), a textbox (for the Song Name) and a text area to write down any notes. The only required field is Song Name.



Edit Songs

The user can select a song and edit it by clicking the "Edit Notes" button. The field that displays the Song Notes is now editable. Once the user is satisfied with any edits, they click the "Save Button" to save any changes. These changes also update the backend.


Add Songs to Setlist

When the user would like to save a song to a particular Setlist, they need to click the "Repertoire" button in the top right corner. This will render a list of all songs alphabetically in the central display panel. Next the user will select a Setlist from the dropdown menu in the top left corner. When the user now clicks any songs from the Repertoire, they will be added to the selected Setlist.


Songs can be easily rearranged in the frontend by dragging and dropping.













Start Up:
Frontend: Copy index.html path into browser
Backend: Run rails server (rails s -p 3000)
