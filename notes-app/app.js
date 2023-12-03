
 const chalk = require('chalk')

const notes = require('./notes.js')

const yargs = require('yargs')


//customize yargs version 
yargs.version('1.1.0')


//creating add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe: 'note body',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addnote(argv.title,argv.body)
    }
})
//Create remove command

yargs.command({
    command: 'remove',
    describe: 'removing Note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})


yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    handler: function(){
        console.log('listing Notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'reading note',
    handler: function(){
        console.log('reading the Note!')
    }
})

// add,remove,read,list
// body option and add command


yargs.parse()

// console.log(yargs.argv)



// const command = process.argv[2]
// console.log(process.argv)
// if(command === 'add'){
//  console.log('adding note')
// } else if(command === 'remove') {
//     console.log('removing note')
// }



