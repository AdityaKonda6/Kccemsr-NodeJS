// Promises
const waitFn = (resolve, reject) => {
  setTimeout(() => {
    // resolve()
    reject('Fail for some reason');
  }, 3000);
};

const wait = () => new Promise(waitFn);

const onSuccessfull = () => console.log('Success');
const onError = () => console.log('Not Successful');

wait().then(onSuccessfull).catch(onError);
console.log('Waiting for promise to resolved');
