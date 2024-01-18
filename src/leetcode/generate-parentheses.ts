// https://leetcode.com/problems/generate-parentheses/
function generateParenthesis(n: number): string[] {
	let result: string[] = []

	function backtrack(s: string = "", open: number = 0, close: number = 0) {
		if (s.length === 2 * n) {
			result.push(s)
			return
		}
		if (open < n) {
			backtrack(s + "(", open + 1, close)
		}
		if (close < open) {
			backtrack(s + ")", open, close + 1)
		}
	}

	backtrack()
	return result
}

console.log(generateParenthesis(1))

export {}
