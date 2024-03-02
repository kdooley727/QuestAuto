fetch(`http://questapi.zapto.org:8080/${makeName}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Update your website with the fetched data here
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

fetch(`http://questapi.zapto.org:8080/${makeName}`, {
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
