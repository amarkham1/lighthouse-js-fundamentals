function range(start, end, step) {
  if ((start >= end) || (step <= 0) || (start === undefined) || (end === undefined) || (step === undefined)) {
    return [];
  }
  let arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(3, 1, 1));
console.log(range(1, 3, 0));
console.log(range(undefined, 10, 2));