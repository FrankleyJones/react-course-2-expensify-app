const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'My Name',
    //   age: 25
    // });
    reject('Something went wrong!');
  }, 2000);
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error: ', error);
});
// Instead of .catch I can pass the function as the second argument of the promise.then(), but using .catch is more readable.

console.log('after');