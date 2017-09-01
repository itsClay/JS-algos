Array.prototype.bubbleSort = function () {
  let sort = false ;
  while (sort === false ) {
    sort = true ;
    for (var i = 0; i < this.length; i++) {
      if (this[i+1] !== undefined) {
        if (this[i] > this[i+1]) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          sort = false ;
        }
      }
    }
  }
  return this;
};

// console.log([1,5,4,3,5,7].bubbleSort());

String.prototype.substrings = function () {
  const result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = (i + 1); j < this.length; j++) {
      result.push(this.slice(i,j));
    }
  }
  return result;
};

console.log("something".substrings());
