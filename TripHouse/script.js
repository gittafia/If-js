/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-sequences */
const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg'
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg'
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg'
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg'
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg'
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg'
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg'
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg'
  }
];

//  First way
const ulElement = document.querySelector('.recommendations__list');
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

// //  Second way
// const nTrylElement = document.querySelector('.recommendations__list');

// data.forEach((entity) => {
//   nTrylElement.innerHTML += `<li>
//     <img src=${entity.imageUrl} alt=${entity.name}/>
//     <a href="#">${entity.name}</a>
//     <p>${(entity.country, entity.city)}</p>
//   </li>
//  `;
// });
