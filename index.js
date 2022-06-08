// 1、1、2、3、5、8...计算第n个数的值（斐波那契数列）

function calcTotal(n) {
    if (n === 1 || n === 2) return 1;
    return calcTotal(n - 1) + calcTotal(n - 2);
}

console.log(calcTotal(7))




// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

// 你可以认为每种硬币的数量是无限的。


/* 
输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
*/


/* 
思路 
todo 这是一道典型的动态规划算法，这里考虑使用贪心+递归来枚举所有满足条件的硬币组合（总和等于amount），使用备忘录来避免重叠子问题的计算。
todo 对于硬币找零问题来说，优先使用大额面值的硬币，是一种局部最优的策略，因此我们从最大面额的硬币开始递归
todo 需要注意的是，如果最后找不到等于总额的组合，需要回溯去进行下一轮递归搜索，直至找出所有满足条件的组合
todo 在这个过程中通过维护一个map，来存储已经计算过的总额，在每次递归开始前，优先在这个map中查找，
todo 找到了就直接返回，否则进行递归计算。同时维护一个最小硬币数量，初始值为Infinity，每次递归的过程中的进行更新，最后返回这个最小硬币数量。
*/

const calcCoins = (coins, amount) => {
    const map = new Map(); // 存储计算过的总额
    map.set(0, 0);
    const loop = (coins, amount, map) => {
        if (map.has(amount)) {
            return map.get(amount);
        }
        let minCount = Infinity;
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            if (coin > amount) {
                continue;
            }
            const rest = amount - coin;
            const resCount = loop(coins, rest, map);
            if (resCount === -1) {
                continue;
            }
            minCount = Math.min(rest, resCount + 1);
        }
        if (minCount === Infinity) {
            map.set(amount, -1);
            return -1
        }
        map.set(amount, minCount);
        return minCount;
    }
    return loop(coins, amount, map);
}
// const coins = [1, 2, 5], amount = 11;
const coins = [1], amount = 2
console.log(calcCoins(coins, amount))

// function coinChange(coins, amount,) {
//     const memo = new Map()
//     memo.set(0, 0)
//     const coinChangeHelper = (coins, amount, memo) => {
//         if (memo.has(amount)) {
//             return memo.get(amount)
//         }
//         let minCount = Infinity
//         for (let i = 0; i < coins.length; i++) {
//             const coin = coins[i]
//             if (coin > amount) {
//                 continue
//             }
//             const res = amount - coin
//             const resMinCount = coinChangeHelper(coins, res, memo)
//             if (resMinCount === -1) {
//                 continue
//             }
//             minCount = Math.min(minCount, resMinCount + 1)
//         }
//         if (minCount === Infinity) {
//             memo.set(amount, -1)
//             return -1
//         }
//         memo.set(amount, minCount)
//         return minCount
//     }
//     return coinChangeHelper(coins, amount, memo)
// };