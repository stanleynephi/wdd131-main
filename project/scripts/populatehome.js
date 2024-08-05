// function to populate the HTML with the contents
export function PopulateHomes(homesData){
    homesData.forEach(homedata => {
        const homeDiv = document.createElement('div');
        homeDiv.classList.add('home');


        homeDiv.innerHTML = `
             ${homedata.img ? `<img src="${homedata.img}" alt="Home Image" loading="lazy">` : `<p>No Image Available</p>`}
            <p>Country: ${homedata.country}</p>
            <p>City: ${homedata.city}</p>
            <p>Rent or Sale: ${homedata.rentorsale}</p>
            <p>Price: ${homedata.price}</p>
           
            
        `;
        homes.appendChild(homeDiv);
    });
}
