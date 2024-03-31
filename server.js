const twoSumIndices = (num, array) => {
  let storage = {};
  for (let [index, ele] of array.entries()) {
console.log("ele ::",storage[ele])
console.log("num ::",num , ele , num - ele)
console.log("index ::",index)

console.log("storage ::",storage)

    if (storage[ele] !== undefined) return [storage[ele], index];
    storage[num - ele] = index;
  }
};

console.log("result ::", twoSumIndices(5, [1, 4, 6, 7, 8]));
