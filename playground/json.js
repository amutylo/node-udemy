// let obj = {
//   'name': 'Andrii'
// }
//
// let stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Andrii", "age": 33}';
//
// let person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
let originalNote = {
  title: "Some title",
  body: "Some body"
}

let originalNotesString = JSON.stringify(originalNote);
console.log(originalNote);
try{
fs.writeFileSync('notes.json', originalNotesString, 'utf8');
} catch(err){
  throw err;
  console.log('Sorry error to write into a file. ', err);
}
console.log('success to write into a file');

let noteString;
try {
  noteString = fs.readFileSync('notes.json', 'utf8');
} catch (err) {
  throw err;
  console.log('Error reading fom a file ', err);
}
console.log('Success reading from a file!');

let note = JSON.parse(noteString);

console.log(typeof note);

console.log('Note title is:', note.title);
