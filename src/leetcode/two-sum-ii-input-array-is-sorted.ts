// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

function twoSum(numbers: number[], target: number): number[] {
	let start = 0
	let end = numbers.length - 1
	const arr: number[] = []
	while (start < end) {
		let sum = numbers[start] + numbers[end]
		if (sum === target) {
			arr.push(start + 1)
			arr.push(end + 1)
		}
		if (sum > target) {
			end--
		} else {
			start++
		}
	}
	return arr
}

console.log(twoSum([2, 7, 11, 15], 9))

export {}
