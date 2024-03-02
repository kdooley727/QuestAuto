app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// Function to handle search based on input value
function handleSearch() {
    const makeName = document.getElementById('make-search').value;
    
    fetch(`http://questapi.zapto.org:8080/${makeName}`)

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
