// Import the reserveCar function from reserve.js
import { reserveCar } from './reserveFunctionality.js'; 

// Select the search box element
let search = document.querySelector('.search-box');

// Select the search button element
let searchButton = document.querySelector('#search-button');

// Select the response container
let responseContainer = document.querySelector('#response-container');

let brandSearchInput = document.querySelector('#brand-search');
let modelSearchInput = document.querySelector('#model-search');
let regionSearchInput = document.querySelector('#region-search');
let conditionSearchInput = document.querySelector('#condition-search');

// Function to fetch models
// Function to fetch models from the auto.dev API
async function fetchModels(brandName, regionName, condition) {
    const url = 'https://auto.dev/api/models';
    const params = {
        brand: brandName,
        region: regionName,
        condition: condition
    };
    const headers = {
        'Authorization': 'Bearer ZrQEPSkKa2Rvb2xleTA3MjdAZ21haWwuY29t'
    };

    try {
        const response = await axios.get(url, { params, headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching models:', error);
        return null;
    }
}

// Function to fetch regions from the auto.dev API
async function fetchRegions() {
    const url = 'https://auto.dev/api/regions';
    const headers = {
        'Authorization': 'Bearer ZrQEPSkKa2Rvb2xleTA3MjdAZ21haWwuY29t'
    };

    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching regions:', error);
        return null;
    }
}

// Add a click event listener to the search button
searchButton.addEventListener('click', () => {
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

// Call reserveCar to attach event listeners to reserve buttons
document.addEventListener('DOMContentLoaded', reserveCar);

