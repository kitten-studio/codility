// https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
function solution(A: number[]): number {
	let eastCount = 0
	let passingCars = 0

	for (let i = 0; i < A.length; i++) {
		if (A[i] === 0) {
			eastCount++
		} else {
			passingCars += eastCount
			if (passingCars > 1000000000) return -1
		}
	}

	return passingCars
}

console.log(solution([0, 1, 0, 1, 1]))
export {}
