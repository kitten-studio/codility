// https://leetcode.com/problems/product-of-array-except-self/description/
function productExceptSelf(nums: number[]): number[] {
	// let index = 0
	// let sum: number[] = []
	// let totalSum: number[] = []
	// nums.forEach((v, i) => {
	// 	nums.forEach((v, i) => {
	// 		if (i === index) {
	// 			return
	// 		}
	// 		sum.push(v)
	// 	})
	// 	let total = 1
	// 	for (const value of sum) {
	// 		total *= value
	// 	}
	// 	totalSum.push(total)
	// 	// console.log(total)
	// 	sum = []
	// 	index++
	// })

	// // return totalSum
	let length = nums.length
	let answer: number[] = new Array(length).fill(1)

	// 왼쪽 곱 계산
	let leftProd = 1
	for (let i = 0; i < length; i++) {
		answer[i] = leftProd
		leftProd *= nums[i]
		// console.log(answer[i], leftProd)
	}
	console.log(answer)

	// 오른쪽 곱을 계산하면서 결과 업데이트
	let rightProd = 1
	for (let i = length - 1; i >= 0; i--) {
		answer[i] *= rightProd
		rightProd *= nums[i]
		// console.log(answer[i])
	}

	return answer
}

console.log(productExceptSelf([1, 2, 3, 4]))

export {}
