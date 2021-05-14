const log = console.log;

const arr = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
const arr2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 1];
const findMaxConsecutiveOnes = (arr = []) => {
  let left = 0;
  let right = 0;
  let max = 0;
  while (right < arr.length) {
    if (arr[right] === 0) {
      if (right - left > max) {
        max = right - left;
      }
      right++;
      left = right;
    } else {
      right++;
    }
  }
  return right - left > max ? right - left : max;
};
log(findMaxConsecutiveOnes(arr));
log(findMaxConsecutiveOnes(arr2));
