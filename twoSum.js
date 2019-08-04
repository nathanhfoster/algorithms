const twoSum = (nums, target) => {
    const map = new Map()
    let result = []
    nums.map((v, i) => {
        const complement = target - v
        map.has(complement) ? result = [map.get(complement), i] : map.set(v, i)
    })
    return result
}

const twoSum = (nums, target) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i += 1) {
        const current = nums[i]
        const complement = target - current
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(current, i)
    }
    return false
}

const twoSum = (nums, target) => {
    const map = {}
    let result = []
    nums.map((v, i) => {
        const complement = target - v
        complement in map ? result = [map[complement], i] : map[v] = i
    })
    return result
}

const twoSum = (nums, target) => {
    let sums = []
    let result = []
    nums.map((v, i) => {
        const complement = target - v
        sums.includes(complement) ? result = [sums.indexOf(complement), i] : sums.push(v)
    })
    return result
}

/* Fastest solution */
const twoSum = (nums, target) => {
    const map = {}
    for (let i = 0; i < nums.length; i += 1) {
        const current = nums[i]
        const complement = target - current
        if (complement in map) {
            return [map[complement], i]
        }
        map[current] = i
    }
    return false
}