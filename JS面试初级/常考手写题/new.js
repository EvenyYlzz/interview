function myNew (fun, ...args) {
  let obj = {};
  obj.__proto__ = fun.prototype;
  console.log(obj.__proto__)
  return obj
  // let res = fun.apply(obj, args);
  // return res instanceof Object ? res : obj;
}

function Animal(name) {
  this.name = name;
}

let animal = myNew(Animal, 'dog');
console.log(animal.name)  // dog