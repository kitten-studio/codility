export {}
// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/
function solution(N: number): number {
	let count = 0

	let i = 1
	while (i * i < N) {
		if (N % i === 0) {
			count += 2
		}
		i++
	}

	if (i * i === N) {
		count++
	}

	return count
}

console.log(solution(24))
