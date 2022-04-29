// 49. Group Anagrams: Medium

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};
  let output = [];
  for (let str of strs) {
    let sortedStr = str.split('').sort().join('');
    if(map[sortedStr] === undefined) {
      map[sortedStr] = [str];
    } else {
      map[sortedStr].push(str);
    }
  }

  for(let key of Object.keys(map)) {
    output.push(map[key])
  }

  return output;
};