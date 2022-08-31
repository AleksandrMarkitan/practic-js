import { debounce } from 'debounce';
const cars = [
  {
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    car: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    car: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
];
const newItems = document.querySelector('.list');
const SORTED_KEY = 'sorted';
const input = document.querySelector('input');

function newList(array) {
  if (array.length) {
    const listElement = array
      .map(({ car, type, price, img }) => {
        return `<li>
      <img src="${img}" alt="" width='300'>
      <p class="name">${car}</p>
      <p class="type">${type}</p>
      <p class="price">${price}</p>
    </li>`;
      })
      .join('');
    return listElement;
  } else {
    return `<li><img src='https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg' width="400"></li>`;
  }
}
try {
  const storageData = localStorage.getItem(SORTED_KEY);
  if (!storageData) {
    throw new Error();
  }
  if (storageData === 'by_price') {
    sortByPrice();
  } else {
    sortByName();
  }
} catch (e) {
} finally {
  newItems.innerHTML = newList(cars);
}

input.addEventListener('input', debounce(inputListener, 1000));
const SEARCH_KEY = 'inputsearch';
function inputListener(e) {
  console.log(e.target.value);
  const currentRadioButton = document.querySelector('input[type="radio"]');

  const isModel = currentRadioButton.checked;
  let filteredCars = null;
  if (isModel) {
    filteredCars = cars.filter(model =>
      model.type.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(filteredCars);
  }
  if (!isModel) {
    filteredCars = cars.filter(model =>
      model.car.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(filteredCars);
  }
  newItems.innerHTML = newList(filteredCars);
  localStorage.setItem(SEARCH_KEY, JSON.stringify(filteredCars));
}

const lastSearch = document.querySelector('.lastsearch');

lastSearch.addEventListener('click', getFromLocale);

function getFromLocale(e) {
  try {
    const oldSearch = JSON.parse(localStorage.getItem(SEARCH_KEY));
    newItems.innerHTML = newList(oldSearch);
  } catch (e) {}
}

const sortPrice = document.querySelector('.sort_price');
const sortName = document.querySelector('.sort_name');

sortPrice.addEventListener('click', sortByPrice);
sortName.addEventListener('click', sortByName);

function sortByPrice(e) {
  cars.sort((a, b) => a.price - b.price);
  newItems.innerHTML = newList(cars);
  localStorage.setItem(SORTED_KEY, 'by_price');
}
function sortByName(e) {
  cars.sort((a, b) => a.car.localeCompare(b.car));
  newItems.innerHTML = newList(cars);
  localStorage.setItem(SORTED_KEY, 'by_name');
}
