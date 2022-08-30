const films = [
  {
    title: 'Interceptor',
    genre_ids: [28, 53, 12, 18],
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

export function markap(arr) {
  const markap = arr.reduce(
    (acc, { title, genre_names }) =>
      (acc += `<li><h2>${title}</h2><ul>${genre_names.reduce(
        (acc, id) => (acc += `<li>${id}</li>`),
        ``
      )}</ul></li>`),
    ``
  );
  console.log(markap);
  return markap;
}
