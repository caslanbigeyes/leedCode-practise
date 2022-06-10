import React, { useEffect, useState } from 'react';


/**
 * 
 * ② 进阶 ：分片渲染
 * 是不是感觉不是很过瘾，为了让大家加强对HOC条件渲染的理解，我再做一个分片渲染+懒加载功能。为了让大家明白，我也是绞尽脑汁啊😂😂😂。
 * 进阶：实现一个懒加载功能的HOC，可以实现组件的分片渲染,用于分片渲染页面，不至于一次渲染大量组件造成白屏效果
 * @param {component} WrapComponent 
 * @returns 
 */
/* HOC */
function renderHOC(WrapComponent) {

    const renderQueue = []
    let isFirstrender = false

    const tryRender = () => {
        const render = renderQueue.shift()
        if (!render) return
        setTimeout(() => {
            render() /* 执行下一段渲染 */
        }, 1000)
    }

    return function Index(props) {
        const [isRender, setRender] = useState(false)
        useEffect(() => {
            renderQueue.push(() => {  /* 放入待渲染队列中 */
                setRender(true)
            })
            if (!isFirstrender) {
                tryRender() /**/
                isFirstrender = true
            }
        }, [])
        return isRender ? <WrapComponent tryRender={tryRender}  {...props} /> : <div className='box' ><div className="icon" >加载中</div></div>
    }
}
/* 业务组件 */
class Index extends React.Component {
    componentDidMount() {
        const { name, tryRender } = this.props
        /* 上一部分渲染完毕，进行下一部分渲染 */
        tryRender()
        console.log(name + '渲染')
    }
    render() {
        return <div>
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=294206908,2427609994&amp;fm=26&amp;gp=0.jpg" />
        </div>
    }
}
/* 高阶组件包裹 */
const Item = renderHOC(Index)

export default () => {
    return <React.Fragment>
        <Item name="组件一" />
        <Item name="组件二" />
        <Item name="组件三" />
    </React.Fragment>
}
