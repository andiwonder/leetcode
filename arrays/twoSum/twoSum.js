// 1. Two Sum : Easy
// use map to store diff for each element, and the map[diff] = index

var twoSum = function(nums, target) {
  let map = {};
   
  for(let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if(map[nums[i]] !== undefined) {
      return [i, map[nums[i]]];
    }
    map[diff] = i;
  }

  return null;
};