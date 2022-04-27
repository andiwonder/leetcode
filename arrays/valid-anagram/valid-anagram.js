// 242. Valid Anagram : Easy
// use 2 maps to count chars in str1 and str2, compare maps

var isAnagram = function(s, t) {
  let sMap = {}
  let tMap = {};

  countChars(s, sMap);
  countChars(t, tMap);

  function countChars(s, map) {
    for(let i = 0; i < s.length; i++) {
      if(map[s[i]] === undefined) {
        map[s[i]] = 1;
      } else {
        map[s[i]] += 1;
      }
    }
  }

  if(Object.keys(sMap).length !== Object.keys(tMap).length) {
    return false;
  }

  for(key of Object.keys(sMap)) {
    if(sMap[key] !== tMap[key]) {
      return false;
    }
  }

  return true;
};