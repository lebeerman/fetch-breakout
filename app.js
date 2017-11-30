// GET request
  // Request to get information from an API
  // Different API endpoints => different data returned

var baseUrl = 'https://drageons.herokuapp.com/'

// Fetch: First argument is the url we want data from

// Request it
// Get it
// Translate it
// Work with it

fetch(baseUrl + 'character/1')
  .then(response => {
    return response.json()
  })
  .then(response => {
    var name = response[0].name
    // Do SOMETHING with the response data
    // Often DOM manipulation
    console.log(response)
    console.log(name)
    console.log(response[0].features[0].class)
  })
  .catch(error => {
    console.log(error)
    // DOM manipulation to express that there was an error
  })
