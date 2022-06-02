
1.// key:Array key代表事件名  Array事件列表  参考vue中 $emit $on
2.  // 定义所有事件列表,此时需要修改格式：
//   key: {
//     id: Function,
//     id: Function
//   },
//   key: Object,
// } 
3.   // 定义所有事件列表,此时需要修改格式：
// // {
//   key: {
//     D+id: Function,
//     id: Function
//   },
//   key: Object,
// } 


/* 
    实现一个简易的EventBus 在我们生活中 经常遇到微信自动弹出公众号消息 实质我们订阅了他,在有通知的的会推送回给我们
    1. 订阅消息 发布消息 取消订阅 执行一次
*/
class EventBus {
    constructor() {
        this.EventBusObj = {}  // 事件集合

        this.callbackId = 0;  // 存储每个函数的id 用去取消订阅
    }
    // 订阅事件
    $on(name, callback) {
        if (!this.EventBusObj[name]) {
            this.EventBusObj[name] = {};
        }
        const id = this.callbackId++;
        this.EventBusObj[name][id] = callback; // 以id形式存储回调函数
        return id
    }
    // 发布事件
    $emit(name, ...args) {
        console.log(this.EventBusObj[name], 22)
        const callbackList = this.EventBusObj[name]
        for (const id in callbackList) {
            callbackList[id](...args);
        }
    }
    $cancel(name, id) {
        delete this.EventBusObj[name][id];
        console.log(`id为${id}的事件被取消了`)
        if (!Object.keys(this.EventBusObj[name]).length) {
            delete this.EventBusObj[name];
        }
    }
}


let EB = new EventBus();


// 订阅事件
EB.$on('key1', (name, age) => {
    console.info("我是订阅事件A:", name, age);
})
let id = EB.$on("key1", (name, age) => {
    console.info("我是订阅事件B:", name, age);
})
EB.$on("key2", (name) => {
    console.info("我是订阅事件C:", name);
})


// 发布事件key1
EB.$emit('key1', "小猪课堂", 26);
// 取消订阅事件
EB.$cancel('key1', id);
// 发布事件key1
EB.$emit('key1', "小猪课堂", 26);
// 发布事件
EB.$emit('key2', "小猪课堂");
