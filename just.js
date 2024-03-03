let nums = [1,2,3,4,5,8,7,9,6,0]
let count = 0;
const addNum = (arr)=>{
  for(let e of arr){
    count+=e;
  }
  return count;
}

addNum(nums)
