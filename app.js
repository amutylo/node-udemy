console.log('Starting app.')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs');
const notes = require('./notes')

let argv = yargs.argv;

let command = argv._[0];
let note;
console.log('command', command);
console.log('yargs', argv);

try {
  switch (command) {
    case 'add':
      note = notes.addNote(argv.title, argv.body);
      if (note) {
        console.log('Note of ' + note.title + ' was added');
      }
      break;
    case 'list':
      notes.getAll();
      break;

    case 'read':
      notes.getNote(argv.title);
      break;

    case 'remove':
      let nodeRemoved = notes.removeNote(argv.title);
      let message = nodeRemoved? 'Note was removed' : 'Note not found';
      console.log(message);
      break;

    default:
      console.log('Command not recognized');
      break;
  }

} catch (e) {
  console.log('Ooops error:', e);
    throw e;
}




// let user = os.userInfo()
// let userName = user.username
// fs.appendFile('greetings.txt', `Hello ${user.username}` + `You age is ${notes.age}`)
