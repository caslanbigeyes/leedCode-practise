import React from 'react';
/**
 * 
 * ③ 进阶：异步组件(懒加载)
 * 不知道大家有没有用过dva,里面的dynamic就是应用HOC模式实现的组件异步加载，我这里简化了一下，提炼核心代码，如下：
 * @param {component} loadRouter 
 * @returns 
 */
/* 路由懒加载HOC */
export function AsyncRouter(loadRouter) {
    return class Content extends React.Component {
        state = { Component: null }
        componentDidMount() {
            if (this.state.Component) return
            loadRouter()
                .then(module => module.default)
                .then(Component => this.setState({ Component },
                ))
        }
        render() {
            const { Component } = this.state
            return Component ? <Component {
                ...this.props
            }
            /> : null
        }
    }
}


const Index = AsyncRouter(() => import('./App1'))

export default Index;

