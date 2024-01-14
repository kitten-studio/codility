function groupAnagrams(strs: string[]): string[][] {
	const map: { [key: string]: string[] } = {}

	for (const str of strs) {
		const sortedStr = str.split("").sort().join("")
		if (!map[sortedStr]) {
			map[sortedStr] = []
		}
		map[sortedStr].push(str)
	}

	console.log(map)

	return Object.values(map)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

export {}
