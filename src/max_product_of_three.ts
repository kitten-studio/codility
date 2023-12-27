// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
function solution(A: number[]): number {
	A.sort((a, b) => a - b)
	console.log(A)
	const min = A[0] * A[1] * A[2]
	const max = A[A.length - 3] * A[A.length - 2] * A[A.length - 1]
	const min_max = A[0] * A[1] * A[A.length - 1]
	const min_max2 = A[0] * A[A.length - 2] * A[A.length - 1]
	const resut = Math.max(Math.max(min_max, min_max2), Math.max(min, max))

	return resut
}

console.log(solution([-3, 1, 2, -2, 5, 6]))
export {}
