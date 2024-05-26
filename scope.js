let num = 50; //global scope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log(num);
} // block scope

//console.log(a);
//console.log(b);
console.log(c);
