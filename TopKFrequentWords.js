const topKFrequent = (words, k) => {
    let map = new Map()
    words.map(word => {
        map.has(word) ? map.set(word, map.get(word)+1) : map.set(word, 1)
    })
    let sortedMap = new Map([...map.entries()].sort().sort((a, b) => b[1] - a[1]))
    return [...sortedMap.keys()].slice(0, k)
}