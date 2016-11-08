console.log('Starting notes js');
const fs = require('fs');
let notes = [];
let addNote = (title, body) => {

  let note = {
    title,
    body
  }

  let notesString;
  try {
    if (fs.existsSync('notes-data.json')) {
      notesString = fs.readFileSync('notes-data.json');
    }
    else {
      notesString = '';
    }

  } catch (e) {
    console.log('error', e);
    throw e;
  }

  if (notesString.length) {
    notes = JSON.parse(notesString) ;
  }
  let duplicates = notes.filter((note) => {
    return note.title === title;
  })

  if (duplicates.length === 0) {
    notes.push(note);
    try {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    } catch (e) {
      console.log('Error happened: ', err);
      throw e;
    }
  }
  else {
    console.log('Duplicate note');
  }

}

let getAll = () => {
  console.log('Getting all notes');
}

let getNote = (title) => {
  console.log('reading a note:', title);
}

let removeNote = (title) => {
  console.log('removing a note:', title);
}


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
