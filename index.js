/* 

给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。

*/


/* 
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
*/


/**
 * 
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 */
var findMedianSortedArrays = function (num1, num2) {
    const newArr = num1.concat(num2);
    const sortArr = newArr.sort(function (a, b) {
        return a - b
    });
    if (sortArr.length % 2 === 0) return (sortArr[sortArr.length / 2] + sortArr[sortArr.length / 2 - 1]) / 2
    return sortArr[Math.floor(sortArr.length / 2)]
};

console.log(findMedianSortedArrays([1, 3], [2]), 222)