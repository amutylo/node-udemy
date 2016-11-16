console.log('Starting notes js');
const fs = require('fs');

let fetchNotes = () => {
  let notesString, notes;
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
    return JSON.parse(notesString) ;
  }
  return [];
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let notes = [];
let addNote = (title, body) => {

  let note = {
    title,
    body
  }
  notes = fetchNotes()

  let duplicates = notes.filter((note) => {
    return note.title === title;
  })

  if (duplicates.length === 0) {
    notes.push(note);
    try {
      saveNotes(notes);
      return note;
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
  //fetch notes
  let notes = fetchNotes();
  //filter them to find matched note
  let matched = notes.filter((note) => {
    return note.title === title;
  });
  (matched && matched.length)? matched[0] : NULL;
}

let removeNote = (title) => {
  //fetch notes
  let notes = fetchNotes();
  //filter note to delete
  let saveThem = notes.filter((note) => {
    return note.title !== title;
  })
  //save filtered notes
    saveNotes(saveThem);
    return notes.length !== saveThem.length;
}


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
