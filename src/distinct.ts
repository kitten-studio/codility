// https://app.codility.com/programmers/lessons/6-sorting/distinct/
function solution(A: number[]): number {
	const set = new Set()
	for (const n of A) {
		set.add(n)
	}
	return set.size
}

console.log(solution([2, 1, 1, 2, 3, 1]))

export {}
