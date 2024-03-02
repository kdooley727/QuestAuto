// Function to handle search based on input value
function handleSearch() {
    const makeName = document.getElementById('make-search').value;
    
<<<<<<< HEAD
    fetch(`http://34.125.79.155${makeName}`)
=======
    fetch(`http://questapi.zapto.org/${makeName}`)
>>>>>>> refs/remotes/origin/main
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
