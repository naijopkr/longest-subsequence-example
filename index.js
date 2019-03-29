/* 

Write a function that takes two strings, s1 and s2 
and returns the longest common subsequence of s1 and s2

"ABAZDC", "BACBAD" => "ABAD"
"AGGTAB", "GXTXAYB" => "GTAB"
"aaaa", "aa" => "aa"

*/

const longestSubseq = (s1, s2, s1StartIdx = 0, s2StartIdx = 0) => {
  const results = []

  // Here we will loop through s1 and try to find the s1 character on s2
  for (let s1Idx = s1StartIdx; s1Idx < s1.length; s1Idx++) {
    const s1Char = s1[s1Idx]
    const s2Idx = s2.indexOf(s1Char, s2StartIdx)

    const result = []

    /* If it finds the character on s2, it will push it to result array and call
    this function to the next position.
    The result array will be filled with a subsequence candidate or
    it will be empty */
    if (s2Idx !== -1) {
      result.push(s1Char, ...longestSubseq(s1, s2, s1Idx + 1, s2Idx + 1))
    }
    results.push(result)
  }
  
  const longest = findLongest(results)
  return longest.join('')
}

/* Here it is really simple, it gets all the subsequences 
and returns the longest one */
const findLongest = (candidates) => {
  let longest = []

  for (let candidate of candidates) {
    longest = candidate.length > longest.length
      ? candidate
      : longest
  }

  return longest
}

console.log(longestSubseq('ABAZDC', 'BACBAD'))
console.log(longestSubseq('AGGTAB', 'GXTXAYB'))
console.log(longestSubseq('aaaa', 'aa'))
console.log(longestSubseq('bbbbb', 'aa'))