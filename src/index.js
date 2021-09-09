// スプレット構文 ...
// スプレット構文はドットを3つ(...)書く構文。

// 使用法①　配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//使用法②　まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//使用法③　配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

//arr4とまったく同じ要素を持ったarr6をコピー出来る
const arr6 = [...arr4];
console.log(arr6);

//以下のように2つの配列の結合も可能
const arr7 = [...arr4, ...arr5];
console.log(arr7);
