// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
function solution(A: number[]): number {
	// 배열의 첫 번째 요소로 현재 합과 최대 합을 초기화합니다.
	let currentSum = 0
	let maxSum = A[0]

	for (let i = 0; i < A.length; i++) {
		// 현재 합을 현재 요소를 포함한 이전 합과 비교하여 갱신합니다.
		// 이 때, 현재 합이 음수가 되면 0으로 리셋합니다.
		currentSum = Math.max(0, currentSum + A[i])

		// 최대 합을 현재 합과 비교하여 갱신합니다.
		maxSum = Math.max(maxSum, currentSum)
	}

	// 위 알고리즘에서 모든 슬라이스 합이 음수인 경우를 처리합니다.
	// 이 경우, 최대 슬라이스 합은 가장 큰 단일 요소 값이 됩니다.
	if (maxSum === 0) {
		maxSum = A[0]
		for (let i = 1; i < A.length; i++) {
			maxSum = Math.max(maxSum, A[i])
		}
	}

	return maxSum // 계산된 최대 합을 반환합니다.
}

console.log(solution([3, 2, -6, 4, 0]))

export {}
