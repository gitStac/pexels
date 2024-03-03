let nums = [1, 2, 3, 4, 5, 8, 7, 9, 6, 0];
let count = 100;
const addNum = (arr) => {
  for (let e of arr) {
    count += e;
  }
  return count;
};

const subNum = () => {
  for (let e of arr) {
    count -= e;
  }
  return count;
};

const multiplyNum = () => {
  count *= 2;
  return count;
};

const divideNum = () => {
  count *= 2;
  return count;
};

addNum(nums);
subNum(nums);
divideNum(nums);
multiplyNum();
