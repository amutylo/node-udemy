console.log('Starting app.');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');
const titleOptions = {
  describe: 'title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'note body',
  demand: true,
  alias: 'b'
};

let argv = yargs
.command('add', 'add Note', {
  title: titleOptions,
  body: bodyOptions
})
.command('remove', 'remove Note', {
  title: titleOptions
})
.command('list', 'list Notes')
  .command('read', 'read Note', {
    title: titleOptions
  })
.help()
.argv;

let command = argv._[0];
let note, message;
console.log('command', command);
console.log('yargs', argv);

try {
  switch (command) {
    case 'add':
      note = notes.addNote(argv.title, argv.body);
      if (note) {
        console.log('Note was added');
        notes.logNote(note);
      }
      break;
    case 'list':
      let allNotes = notes.getAll();
      console.log(`Printing ${allNotes.length} note(s)`);
      allNotes.forEach((note) => notes.logNote(note));
      break;

    case 'read':
      note = notes.getNote(argv.title);
      if (note) {
        console.log('Note found');
        notes.logNote(note);
      }
      else {
        console.log('Note not found');
      }
      break;

    case 'remove':
      let nodeRemoved = notes.removeNote(argv.title);
      message = nodeRemoved? 'Note was removed' : 'Note not found';
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
