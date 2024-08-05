//import api
import { homesapi } from "./accracityhomes.js";


export function $rentahome(){
        const $rent = document.querySelector(".rentahome")

        if($rent){
            $rent.addEventListener("click",()=>{
                document.querySelector(".homes-card").innerHTML=" "
            
                fetch(homesapi)
                .then(response => response.json())
                .then(data => {
                    const forSale = data.homes.filter(home => home.rentorsale === "Rent");
            
                    forSale.forEach(
                        appartment =>{
                            const homeDiv = document.createElement('div');
                            homeDiv.classList.add('home');
                    
                            homeDiv.innerHTML = `
                                 ${appartment.img ? `<img src="${appartment.img}" alt="Home Image" loading="lazy">` : `<p>No Image Available</p>`}
                                <p>Country: ${appartment.country}</p>
                                <p>City: ${appartment.city}</p>
                                <p>Rent or Sale: ${appartment.rentorsale}</p>
                                <p>Price: ${appartment.price}</p>
                               
                                
                            `;
                            homes.appendChild(homeDiv)
                            
                        }
                    )
                    }
                )
            })}
}

$rentahome()