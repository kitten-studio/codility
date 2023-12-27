function solution(S: string): number {
	const stack: string[] = []
	for (let i = 0; i < S.length; ++i) {
		const c = S[i]
		if (c === "(") {
			stack.push(c)
		} else {
			const p = stack.pop()
			if (p !== "(") return 0
		}
	}

	return stack.length === 0 ? 1 : 0
}

console.log(solution("(()(())())"))

export {}
