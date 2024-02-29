// Select the search box element
let search = document.querySelector('.search-box');

// Select the search icon element
let searchIcon = document.querySelector('#search-icon');

// Select the response container
let responseContainer = document.querySelector('#response-container');

let brandSearchInput = document.querySelector('#brand-search');
let modelSearchInput = document.querySelector('#model-search');
let regionSearchInput = document.querySelector('#region-search');
let conditionSearchInput = document.querySelector('#condition-search');

// Function to fetch models
async function fetchModels(brandName, condition) {
    const options = {
        method: 'GET',
        url: 'https://cis-automotive.p.rapidapi.com/getModels',
        params: {
            brandName: brandName,
            condition: condition
        },
        headers: {
            'X-RapidAPI-Key': 'f93b096e20msh06729fb32d55626p128c2bjsn645b069521a7',
            'X-RapidAPI-Host': 'cis-automotive.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Function to fetch regions
async function fetchRegions() {
    const options = {
        method: 'GET',
        url: 'https://cis-automotive.p.rapidapi.com/getRegions',
        headers: {
            'X-RapidAPI-Key': 'f93b096e20msh06729fb32d55626p128c2bjsn645b069521a7',
            'X-RapidAPI-Host': 'cis-automotive.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Add a click event listener to the search icon
searchIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the search box
    search.classList.toggle('active');

    if (search.classList.contains('active')) {
        const brand = brandSearchInput.value.trim().toLowerCase(); // Get the brand from the input and convert to lowercase
        const model = modelSearchInput.value.trim().toLowerCase(); // Get the model from the input and convert to lowercase
        const region = regionSearchInput.value.trim().toLowerCase(); // Get the region from the input and convert to lowercase
        const condition = conditionSearchInput.value.trim().toLowerCase(); // Get the condition from the input and convert to lowercase

        // Fetch brands, models, regions, and conditions
        Promise.all([
            fetchModels(brand, condition),
            fetchRegions()
        ])
            .then(([modelData, regionData]) => {
                // Update the response container with the API responses
                responseContainer.innerHTML = `
                <p>Models: ${JSON.stringify(modelData)}</p>
                <p>Regions: ${JSON.stringify(regionData)}</p>
            `;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});
