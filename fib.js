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
