const span = document.querySelector("#lastmodified")
const date = new Date(document.lastModified)
span.innerHTML = `Last modified: ${date.toLocaleString()}`