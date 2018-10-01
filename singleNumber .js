const singleNumber = (nums) => nums.reduce((c, n) => c ^= n)

const singleNumber = (nums) => {
    let single
    nums.map(v => single ^= v)
    return single
}