Array.prototype.myUniq = function() {
  const result_arr = [];
  this.forEach(el => {
    if (result_arr.includes(el)) {
    } else {
      result_arr.push(el);
    }
  });
  return result_arr ;
};

// console.log([1,2,2,3,4,4,4,5,5,6,7].myUniq());


Array.prototype.twoSum = function() {
  const result_arr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      if (i !== j && this[i] + this[j] === 0) {
        result_arr.push([i,j]);
      }
    }
  }
  return result_arr ;
};

// console.log([1,2,-2,3,4,-4,4,5,5,-6,7].twoSum());

Array.prototype.myTranspose = function() {
  const result_arr = [];
  for (let i = 0; i < this.length; i++) {
    let dummy = [];
    for (let j = 0; j < this.length; j++) {
      dummy.push(this[j][i]);
    }
    result_arr.push(dummy);
  }
  return result_arr ;
};

// console.log([[1,2,3],[4,5,6],[7,8,9]].myTranspose());
