const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = 'https://raw.githubusercontent.com/jhonnmv19/tecnologia_web_I/main/Json/parques.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  const parkData = request.response;
  populateHeader(parkData);
  showAttractions(parkData);
};

function populateHeader(jsonObj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = jsonObj.parkName;
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = 'Ubicación general: ' + jsonObj.location +
    ' // Abierto en: ' + jsonObj.opened;
  header.appendChild(myPara);
}

function showAttractions(jsonObj) {
  const attractions = jsonObj.attractions;

  for (let i = 0; i < attractions.length; i++) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p'); // Edad
    const myPara2 = document.createElement('p'); // Descripción
    const myPara3 = document.createElement('p'); // Características
    const myPara4 = document.createElement('p'); // Precio
    const myList = document.createElement('ul'); // Lista de características

    myH2.textContent = attractions[i].name;
    myPara1.textContent = 'Edad mínima: ' + attractions[i].ageLimit;
    myPara2.textContent = 'Descripción: ' + attractions[i].description;
    myPara4.textContent = 'Precio: ' + attractions[i].price;
    myPara3.textContent = 'Características:';

    // Lista de características
    const features = attractions[i].features;
    for (let j = 0; j < features.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = features[j];
      myList.appendChild(listItem);
    }

    // Botón para Google Maps
    const mapButton = document.createElement('button');
    mapButton.textContent = 'Ver ubicación';
    mapButton.className = 'map-btn';
    mapButton.onclick = () => {
      window.open(attractions[i].locationURL, '_blank');
    };

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(mapButton);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
