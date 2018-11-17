# 仅使用react 完成

## 知识点

### React编程理念之 响应式编程
+ UI = render(state)
当state和props发生变化时，render()返回更新后的JSX,react 比对更新前后的jsx，只更新差异部分


### JSX
+ jsx: javascript eXtension，让我们可以在JavaScript中编写像HTML一样的代码
+ jsx 是 React.createElement()的语法糖

### Virtual DOM
+ 虚拟DOM
+ JSX虽然看起来像html,但最终会被Babel转为一条条React.createElement()语句
+ React 不会根据这些语句去直接创建DOM，而是创建 Virtual DOM
+ 当render() 返回的jsx发生变化时，首先更新 Virtual DOM, 然后比对更新前后的 Virtual DOM, 找出不同的部分
+ 然后在真实的 DOM中 直接更新 虚拟 DOM中 更新的 部分



### 组件的创建方式
```JavaScript
class 组件名 extends Component{
    // Component 作为组件的基类，提供了除render()以外的所有构造函数
    constructor(...props){
        // 通过super 调用 Component父类的构造函数，将props绑定到this中
        super(...props)
        // 初始化 state状态
        this.state = {}
        // 绑定函数this指向
        this.func = this.func.bind(this)
    }
    render() {
        return (
            //JSX
        )
    }
}
const 组件名 = (props) => {
    return (
        //JSX
    )
}
```


### 组件的数据种类
+ props: 组件的对外接口，用于从组件调用者处获取数据
+ state: 组件的内部状态，
    + 只能通过this.setState()方法修改state
两者改变都能引发组件的重新渲染

### 父子组件间通信
+ 父子通信: <子组件 name='dsying' info={}> 子组件通过this.props.name和this.props.info来获取
+ 子父通信: 父组件提供一个函数 <子组件 onUpdate={this.fatherCall}> 子组件通过this.props.onUpdate获取到回调函数，然后执行函数

### 组件的constructor
组件的构造函数主要做了两件事
+ 1 初始化state
+ 2 绑定函数
```javascript
constructor(props){
    //通过super 调用父类React.Component的构造函数，将props绑定到this上
    super(props)
    this.state = {}
    this.func = this.func.bind(this)
}
```
### 生命周期
+ 挂载阶段
    + componentWillmount()
    + render()              
        + **仅返回JSX对象，决定页面渲染什么内容**
    + componentDidmount()   
        + **此阶段可以进行异步操作**
+ 更新阶段
    + componentWillReceiveProps(nextProps)
        + **只要父组件的render函数被调用，就会触发该函数**
    + shouldComponentUpdate()   
        + **返回一个boolean值，决定此次更新能否继续下去，即决定了组件什么时候可以不渲染**
    + componentWillUpdate()
    + render()
    + componentDidUpdate()
+ 卸载阶段
    + componentWillunmount()