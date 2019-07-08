const lengthOfLongestSubstringKDistinct = (s, k) => {
  if (k === 0) return 0;
  let left = 0;
  let right = 0;
  let map = {};
  let count = 0;
  let longest = 0;
  while (right < s.length) {
    if (map[s[right]] > 0) {
      map[s[right]]++;
    } else {
      map[s[right]] = 1;
      count++;
      while (count > k) {
        map[s[left]]--;
        if (map[s[left]] === 0) count--;
        left++;
      }
    }
    longest = Math.max(longest, right - left + 1);
    right++;
  }
  return longest;
};
