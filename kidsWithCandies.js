const kidsWithCandies = (candies, extraCandies) => {
	const max = Math.max(...candies)
	const result = candies.map((candy) => candy + extraCandies >= max)
	return result
}

export default kidsWithCandies
