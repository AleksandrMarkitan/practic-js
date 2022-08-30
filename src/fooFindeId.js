// 1 ф приймає масив жанрів, та об'єкт obj. у відповідь повертає масив з назвами жанрів
// масив жанрів перебираємо за допомогою МЕР, на кожній ітерації берем та шукаєм в obj.ganres
// співпадіння за допомогою finde та повертаєм масив obj.name

export function genresArray(arrOfGenres, obj) {
  const genreNames = arrOfGenres.map(
    elem => obj.genres.find(({ id }) => elem === id).name
  );
  return genreNames;
}
