const dayRef = document.querySelector('.date-day');
const dayOfMonthRef = document.querySelector('.date');
const monthRef = document.querySelector('.date-month');
const yearRef = document.querySelector('.date-year');
const timeRef = document.querySelector('.digital-clock');

const namesOfDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'Пятниця',
  'Субота',
];

const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

function setDate() {
  const currentDate = new Date();
  setDay(currentDate);
  setDayOfMonth(currentDate);
  setMonth(currentDate);
  setYear(currentDate);
  setTime(currentDate);
}

function setDay(currentDate) {
  const currentDay = currentDate.getDay();
  dayRef.textContent = namesOfDay[currentDay];
}

function setDayOfMonth(currentDate) {
  const currentDayOfMonth = currentDate.getDate();
  dayOfMonthRef.textContent = currentDayOfMonth;
}

function setMonth(currentDate) {
  const currentMonth = currentDate.getMonth();
  monthRef.textContent = namesOfMonth[currentMonth];
}

function setYear(currentDate) {
  const currentYear = currentDate.getFullYear();
  yearRef.textContent = currentYear;
}

function setTime(currentDate) {
  const currentHours = currentDate.getHours().toString();
  const currentMinutes = currentDate.getMinutes().toString();
  const currentSeconds = `${currentDate.getSeconds()}`;
  timeRef.textContent = `Поточний час: ${currentHours.padStart(
    2,
    '0'
  )} : ${currentMinutes.padStart(2, '0')} : ${currentSeconds.padStart(2, '0')}`;
}

setInterval(setDate, 1000);
