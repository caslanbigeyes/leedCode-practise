import React from 'react';

/**
 * 
 * ① 属性代理-添加额外生命周期
 * 我们可以针对某一种情况, 给组件增加额外的生命周期，我做了一个简单的demo，监听number改变，如果number改变，就自动触发组件的监听函数handerNumberChange。 具体写法如下
 * @param {component} Component 
 * @returns 
 */
function Hoc(Component) {
    return class WrapComponent extends React.Component {
        constructor() {
            super()
            this.node = null
        }
        UNSAFE_componentWillReceiveProps(nextprops) {
            if (nextprops.number !== this.props.number) {
                this.node.handerNumberChange && this.node.handerNumberChange.call(this.node)
            }
        }
        render() {
            return <Component {...this.props} ref={(node) => this.node = node} />
        }
    }
}

class Index extends React.Component {
    handerNumberChange() {
        /* 监听 number 改变 */
        console.log(222)
    }
    render() {
        return (
            <>
                <div>hello,world</div>
            </>
        )
    }
}

export default Hoc(Index);