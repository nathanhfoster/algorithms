const duplicateCount = text => {
  const map = new Map();
  const lowercaseText = text.toLowerCase();

  var count = 0;

  for (let i = 0; i < lowercaseText.length; i++) {
    const char = lowercaseText.charAt(i);

    if (map.has(char)) {
      const currentCount = map.get(char);
      if (currentCount === 1) {
        count++;
        map.set(char, currentCount + 1);
      }
    } else {
      map.set(char, 1);
    }
  }

  return count;
};
