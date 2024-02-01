// https://leetcode.com/problems/sort-characters-by-frequency/description/

export {}

function frequencySort(s: string): string {
	const frequencyMap = new Map<string, number>()
	for (const char of s) {
		frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1)
	}
	const sortedArray = Array.from(s)
	sortedArray.sort((a, b) => {
		const freqA = frequencyMap.get(a)
		const freqB = frequencyMap.get(b)
		if (freqB !== freqA) {
			return freqB! - freqA!
		}

		return a.localeCompare(b)
	})

	return sortedArray.join("")
}

console.log(frequencySort("Aabb"))
