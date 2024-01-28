export {}
// https://app.codility.com/programmers/lessons/6-sorting/triangle/
function solution(A: number[]): number {
	const arr = A.sort((a, b) => a - b)
	for (let i = 0; i < arr.length - 2; ++i) {
		let P = arr[i]
		let Q = arr[i + 1]
		let R = arr[i + 2]
		// console.log(n)
		let n1 = P + Q > R
		if (n1) return 1
	}
	return 0
}

console.log(solution([10, 2, 5, 1, 8, 20]))
