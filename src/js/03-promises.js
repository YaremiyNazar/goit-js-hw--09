import Notiflix from 'notiflix';
const form = document.querySelector(".form")

function handleSubmit(event) {
  event.preventDefault();
  
  let firstDelay = event.currentTarget.delay.valueAsNumber;
  const delayStep = event.currentTarget.step.valueAsNumber;
  const amoun = event.currentTarget.amount.valueAsNumber;

  for (let i = 1; i <= amoun; i += 1) {
      firstDelay = firstDelay + delayStep;
      createPromise(i, firstDelay).then(data => Notiflix.Notify.success(data)).catch(error => Notiflix.Notify.failure(error))
  };
}
form.addEventListener("submit", handleSubmit);
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve,reject ) => {
    setTimeout(() => {
      if (shouldResolve) {
       resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
       reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  })
}

