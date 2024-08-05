const input = document.getElementById("favchap")
const button = document.querySelector("button")
const list = document.getElementById("list")

button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        // Creating elements to hold the chapters
        const chapters = document.createElement("li")
        const delbutton = document.createElement("button")
        
        // Setting the text content with the input value
        chapters.textContent = input.value
        delbutton.textContent = "✖️"

        // Appending the delete button to the chapter
        chapters.append(delbutton)
        // Appending the chapter to the list
        list.append(chapters)


        // Adding event listener to the delete button
        delbutton.addEventListener("click", function() {
            chapters.remove()
        })

        // Resetting the input field and focusing it
        input.value = ""
        input.focus()

        input.style.fontW
    }
})

