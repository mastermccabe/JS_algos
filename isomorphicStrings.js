// Given two strings s and t, determine if they are isomorphic.
//
// Two strings are isomorphic if the characters in s can be replaced to get t.
//
// All occurrences of a character must be replaced with another character
//  while preserving the order of characters. No two characters may map to the
// same character but a character may map to itself.
// Input: s = "egg", t = "add"
// Output: true
//
// Input: s = "foo", t = "bar"
// Output: false
//
// Input: s = "paper", t = "title"
// Output: true
// assuming length is same, we dont need to check although we could

var isIsomorphic = function(s, t) {
  let map1 = {},
    map2 = {};
  if (s.length !== t.length) {
    return false
  } else {
    for (let i = 0; i < s.length; i++) {
      // console.log("i=", i, "s[i]=", s[i], "t[i]=", t[i])
      console.log("map1[s[i]]", map1[s[i]]);
      if (!map1[s[i]]) map1[s[i]] = t[i];
      else if (map1[s[i]] !== t[i]) return false;

      if (!map2[t[i]]) map2[t[i]] = s[i];
      else if (map2[t[i]] !== s[i]) return false;
    }
    return true

  }
};

console.log(isIsomorphic("foooooo", "baaaaar"));
// console.log(isIsomorphic("egg", "bar"));