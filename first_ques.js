const arr = [1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 5];
let hash = new Map();
let mostFreq = null;
let leastFreq = null;
let mostVal;
let leastVal;
for (let i = 0; i < arr.length; i++) {
  if (hash.has(arr[i])) hash.set(arr[i], hash.get(arr[i]) + 1);
  else hash.set(arr[i], 1);
}

hash.forEach((value, key) => {
  if (mostFreq === null) {
    mostFreq = key;
    mostVal = value;
  } else {
    if (mostVal < value) {
      mostFreq = key;
      mostVal = value;
    } else if (mostVal === value && mostFreq > key) mostFreq = key;
  }
  if (leastFreq === null) {
    leastFreq = key;
    leastVal = value;
  } else {
    if (leastVal > value) {
      leastFreq = key;
      leastVal = value;
    } else if (leastVal === value && leastFreq > key) leastFreq = key;
  }
});

console.log(mostFreq, leastFreq);
