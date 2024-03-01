// Function to handle search based on input value
function handleSearch() {
    const makeName = document.getElementById('make-search').value;
    
    fetch(`http://localhost:3000/cars/${makeName}`)
        .then(response => response.json())
        .then(data => {
            console.log('Cars:', data);
            // Update the page with the search results
            // (You can implement this part based on your website's layout)
        })
        .catch(error => console.error('Error:', error));
}

// Add event listener to search icon
document.getElementById('search-button').addEventListener('click', handleSearch);
