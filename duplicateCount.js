const duplicateCount = text => {
  const map = new Map();
  const lowercaseText = text.toLowerCase();

  let count = 0;

  for (let i = 0; i < lowercaseText.length; i++) {
    const char = lowercaseText.charAt(i);
    
    if (map.has(char)) {
      if (map.get(char) === 0) {
        count++;
        map.set(char, 1);
      }
    } else {
      map.set(char, 0);
    }
  }
  return count;
};
