

// 高阶函数 // todo 高阶函数可以把其他函数作为参数输入或者作为其返回值输出。


// setTimeout 模拟 setInterval

const mySetInterVal = (fn, time) => {
    let timer = null;
    const InterVal = () => {
        timer = setTimeout(() => {
            fn();
            InterVal();
        }, time);
    }
    InterVal();
    return () => clearTimeout(timer);
}



const cancel = mySetInterVal(() => console.log(3333), 2000)

setTimeout(() => {
    mySetInterVal(() => console.log(1), 1000)
}, 1000)



// setInterval 模拟 setTimeout 

const mySetTimeOut = (fn, time) => {
    let timer = null;
    timer = setInterval(() => {
        clearInterval(timer);
        fn();
    }, time)
    return () => clearInterval(timer)
}



mySetTimeOut(() => console.log(2), 2000)