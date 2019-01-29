//
// Object
/*
const person = {
  name: "Andrew",
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};
console.log(`${person.name} is ${person.age}`);
const { city, temp: temperature} = person.location;
console.log(`It's ${temperature} in ${city}`);
//*/

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};
const { name: publisherName = 'Self-published' } = book.publisher;
console.log(publisherName);


//
// Array
/*
const adress = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = adress;
console.log(`You are in ${city} ${state}`);
//*/

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);