export {}

function solution(K: number, M: number, A: number[]): number {
	let maxSum = A.reduce((a, b) => a + b, 0)
	let minSum = Math.max(...A)
	// console.log(maxSum, minSum)
	let result = maxSum
	while (minSum <= maxSum) {
		let midSum = Math.floor((minSum + maxSum) / 2)
		if (checkDivisible(K, midSum, A)) {
			result = midSum
			maxSum = midSum - 1
		} else {
			minSum = midSum + 1
		}
	}
	return result
}

function checkDivisible(K: number, midSum: number, A: number[]) {
	let blocksCount = 1
	let currentBlockSum = 0

	for (let i = 0; i < A.length; i++) {
		// 다음 원소를 추가했을 때 합이 midSum을 초과하면 새로운 블록을 시작합니다.
		if (currentBlockSum + A[i] > midSum) {
			blocksCount++
			currentBlockSum = A[i]
		} else {
			currentBlockSum += A[i]
		}
	}

	return blocksCount <= K
}

let K = 3
let M = 5
let A = [2, 1, 5, 1, 2, 2, 2]

console.log(solution(K, M, A))
