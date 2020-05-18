const majorityElement = (nums) => {
  const target = nums.length / 3
   
  const numsCountMap = nums.reduce((numsThatAppear, num) => {
    numsThatAppear[num] = numsThatAppear[num] + 1 || 1
    return numsThatAppear
  }, {} )
   
  const numsThatAppear = Object.keys(numsCountMap).reduce((numsThatAppear, key) => {
    const numberCount = numsCountMap[key]
    return numberCount > target ? numsThatAppear.concat(key) : numsThatAppear
  }, [])
   
  return numsThatAppear
}

const majorityElement = (nums) => {
    const target = nums.length / 3
    
    const { numsThatAppear } = nums.reduce((acc, num) => {
        acc.numsThatAppear[num] = acc.numsThatAppear[num] + 1 || 1
        
        if(acc.numsThatAppear[num] > target) {
            acc.numsThatAppear.add(num)
        }
        
        return acc
    }, {numsCountMap: {}, numsThatAppear: new Set()} )
    
    
    return Array.from(numsThatAppear)
}

const majorityElement = (nums) => {
    const target = nums.length / 3
    let numsCountMap = {}
    let numsThatAppear = new Set()
    
    for(let i = 0, { length } = nums; i < length; i++) {
        const num = nums[i]
        
        numsCountMap[num] = numsCountMap[num] + 1 || 1
        
        if(numsCountMap[num] > target) {
            numsThatAppear.add(num)
        }
    }
    
    return Array.from(numsThatAppear)
}

export default majorityElement
