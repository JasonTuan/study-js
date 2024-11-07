var a = 1;
let b = 2;
{
  var a = 3;
  let b = 4;
  console.log(a);
  console.log(b);
}
console.log(a);
console.log(b);
