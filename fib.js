const fibs = (num) => {
  let i = 1;
  const arr = [0, 1];
  while(i < num) {
    const fib = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(fib);
    i++;
  }
  return arr;
}

const fibsRec = (num) => {
  if(num === 0) return [0];
  if(num === 1) return [0, 1];
  else {
    const seq = fibsRec(num - 1);
    const fib = seq[seq.length - 1] + seq[seq.length - 2];
    return seq.concat(fib);
  }
}

console.log(fibsRec(10));
console.log(fibs(10));