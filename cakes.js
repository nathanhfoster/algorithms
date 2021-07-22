// https://www.codewars.com/kata/525c65e51bf619685c000059/javascript

const cakes = (recipe, available) => {
  var count = Infinity;

  for (const [key, requiredAmount] of Object.entries(recipe)) {
    const availableAmount = available[key];

    if (!availableAmount) {
      return 0;
    }

    const currentCount = (availableAmount / requiredAmount) >> 0;

    if (currentCount < count) {
      count = currentCount;
    }
  }

  return count;
};
