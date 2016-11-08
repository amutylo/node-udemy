console.log('Starting app.')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs');
const notes = require('./notes')

let argv = yargs.argv;

let command = argv._[0];

console.log('command', command);
console.log('yargs', argv);

try {
  switch (command) {
    case 'add':
      notes.addNote(argv.title, argv.body);
      break;
    case 'list':
      notes.getAll();
      break;

    case 'read':
      notes.getNote(argv.title);
      break;

    case 'remove':
      notes.removeNote(argv.title)
      break;

    default:
      console.log('Command not recognized');
      break;
  }

} catch (e) {
  console.log('Ooops error:', e);
    throw e;
}

console.log('Done');


// let user = os.userInfo()
// let userName = user.username
// fs.appendFile('greetings.txt', `Hello ${user.username}` + `You age is ${notes.age}`)
