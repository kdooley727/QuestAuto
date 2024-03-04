async function fetchBrandData(searchInput, responseContainer) {
  // Construct the API URL with the provided search input 
  const url = `https://cis-automotive.p.rapidapi.com/getBrands?query=${searchInput}`;

  // Configuration for the RapidAPI request
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY_HERE',
      'X-RapidAPI-Host': 'cis-automotive.p.rapidapi.com'
    }
  };

  try {
    // Fetch brand data from the API
    const response = await fetch(url, options);

    // Parse JSON response
    const data = await response.json();

    // Display formatted data in the designed container
    responseContainer.innerText = JSON.stringify(data, null, 2);
    return data; // Returning data for testing purposes
  } catch (error) {
    // Log the error for debugging
    console.error('Error fetching data:', error);
    throw error; // Rethrow for testability
  }
}

// Toggles 'active' class on a search element for UI styling purposes
function toggleSearchActive(search) {
  search.classList.toggle('active');
}

module.exports = { fetchBrandData, toggleSearchActive };