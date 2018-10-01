/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* Fastest Solution */
const subarraySum = (nums, k) => {
    let count = 0, sum = 0
    let map = new Map()
    map.set(0, 1)
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if(map.has(sum - k))
            count += map.get(sum - k)
        map.has(sum) ? map.set(sum, map.get(sum) + 1) : map.set(sum, 1)
    }
    return count
}

const subarraySum = (nums, k) => {
    let count = 0, sum = 0
    let map = {}
    map[0] = 1
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if((sum - k) in map)
            count += map[sum - k]
        map[sum] = (map[sum]+1) || 1
    }
    return count
}