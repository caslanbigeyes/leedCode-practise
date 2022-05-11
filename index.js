/* 
    给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
*/


var search = function (nums, target) {
    let oMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        oMap.set(nums[i], i)
        if (oMap.has(target)) {  // 利用键名唯一
            return oMap.get(target)
        }
    }
    return -1
};
console.log(search([1, 2, 3, 4, 5, 6, 723332, 3, 2], 323))