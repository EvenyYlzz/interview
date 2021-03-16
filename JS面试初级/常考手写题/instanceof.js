function myInstanceOf(A, B) {
  if(typeof A !== 'object'){
    return false
  }
  let p = A
  while(p){
    if(p === B.prototype){
      return true
    }
    p = p.__proto__
  }
  return false
}

console.log(myInstanceOf([], Array));  // true
console.log(null instanceof Object) // false
console.log(myInstanceOf(null,Object)) // false