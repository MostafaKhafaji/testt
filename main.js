// let obj = [
//   { name: "mostafa", age: 38, status: "accepted" },
//   { name: "ahmed", age: 38, status: "accepted" },
//   ,
//   { name: "mahmoud", age: 38, status: "rejected" },
//   { name: "moaaz", age: 38, status: "accepted" },
// ];

// obj = obj.filter((ele) => {
//   return ele.status === "accepted";
// });
// console.log(obj);
let myString = "EElllzzzzzzzeroo";
myString = myString.split("").filter((el, index, arr) => {
  return index === arr.indexOf(el);
});
console.log(myString);

const users = [
  { id: 1, name: "al", isActive: true, age: 35556 },
  { id: 2, name: "mo", isActive: false, age: 18 },
  { id: 3, name: "om", isActive: true, age: 90 },
  { id: 4, name: "om", isActive: false, age: 45456 },
  { id: 5, name: "om", isActive: true, age: 89 },
];
let newUseers = users
  .filter(function (param) {
    return param.isActive === true;
  })
  .sort(compare);
function compare(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
}
console.log(newUseers);
let jj = [50, 60, 600, 1, 0, 80, 777, 9];
console.log(
  jj.sort((a, b) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
  })
);
var obj = {};

str = "ban2132ana313";
str = str.split("").filter(function (e) {
  return isNaN(e);
});
// .join("");
// console.log(str);
// for (x = 0; x < str.length; x++) {
//   var l = str[x];
//   obj[l] = isNaN(obj[l]) ? 1 : obj[l] + 1;
// }
// console.log(obj);
console.log(str);
for (let i = 0; i < str.length; i++) {
  obj[str[i]] = isNaN(obj[str[i]]) ? 1 : obj[str[i]] + 1;
}
console.log(obj);
