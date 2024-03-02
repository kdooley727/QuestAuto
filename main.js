function handleSearch() {
    const makeName = document.getElementById('make-search').value;
  
    // Fetch data based on search query
    fetch(`http://questapi.zapto.org:8080/${make}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Update your website with the fetched data here
        // For example, you can display the data in a div
        document.getElementById('response-container').innerHTML = JSON.stringify(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  
    // Example of a PUT request (you can remove this if not needed)
    fetch(`http://questapi.zapto.org:8080/${make}`, {
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
  }
  
  // Add event listener to search button
  document.getElementById('search-button').addEventListener('click', handleSearch);
  