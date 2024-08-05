//hamburger menu
const hamburger = document.querySelector("#hamburger")
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburger.classList.toggle('open');
});


//last modified
const span = document.querySelector("#lastmodified")
const date = new Date(document.lastModified)
span.innerHTML = `Last modified: ${date.toLocaleString()}`
