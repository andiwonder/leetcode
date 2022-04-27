// Implement Binary Search on a Sorted Array
// Given a sorted array of integers, return the index of the given value.

let binarySearch = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor(left + ((right - left) / 2));
    if(target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

// ------------- Educative - iterative ------------------

let binarySearch = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {

      // Finding the mid using floor division  
      let mid = low + Math.floor((high - low) / 2);

      //Target value is present at the middle of the array
      if (nums[mid] === target) {
        return mid;
      }

      //Target value is present in the low subarray
      if (target < nums[mid]) {
        high = mid - 1;
      } 
      //Target value is present in the high subarray
      else {
        low = mid + 1;
      }
    }  
    // Target value is not present in the array
    return -1;
};

// The time complexity of this solution is logarithmic, O(log n)
// The space complexity of this solution is constant, O(1)

// ------------- Educative - recursive ------------------

let binarySearchRec = function(nums, target, low, high) {
  if (low > high) {
    return -1;
  }
  
  // Finding the mid using floor division
  let mid = low + Math.floor((high - low) / 2);
  
  // Target value is present at the middle of the array
  if (nums[mid] === target) {
    return mid;
  } 

  // Target value is present in the low subarray
  else if (target < nums[mid]) {
    return binarySearchRec(nums, target, low, (mid - 1));
  } 
  
  // Target value is present in the high subarray
  else {
    return binarySearchRec(nums, target, (mid + 1), high);
  }
};

let binarySearch = function(nums, target) {
  return binarySearchRec(nums, target, 0, (nums.length - 1));
};

// The time complexity of this solution is logarithmic, O(log n).
// The space complexity of this solution is logarithmic, O(log n) because the recursive approach consumes memory on the stack.