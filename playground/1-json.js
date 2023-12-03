const fs= require('fs')
// const book = {
//     title: 'Ego ',
//     author: 'Ryan Holiday',

// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON)

// //read the file getting binary DATA 
// const dataBuffer = fs.readFileSync('1-json.json')
// // converted data into a string in javascript 
// const dataJSON = dataBuffer.toString()
// // pasred the JSON data into an object 
// const data = JSON.parse(dataJSON)
// // accssed a property in it
// console.log(data.title);


//loading and pasing the JSOn data
const dataBuffer= fs.readFileSync('1-json.json')
const dataJSON= dataBuffer.toString()
const user =  JSON.parse(dataJSON)
// changeing the name and age properties
user.name= 'Cristian'
user.age= 24
// Stringify the changed object and overwrite the original data
const userJSON = JSON.stringify(user)
//tested if it worked
fs.writeFileSync('1-json.json', userJSON)