// 选择排序

// 假设 最小值索引是i 


const arr = [108, 99, 12, 34, 5, 6, 67, 89, 0, 2, 3, 5];


function sortSelect(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // 交换 i 和最小值
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    return arr
}



console.log(sortSelect(arr))



// [108, 99, 12, 34, 5, 6, 67, 89, 0, 2, 3, 5];

// [0, 99, 12, 34, 5, 6, 67, 89, 108, 2, 3, 5]; 第一次

// [0, 2, 12, 34, 5, 6, 67, 89, 108, 99, 3, 5]; 第二次

// [0, 2, 3, 34, 5, 6, 67, 89, 108, 99, 12, 5]; 第三次

