/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n
    return function(n) {
return count++

    };
};
  const counter = createCounter(10)
counter()
counter()
counter()
