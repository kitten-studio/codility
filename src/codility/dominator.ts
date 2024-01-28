// https://app.codility.com/programmers/lessons/8-leader/dominator/

function solution(A: number[]): number {
	// Implement your solution here
	const map = new Map()
	for (let i = 0; i < A.length; ++i) {
		const n = A[i]
		if (map.has(n)) {
			map.set(n, map.get(n) + 1)
		} else {
			map.set(n, 1)
		}
	}
	const halfCount = A.length / 2
	let value = -1
	for (const [k, v] of map.entries()) {
		if (v > halfCount) {
			value = k
			break
		}
	}
	for (let i = 0; i < A.length; ++i) {
		const n = A[i]
		if (value === n) return i
	}

	return -1
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]))

export {}
