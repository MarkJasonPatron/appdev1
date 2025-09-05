console.log("5" == 5);   // true
console.log("5" === 5);  // false

let a;
let b = null;
console.log("a (undefined):", a);
console.log("b (null):", b);

const obj = {
  regularFunc: function() {
    console.log("Regular function:", this);
  },
  arrowFunc: () => {
    console.log("Arrow function:", this);
  }
};

obj.regularFunc();
obj.arrowFunc();

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("arr1:", arr1);

let arr3 = [1, 2, 3];
let arr4 = [...arr3];
arr4.push(5);
console.log("arr3:", arr3);
console.log("arr4:", arr4);