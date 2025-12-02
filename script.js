const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
  let current = [];
  let sum = 0;

  for (let num of arr) {
    // If adding num keeps sum ≤ n, add it to current subarray
    if (sum + num <= n) {
      current.push(num);
      sum += num;
    } else {
      // Otherwise, push current subarray and start a new one
      result.push(current);
      current = [num];
      sum = num;
    }
  }

  // Push last subarray if not empty
  if (current.length > 0) {
    result.push(current);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
