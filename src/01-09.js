const dayRef = document.querySelector('.date-day');
const dayOfMonthRef = document.querySelector('.date');
const monthRef = document.querySelector('.date-month');
const yearRef = document.querySelector('.date-year');
const timeRef = document.querySelector('.digital-clock');

const clockSecondsArrow = document.querySelector(".clock-seconds__arrow")
const clockMinutesArrow = document.querySelector(".clock-minutes__arrow")
const clockHouresArrow = document.querySelector(".clock-hours__arrow")

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

function displayDate() {
  const currentDate = new Date();
  displayDay(currentDate);
  displayDayOfMonth(currentDate);
  displayMonth(currentDate);
  displayYear(currentDate);
  displayTime(currentDate);
}

function displayDay(currentDate) {
  const currentDay = currentDate.getDay();
  dayRef.textContent = namesOfDay[currentDay];
}

function displayDayOfMonth(currentDate) {
  const currentDayOfMonth = currentDate.getDate();
  dayOfMonthRef.textContent = currentDayOfMonth;
}

function displayMonth(currentDate) {
  const currentMonth = currentDate.getMonth();
  monthRef.textContent = namesOfMonth[currentMonth];
}

function displayYear(currentDate) {
  const currentYear = currentDate.getFullYear();
  yearRef.textContent = currentYear;
}

function displayTime(currentDate) {
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();
  timeRef.textContent = `Поточний час: ${currentHours.toString().padStart(
    2,
    '0'
  )} : ${currentMinutes.toString().padStart(2, '0')} : ${currentSeconds.toString().padStart(2, '0')}`;

  clockSecondsArrow.style.transform =`rotate( ${currentSeconds*6}deg)`
  clockMinutesArrow.style.transform =`rotate( ${currentMinutes*6}deg)`
  clockHouresArrow.style.transform =`rotate( ${currentHours*30+currentMinutes*0.33}deg)`
}

setInterval(displayDate, 1000);
