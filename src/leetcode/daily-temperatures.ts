// https://leetcode.com/problems/daily-temperatures/description/
function dailyTemperatures(temperatures: number[]): number[] {
	let n: number = temperatures.length
	let answer: number[] = new Array(n).fill(0)
	let stack: number[] = []

	for (let i = 0; i < n; i++) {
		// 현재 온도가 스택의 상단 온도보다 높을 때까지 반복
		while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
			let prevIndex = stack.pop()!
			answer[prevIndex] = i - prevIndex
		}
		stack.push(i)
	}

	return answer
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // [1, 1, 4, 2, 1, 1, 0, 0]

export {}
