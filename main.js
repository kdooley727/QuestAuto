// Select the search box element
let search = document.querySelector('.search-box');

// Select the search icon element
let searchIcon = document.querySelector('#search-icon');

// Add a click event listener to the search icon
searchIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the search box
    search.classList.toggle('active');

    if (search.classList.contains('active')) {
        const url = 'https://cis-automotive.p.rapidapi.com/getBrands';
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
                // Process the data returned by the API
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});
