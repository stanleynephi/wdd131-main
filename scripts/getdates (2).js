//get date for copyright
const date = new Date
document.getElementById("currentyear").innerHTML =  date.getFullYear()


//last modified date of my assignment
let lastmodified = new Date(document.lastModified)
let formattedDate = lastmodified.toLocaleDateString()
document.getElementById("lastmodified").innerHTML = `last modified: ${formattedDate}`