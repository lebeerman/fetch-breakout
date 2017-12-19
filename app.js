// GET request
  // Request to get information from an API
  // Different API endpoints => different data returned

var baseUrl = 'https://swapi.co/api/';

fetch(baseUrl + 'starships/')
.then(resp => resp.json())
.then(data => {
  console.dir(data);
  for (var variable in data) {
    if (data.hasOwnProperty(variable)) {
      document.querySelector('main').append(createCard(variable, data));
    }
  }
});

function createCard(key, starWarsObject) {
  let newNode = document.createElement('div');
  newNode.setAttribute('class','card blue-grey darken-1');
  if (typeof starWarsObject[key] == 'Object'){
    newNode.innerHTML = `
    <div class="card-content white-text">
      <span class="card-title">${key}</span>
      <p><a href=${starWarsObject[key]}>${starWarsObject[key][0]}</a></p>
    </div>
    <div class="card-action">
        <a href="#">This is a link</a>
        <a href="#">This is a link</a>
    </div>`;
  } else {
    newNode.innerHTML = `
      <div class="card-content white-text">
        <span class="card-title">${key}</span>
        <p><a href=${starWarsObject[key]}>${starWarsObject[key]}</a></p>
      </div>
      <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
      </div>`;
  }
  return newNode;

}
