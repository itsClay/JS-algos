Array.prototype.myEach = function(func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

// [1,2,3,4,5].myEach((el) =>  {console.log(el * 2);});


Array.prototype.myMap = function(func) {
  const arr = [] ;
  this.myEach((el) => arr.push(func(el))) ;
  return arr;
};

const dummy = [1,2,3,4,5];
// dummy.myMap((el) =>  {console.log(el * 2);});
// console.log(dummy);

Array.prototype.myReduce = function(func, acc) {
  let arr = this;
  let result = acc || arr.shift();
  this.myEach( (el) => {
    result = func(result, el);
  } );

  return result;
};

[1,2,3,4,5,6].myReduce(function(acc, el) {
  console.log( acc + el );
  return acc + el;
});
