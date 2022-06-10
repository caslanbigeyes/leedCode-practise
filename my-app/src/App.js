import React from 'react';

/**
 * ① 基础 ：动态渲染
    对于属性代理的高阶组件，虽然不能在内部操控渲染状态，但是可以在外层控制当前组件是否渲染，这种情况应用于，权限隔离，懒加载 ，延时加载等场景。
 * @param {component} WrapComponent 
 * @returns {newComponent}
 */
function renderHOC(WrapComponent) {
  return class Index extends React.Component {
    constructor(props) {
      super(props)
      this.state = { visible: true }
    }
    setVisible() {
      this.setState({ visible: !this.state.visible })
    }
    render() {
      const { visible } = this.state
      return <div className="box"  >
        <button onClick={this.setVisible.bind(this)} > 挂载组件 </button>
        {visible ? <WrapComponent {...this.props} setVisible={this.setVisible.bind(this)} /> : <div className="icon" >111</div>}
      </div>
    }
  }
}

class Index extends React.Component {
  render() {
    const { setVisible } = this.props
    return <div className="box" >
      <p>hello,my name is alien</p>
      <img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=294206908,2427609994&fm=26&gp=0.jpg' />
      <button onClick={() => setVisible()}  > 卸载当前组件 </button>
    </div>
  }
}
export default renderHOC(Index)
