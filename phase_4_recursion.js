function range(start, end) {
  if (start === end) {
    return [];
  }
  let b = (range(start+1, end));
  b.unshift(start);
  return b;
}

// console.log(range(1,10));

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  let a = arr.shift() ;
  a += sumRec(arr) ;
  return a;
}

// console.log(sumRec([1,2,3,4,5]));

function exponent(base, exp) {
  if (exp <= 1) {
    return base;
  }

  return base * exponent(base, exp - 1);
}

// console.log(exponent(5, 3));


function fibonacci(n) {
  if (n <= 2) {
    return [1,1];
  }
  let a = fibonacci(n-1);
  a.push(fibonacci(n-1)[(n-2)] + fibonacci(n-2)[(n-3)]);
  return a ;
}

// console.log(fibonacci(5));

function bsearch(arr, target){
  if (arr[arr.length - 1] < target || arr.length === 1) {
    return - 1;
  }
  let mid = Math.ceil(arr.length / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    let current_arr = arr.slice(0, mid);
    return bsearch(current_arr, target);
  } else if (arr[mid] < target) {
    let current_arr = arr.slice((mid), arr.length);
    const theydidit =  bsearch(current_arr, target) ;
    return theydidit === -1 ? -1 : theydidit + (mid);
  }
}

// console.log(bsearch([1,2,3,4,5,6,7], 10));

function mergesort(arr) {
  if (arr.length <= 1 ) {
    return arr;
  }
  const mid = Math.ceil(arr.length / 2);
  const left = mergesort(arr.slice(0, mid));
  const right = mergesort(arr.slice(mid, arr.length));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length !== 0 && right.length !== 0) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  result = result.concat(left);
  result = result.concat(right);
  return result;
}

// console.log(mergesort([1,4,3,7,5,9,2]));

function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  const first = arr[0];
  const withoutFirst = subsets(arr.slice(1));

  const withFirst = withoutFirst.map(sub => [first].concat(sub) );
  return withoutFirst.concat(withFirst);

  // let currentVal = arr[arr.length - 1];
  // let sub = subsets(arr.slice(0, arr.length - 1));
  // console.log(sub);
  // let result = [];
  // for (let i = 0; i < sub.length; i++) {
  //   result.push( sub[i].concat([currentVal]) );
  // }
  //
  // sub.concat(result);
}

console.log(subsets([1,2,3]));
