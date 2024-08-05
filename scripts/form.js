const products = ["Home","About","Services","Products","Contact Us"]
//loop through the lists and populate the options with it
products.forEach(
    product =>{
        const options = document.createElement("option")
        options.textContent = product
        options.value = product
        document.querySelector("select").appendChild(options)
        console.log(options)
    }
)

//footer
const span = document.querySelector("#lastmodified")
const date = new Date(document.lastModified)
span.innerHTML = `Last modified: ${date.toLocaleString()}`