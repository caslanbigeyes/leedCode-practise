
/**
 * 3.2 事件监控
 *  HOC还可以对原有组件进行监控。比如对一些事件监控，错误监控，事件监听等一系列操作。
 * @param {component} Component 
 * @returns 
 */
import React, { useRef, useEffect } from 'react';

function ClickHoc(Component) {
    return function Wrap(props) {
        const dom = useRef(null)
        useEffect(() => {
            const handerClick = () => console.log('发生点击事件')
            dom.current.addEventListener('click', handerClick)
            return () => dom.current.removeEventListener('click', handerClick)
        }, [])
        return <div ref={dom}  ><Component  {...props} /></div>
    }
}


class Index extends React.Component {
    render() {
        return <div className='index'  >
            <p>hello，world</p>
            <button>组件内部点击</button>
        </div>
    }
}
export default ClickHoc(() => {
    return <div className='box'  >
        <Index />
        <button>组件外部点击</button>
    </div>
});

