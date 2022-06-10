import React from 'react';



class Index extends React.Component {
    render() {
        return <div>
            <ul>
                <li>react</li>
                <li>vue</li>
                <li>Angular</li>
            </ul>
        </div>
    }
}

/**
 * ④ 反向继承 ： 渲染劫持
 * HOC反向继承模式，可以实现颗粒化的渲染劫持，也就是可以控制基类组件的render函数，还可以篡改props，或者是children，我们接下来看看，这种状态下，怎么使用高阶组件。
 * @param {compoent} Component 
 * @returns 
 */
function HOC(Component) {
    return class Advance extends Component {
        render() {
            const element = super.render()
            console.log(element)
            const otherProps = {
                name: 'alien'
            }
            /* 替换 Angular 元素节点 */
            const appendElement = React.createElement('li', {}, `hello ,world , my name  is ${otherProps.name}`)
            console.log(React.Children,'React.Children')
            const newchild = React.Children.map(element.props.children.props.children, (child, index) => {
                if (index === 2) return appendElement
                return child
            })
            console.log(newchild)
            return React.cloneElement(element, element.props, newchild)
        }
    }
}
export default HOC(Index)

