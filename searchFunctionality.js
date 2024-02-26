async function fetchBrandData(searchInput, responseContainer) {
  const url = `https://cis-automotive.p.rapidapi.com/getBrands?query=${searchInput}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY_HERE',
      'X-RapidAPI-Host': 'cis-automotive.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    responseContainer.innerText = JSON.stringify(data, null, 2);
    return data; // Returning data for testing purposes
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow for testability
  }
}

function toggleSearchActive(search) {
  search.classList.toggle('active');
}

module.exports = { fetchBrandData, toggleSearchActive };