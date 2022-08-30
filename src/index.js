import { markap } from './markap';
import { genresArray } from './fooFindeId';

const films = [
  {
    title: 'Interceptor',
    genre_ids: [28, 53, 12],
  },
  {
    title: 'Fantastic Beasts: The Secrets of Dumbledore',
    genre_ids: [14, 12, 28],
  },
  {
    title: 'Last Seen Alive',
    genre_ids: [28, 53],
  },
  {
    title: 'Jurassic World Dominion',
    genre_ids: [878, 28, 12, 53],
  },
];

const obj = {
  genres: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ],
};

films.forEach(film => {
  film.genre_names = genresArray(film.genre_ids, obj);
});
console.log(films);
const filmsMarkap = markap(films);

const list = document.querySelector('.list');

list.innerHTML = filmsMarkap;

genresArray([28, 53, 12], obj);
