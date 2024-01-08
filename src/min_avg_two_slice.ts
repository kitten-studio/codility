// https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
function solution(A: number[]): number {
	let minAvg = Number.MAX_SAFE_INTEGER - 1
	let minIndex = 0

	for (let i = 0; i < A.length; ++i) {
		let sum = A[i] + A[i + 1]
		let avg = sum / 2
		if (avg < minAvg) {
			minAvg = avg
			minIndex = i
		}

		if (i < A.length - 2) {
			sum += A[i + 2]
			avg = sum / 3
			if (avg < minAvg) {
				minAvg = avg
				minIndex = i
			}
		}
	}

	return minIndex
}

console.log(solution([4, 2, 2, 5, 1, 5, 8]))

export {}
