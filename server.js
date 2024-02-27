/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
let arr = [1, 2, 3];

function plusI(n, i) {
  return n + i;
}
var map = function (arr, fn) {
  let res = [];
  for (const i of arr) {
    res[i] = fn(arr[i], Number(i));
  }
  return res;
};
console.log(map(arr));

//
