//// Select the search box element
//let search = document.querySelector('.search-box');

//// Select the search icon element
//let searchIcon = document.querySelector('#search-icon');

//// Select the response container
//let responseContainer = document.querySelector('#response-container');

//let brandSearchInput = document.querySelector('#brand-search');

//// Add a click event listener to the search icon
//searchIcon.addEventListener('click', () => {
//    // Toggle the 'active' class on the search box
//    search.classList.toggle('active');

//    if (search.classList.contains('active')) {
//        const url = 'https://cis-automotive.p.rapidapi.com/getBrands';
//        const options = {
//            method: 'GET',
//            headers: {
//                'X-RapidAPI-Key': 'f93b096e20msh06729fb32d55626p128c2bjsn645b069521a7',
//                'X-RapidAPI-Host': 'cis-automotive.p.rapidapi.com'
//            }
//        };

//        fetch(url, options)
//            .then(response => response.json())
//            .then(data => {
//                // Update the response container with the API response
//                responseContainer.innerText = JSON.stringify(data);
//            })
//            .catch(error => {
//                console.error('Error fetching data:', error);
//            });
//    }
//});


// Select the search box element
let search = document.querySelector('.search-box');

// Select the search icon element
let searchIcon = document.querySelector('#search-icon');

// Select the response container
let responseContainer = document.querySelector('#response-container');

let brandSearchInput = document.querySelector('#brand-search');

// Add a click event listener to the search icon
searchIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the search box
    search.classList.toggle('active');

    if (search.classList.contains('active')) {
        const brand = brandSearchInput.value.trim().toLowerCase(); // Get the brand from the input and convert to lowercase
        const url = `https://cis-automotive.p.rapidapi.com/getBrands?brand=${brand}`; // Include the brand in the URL

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f93b096e20msh06729fb32d55626p128c2bjsn645b069521a7',
                'X-RapidAPI-Host': 'cis-automotive.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                // Clear the response container
                responseContainer.innerHTML = '';

                // Loop through the data
                data.forEach(brand => {
                    // Create a new paragraph element for each brand
                    let p = document.createElement('p');
                    p.textContent = brand.name; // Assuming the brand object has a 'name' property

                    // Append the paragraph to the response container
                    responseContainer.appendChild(p);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});
