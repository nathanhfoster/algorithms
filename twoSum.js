const twoSum = (nums, target) => {
    let map = new Map()
    let result = []
    nums.map((v, i) => {
        const complement = target - v
        if(map.has(complement))
            result = [map.get(complement), i]
        map.set(v, i)
    })
    return result
}

const twoSum = (nums, target) => {
    let map = {}
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
    let result = []
    nums.map((v, i) => {
        const complement = target - v
        if(complement in map)
            result = [map[complement], i]
        map[v] = i
    })
    return result
}

const twoSum = (nums, target) => {
    let sums = []
    let result = []
    nums.map((v, i) => {
        const complement = target - v
        if(sums.includes(complement))
            result = [sums.indexOf(complement), i]
        sums.push(v);
    })
    return result
}