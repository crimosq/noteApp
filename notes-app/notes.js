const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'your notes'
}

const addNote = function(title,body) {
    const notes= loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })
    if(duplicateNotes.length === 0 ){
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    }else {
        console.log(chalk.red.inverse('Note title taken'))
    }
    
}

const removeNote = function(title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed'))
        savedNotes(notesToKeep)
    }else {
        console.log(chalk.red.inverse('No Note Found!'))
    }
    
}



const savedNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }

}


module.exports = {
    getNotes: getNotes,
    addnote: addNote,
    removeNote: removeNote
}