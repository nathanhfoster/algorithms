const isSubset = (arr1, arr2) => arr2.every(e => arr1.includes(e));
/*{
  // console.log(arr1, arr2);
  const hset = new Map();
  // hset stores all the values of arr1
  for (let i = 0; i < arr1.length; i++) {
    if (!hset.has(arr1[i])) hset.set(arr1[i]);
  }
  // loop to check if all elements of arr2 also
  // lies in arr1
  for (let i = 0; i < arr2.length; i++) {
    if (!hset.has(arr2[i])) return false;
  }
  return true;
};*/
