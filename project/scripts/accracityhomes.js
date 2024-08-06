//hamburger menu
const hamburger = document.querySelector("#hamburger")
const navigation = document.querySelector('.navigations')
const likedhomes = []

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburger.classList.toggle('open');
})

function toggleOff() {
    navigation.classList.remove("open");
    document.querySelector("input").checked = false;
}

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", toggleOff);
});



//api for homes
const homes = document.querySelector(".homes-card");
export const homesapi = "https://stanleynephi.github.io/wdd131-main/project/scripts/homes.json";
const rent = document.querySelector(".rentalhome")
const buy = document.querySelector(".buyahouse")


//import function
import { PopulateHomes } from "./populatehome.js";  


// fetch api for homes
async function callAPI(){
    try {
        const apicall = new Request(homesapi);
        const response = await fetch(apicall);
        const data = await response.json();
        console.log(data)
        PopulateHomes(data.homes)
        
    } catch (error) {
        console.log(error);
    }
}
callAPI()


//forms select feature
const select = document.querySelector("select")
const products = ["Home","About","Services","Products","Contact Us"]
//loop through the lists and populate the options with it
products.forEach(
    product =>{
        const options = document.createElement("option")
        options.textContent = product
        options.value = product
        select.appendChild(options)
        console.log(options)
    }
)




import { $buyhome } from "./buyhomes.js";
$buyhome()

import { $rentahome } from "./rentahome.js";
$rentahome()













