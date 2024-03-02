/* app.use((req, res, next) => {
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
 */

fetch('http://questapi.zapto.org:8080/${makeName}')
  .then(response => response.json())
  .then(data => {
    // Use the fetched data in your website
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  fetch('http://questapi.zapto.org:8080/${makeName}', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' })
})
.then(response => {
  if (response.ok) {
    console.log('Resource updated successfully');
  } else {
    console.error('Failed to update resource:', response.status);
  }
})
.catch(error => {
  console.error('Error updating resource:', error);
});
