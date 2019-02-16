const topKFrequent = (words, k) => {
  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
  }
  let sortedMap = new Map(
    [...map.entries()].sort().sort((a, b) => b[1] - a[1])
  );
  return [...sortedMap.keys()].slice(0, k);
};
