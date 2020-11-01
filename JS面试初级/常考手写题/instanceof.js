function myInstanceOf(A, B) {
  let prototype = B.prototype;
  A = A.__proto__;
  while(true) {
    if (!A) return false;
    if (A == prototype) return true;
    A = A.__proto__;
  }
}

console.log(myInstanceOf([], Array));  // true