const test = [2, 3, 6, 9, 7];

let numbers = [10, 20, 30, 40, 50];

numbers.push(60);
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

numbers.splice(0, "100");
console.log(numbers);

numbers.pop(numbers);
console.log(numbers);
numbers.splice(100);

console.log(numbers);

// let numbers = [10, 20, 30, 40, 50];
// 60-г эцэст нь нэмэх, 5-г эхэнд нь нэмэх.
// Сүүлчийн болон эхний элементийг устгах.
// 2-р элементээ 100-аар солих.
// Массивыг урвуу болгох.

// let results = []

// for (var index = 0; index < animals.length; index ++) {
//     var value = animals[index]
//     if (value.startsWith('c')) {
//         results.push(value)
//     }
// }

// console.log(results) // ['cat', 'cow']
