// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。


// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。


function findMaxLen(str) {
    let arr = [];
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        let index = arr.indexOf(str[i])
        if (index !== -1) {
            arr.splice(0, index + 1);
        }

        arr.push(str[i]);
        max = Math.max(arr.length, max);
    }
    return max;
}

// console.log(findMaxLen('abcabcbb'))

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let res = []
    let max = 0
    for (let str of s) {
        while (res.includes(str)) {
            res.shift()
        }
        res.push(str)
        console.log(res)
        max = Math.max(max, res.length)
    }
    return max
};
console.log(lengthOfLongestSubstring('abcabcbb'),111)