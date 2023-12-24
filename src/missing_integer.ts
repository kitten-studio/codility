// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
function solution(A: number[]): number {
	// Implement your solution here
	const seen = new Set<number>()
	for (const num of A) {
		if (num > 0) {
			seen.add(num)
		}
	}
	let smallest = 1
	while (seen.has(smallest)) {
		smallest++
	}
	return smallest
}

console.log(solution([1, 3, 6, 4, 1, 2]))
export {}
