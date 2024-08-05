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

function toggleOff(){
	navigation.classList.remove("open")
	document.querySelector("input").checked = false
}

//java script array and object for temples
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
  ];


  //loop through the array
  function templeCards(temple){
	temple.forEach(temple => {
		//figure to contain picture tags
		const figure = document.createElement("figure")
		const image = document.createElement("img")
		image.src=temple.imageUrl
		image.alt=temple.templeName
		image.loading="lazy"
		figure.append(image)

		//figcaption to contain the othe information
		const figcaption = document.createElement("figcaption")
		const unordered = document.createElement("ul")
		const list = document.createElement("li")
		const header = document.createElement("h1")
		const templeCards = document.createElement("div")

		header.textContent = temple.templeName

		list.innerHTML = `
  		<strong>Location:</strong> ${temple.location}<br>
  		<strong>Dedicated:</strong> ${temple.dedicated}<br>
  		<strong>Area:</strong> ${temple.area} square feet`;
		unordered.append(list)

		figcaption.append(header,unordered)
		
		figcaption.classList.add("figcaption")
		templeCards.append(figcaption,figure)
		document.querySelector("main").append(templeCards)
	});
  }

  //filter based on the button clicked
  function oldTemples(){
	const filterOld = temples.filter(temple => {
		const dedicatedYear = new Date(temple.dedicated).getFullYear()
		return dedicatedYear < 1900
	})

	document.querySelector("main").innerHTML = "";
	toggleOff()
	templeCards(filterOld)
  }


  //filter newly built temples
  function newTemples(){
	const filterOld = temples.filter(temple => {
		const dedicatedYear = new Date(temple.dedicated).getFullYear()
		return dedicatedYear > 2000
	})

	document.querySelector("main").innerHTML = "";
	toggleOff()
	templeCards(filterOld)
  }

  //functions to display all temples
  function AllTemple(){
	document.querySelector("main").innerHTML = ""
	toggleOff()
	templeCards(temples)
  }

  //filter large temples based on the area size.
  function largeTemples(){
	const filterLarge = temples.filter(temple => {
		const $templeSize = temple.area
		return $templeSize > 90000
	})

	document.querySelector("main").innerHTML = ""
	toggleOff()
	templeCards(filterLarge)
  }

  //filter small sized temples
  function smallTemples(){
	const filterLarge = temples.filter(temple => {
		const $templeSize = temple.area
		return $templeSize < 10000
	})

	document.querySelector("main").innerHTML = ""
	toggleOff()
	templeCards(filterLarge)
	
  }



  document.querySelector(".old").addEventListener("click",oldTemples)
  document.querySelector(".new").addEventListener("click",newTemples)
  document.querySelector(".home").addEventListener("click",AllTemple)
  document.querySelector(".large").addEventListener("click",largeTemples)
  document.querySelector(".small").addEventListener("click",smallTemples)

  templeCards(temples)


