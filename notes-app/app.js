const chalk = require('chalk'); // import chalk for colored console output (unused in this script)
const notes = require('./notes.js'); // import custom notes module for note operations
const yargs = require('yargs'); // import yargs for command line interface building

// Customize yargs version
yargs.version('1.1.0');

// Create 'add' command with yargs
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // Title is a required argument
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true, // Body is a required argument
            type: 'string'
        }
    },
    handler(argv) {
        notes.addnote(argv.title, argv.body); // Call addnote method from notes module
    }
});

// Create 'remove' command with yargs
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // Title is a required argument
            type: 'string'
        }
    },
    handlerv(argv) {
        notes.removeNote(argv.title); // Call removeNote method from notes module
    }
});





// Create 'list' command with yargs
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
       notes.listNotes
    }
});

// Create 'read' command with yargs
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        }
    },  
    handler(argv) {
        notes.readNote(argv.title)
    }
});

// Parse the command line arguments
yargs.parse();


// const command = process.argv[2];
// console.log(process.argv);
// if (command === 'add') {
//     console.log('Adding note');
// } else if (command === 'remove') {
//     console.log('Removing note');
// }

