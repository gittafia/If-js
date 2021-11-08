async function getData(url) {
  const sessionHotelsStr = sessionStorage.getItem('hotels');
  if (!sessionHotelsStr) {
    const hotels = await fetch(url)
      .then((response) => response.json())
      .then((hotels) => hotels)
      .catch((err) => console.log(err));
    sessionStorage.setItem('hotels', JSON.stringify(hotels));
    return hotels;
  } else {
    const hotels = JSON.parse(sessionHotelsStr);
    return hotels;
  }
}

async function createHotels() {
  let data = await getData('https://fe-student-api.herokuapp.com/api/hotels/popular');
  data.slice(0, 4).forEach((entity) => {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.setAttribute('src', entity.imageUrl);

    const a = document.createElement('a');
    a.innerHTML = `${entity.name}`;
    a.setAttribute('src', `#${entity.name}`);

    const paragraph = document.createElement('p');
    (paragraph.innerHTML = `${entity.country}`), `${entity.city}`;

    li.appendChild(img);
    li.appendChild(a);
    li.appendChild(paragraph);

    ulElement.appendChild(li);
  });
}

createHotels();

const ulElement = document.querySelector('.recommendations__list');
