import React, { useMemo, useState } from 'react';
/**
 * ① 基础: 节流原理
hoc可以配合hooks的useMemo等API配合使用，可以实现对业务组件的渲染控制，减少渲染次数，
从而达到优化性能的效果。如下案例，我们期望当且仅当num改变的时候，渲染组件，但是不影响接收的props。我们应该这样写我们的HOC。
 * @param {compoent} Component 
 * @returns 
 */
function HOC(Component) {
    return function renderWrapComponent(props) {
        const { num } = props
        const RenderElement = useMemo(() => <Component {...props} />, [num])
        return RenderElement
    }
}
class Index extends React.Component {
    render() {
        console.log(`当前组件是否渲染`, this.props)
        return <div>hello,world, my name is alien </div>
    }
}
const IndexHoc = HOC(Index)

export default () => {
    const [num, setNumber] = useState(0)
    const [num1, setNumber1] = useState(0)
    const [num2, setNumber2] = useState(0)
    return <div>
        <IndexHoc num={num} num1={num1} num2={num2} />
        <button onClick={() => setNumber(num + 1)} >num++</button>
        <button onClick={() => setNumber1(num1 + 1)} >num1++</button>
        <button onClick={() => setNumber2(num2 + 1)} >num2++</button>
    </div>
}
