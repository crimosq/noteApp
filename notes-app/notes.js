const fs = require('fs'); // file system module for reading and writing files
const chalk = require('chalk'); // Module for color in console output

// Function to get notes (currently returns a placeholder string)
const getNotes = () => {
    return 'your notes';
}

// Function to add a new note
const addNote = function(title, body) {
    const notes = loadNotes(); // Load existing notes
    // Check for duplicate notes by title
    const duplicateNotes = notes.filter((note) => note.title === title);

    const duplicateNote = notes.find((note) => note.title === title)

    // Add the note if it's not a duplicate
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        savedNotes(notes); // Save the new list of notes
        console.log(chalk.green.inverse('New note added')); // Success message
    } else {
        console.log(chalk.red.inverse('Note title taken')); // Error message
    }
}

// function to remove a note
const removeNote = function(title) {
    const notes = loadNotes(); // Load existing notes
    // filter out the note with the given title
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title;
    });

    // Check if any note was removed
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed')); // Success message
        savedNotes(notesToKeep); // Save the new list of notes
    } else {
        console.log(chalk.red.inverse('No note found')); // Error message
    }
}


const listNotes=() =>{
    const notes= loadNotes()
    console.log(chalk.inverse('Your Notes'))

    notes.forEach((notes) => {
        console.log(note.title)
    })


}

const readNote =(title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
if(note){
    console.log(chalk.inverse(note.title))
    console.log(note.body)
}else {
    console.log(chalk.red.inverse('Note Not Found'))
}

}


// function to save notes to a file
const savedNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON); // Write notes to 'notes.json'
}

// function to load notes from a file
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON); // Parse the file content to an object
    } catch (e) {
        return []; // Return an empty array if file doesn't exist
    }
}

// exporting functions for use in other modules
module.exports = {
    getNotes: getNotes,
    addnote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
