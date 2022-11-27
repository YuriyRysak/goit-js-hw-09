function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

  const makeOrder = dish => {
    const DELAY = 1000;

    const promise = new Promise((resolve, reject) => {
        const passed = Math.random() > 0.5;
        setTimeout(() => {
            if (passed) {
                resolve(`✅Вот ваше блюдо: ${dish}`);
            }
            reject('❌Извините закончились продукты(');
        }, DELAY);
    });
    return promise;
   };
makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);
function onMakeOrderSuccess(result) {
    console.log('onMakeOrderSuccess');
    console.log(result);
} 
function onMakeOrderError(error) {
    console.log('onMakeOrderError');
    console.log(error);
}