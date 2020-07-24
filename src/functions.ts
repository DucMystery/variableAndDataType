

function square(num: number): number {
  return num * num;
}

console.log(square(5));
// Output: 25

const squareFE = function (num: number): number {
  return num * num;
}
console.log(squareFE(45));

function add(a: number): Function {
return function (b: number): number {
  return a + b;

}
}
const addWith = add(10);
console.log(addWith(10));

const add1 = function (a: number , b: number): number {
  return a + b;
}

console.log(add1(10, 15));

