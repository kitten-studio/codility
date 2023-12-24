// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
function solution(A: number[]): number {
	// Implement your solution here
	A.sort((a, b) => a - b)
	// console.log(A)
	for (let i = 0; i < A.length; ++i) {
		const n = A[i]
		if (n !== i + 1) return 0
	}
	return 1
}

console.log(solution([4, 1, 3]))

export {}
