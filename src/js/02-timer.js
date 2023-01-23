import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const input =  document.querySelector("#datetime-picker")
const start = document.querySelector("button[data-start]")
const day = document.querySelector("span[data-days]")
const hour = document.querySelector("span[data-hours]")
const minut = document.querySelector("span[data-minutes]")
const second = document.querySelector("span[data-seconds]")


let intervalId = null;
start.disabled = true;


function viewOfTimer({ days, hours, minutes, seconds }) {
day.textContent = `${days}`;
hour.textContent = `${hours}`;
minut.textContent = `${minutes}`;
second.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    
    

    if(selectedDates[0] < new Date()) {
      start.disabled = true;
      Notiflix.Notify.failure("Please choose a date in the future");
      return;
      }
    if (selectedDates[0] > new Date()) {
      start.disabled = false;
    }
  
    
    start.addEventListener('click', () => {
      intervalId = setInterval(() => {
        const differenceInTime = selectedDates[0] - new Date();

        if (differenceInTime < 1000) {
          clearInterval(intervalId);
        }
    
        const result = convertMs(differenceInTime);
        viewOfTimer(result)
        start.disabled = true
      }, 1000);
    });
  },
};

flatpickr(input, options);



