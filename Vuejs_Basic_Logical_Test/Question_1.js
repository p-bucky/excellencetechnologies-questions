const log = console.log;

const numArr = ["1", "22", "333", "001", "21345", "1234", "2", "1234", "0.4"];

for (let i = 0; i < numArr.length; i++) {
  numArr[i] % 2 === 0
    ? log(numArr[i] + " is even")
    : log(numArr[i] + " is odd");
}
