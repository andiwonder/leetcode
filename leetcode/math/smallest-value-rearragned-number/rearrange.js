// 2165. Smallest Value of the Rearranged Number: Medium

var smallestNumber = function(num) {
  let arr = Array.from(String(num));

  if (num > 0) {
    arr.sort((a,b) => { return a - b });

    for(let i=0;i<arr.length;i++) {
      if (arr[i]!=0) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        break;
      }
    }
  } else {
    arr.sort((a,b) => { return b - a });
  }

  return arr.join("");
};