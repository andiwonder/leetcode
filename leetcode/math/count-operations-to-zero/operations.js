// 2169. Count Operations to Obtain Zero: Easy

var countOperations = function(num1, num2) {
  let count = 0;

  while(num1 > 0 && num2 > 0) {
    if(num1 > num2) {
      num1 = num1 - num2;
    } else if (num2 > num1) {
      num2 = num2 - num1;
    } else {
      num1 = num1 - num2;
    }
    count++;
  }

  return count;
};