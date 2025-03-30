const sayHi = () => {
  console.log("hi");
};

const sum = (a, b, c) => {
  return a + b + c;
};
const result = sum(10, 2, 3, 7);
console.log(result);

// 1. Parameter -> huvisan orj irdeg ugugdul
// 2. Return -> Hiigdesen uildeliin hariu butsah

const b = { a: 1, c: 2 };
const { c, ...rest } = b;

const arr = [, 2, 3];
const arr2 = [...arr, 4];

const hello = { a: "1", b: 2, c: 3 }; // -> ['a', 'b', 'c']
//hello["a"] === hello.a === "1";

const keyeerGuih = Object.keys(hello); //-> ['a', 'b', 'c']
console.log(keyeerGuih);

const valueguih = Object.values(hello); // -> ["1", 2, 3]
console.log(hello);

const entriesGuih = Object.entries(hello);
console.log(hello);

// keyeerGuih.map((el) => {

// hello[el] = 4;

// });

keyeerGuih.map((el) => {
  console.log(hello[el]);
});
