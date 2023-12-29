// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/

function solution(A: number[]): number {
	if (!A.length) {
		return 0
	}
	let min_price = Number.MAX_SAFE_INTEGER - 1
	let maxProfit = 0
	for (let i = 0; i < A.length; ++i) {
		const n = A[i]
		min_price = Math.min(min_price, n)
		maxProfit = Math.max(maxProfit, n - min_price)
	}

	return maxProfit
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]))

export {}
