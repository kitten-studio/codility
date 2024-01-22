// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
function lengthOfLongestSubstring(s: string): number {
	let start = 0,
		maxLength = 0
	const map: Record<string, number> = {}

	for (let end = 0; end < s.length; end++) {
		const currentChar = s[end]
		if (map[currentChar] !== undefined && map[currentChar] >= start) {
			start = map[currentChar] + 1
		}
		map[currentChar] = end
		maxLength = Math.max(maxLength, end - start + 1)
	}

	return maxLength
}

console.log(lengthOfLongestSubstring("abcabcbb"))

export {}
