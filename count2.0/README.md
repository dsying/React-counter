# 引入Redux 管理数据

## Redux基本原则
+ 唯一数据源
+ 保持数据只读(State is read-only)
+ 数据改变只能通过纯函数reducer来完成

### 唯一数据源
+ 应用的状态数据应该只存储在唯一的一个store上
+ 这个唯一store上的状态，是一个树形结构，每个组件往往只是用树形对象上一部分的数据

### 保持状态只读
+ 不能直接去修改状态,要修改store的状态，必须要通过派发一个action对象完成
+ 前面说过了 React的基本原理是 UI=render(state) 驱动用户界面更改的是状态，如果状态只读，不能修改，怎么可能引起用户界面的变化呢？
+ 驱动用户界面的修改，就要改变用户的状态，但是改变状态的方法不是去修改状态上的值，而是创建一个新的状态返回给Redux

### 数据改变只能通过纯函数来改变
+ 这里所说的纯函数就是 Reducer
    + 纯函数意为：函数的返回结果必须由state,和action决定，而不产生任何副作用
+ reducer(state,action)  
    + state: 当前状态
    + action: 接收到的action 对象
    + return: 返回一个新的state
```javascript
const reducer(state, action) {
    switch (action.type) {
        case 'type1':
            break;
        case 'type2':
            break;
        default：
            return state
    }
}
```

## Redux api
### createStore(reducer, initValues, Store Enhancer)
+ reducer: 更新状态的纯函数
+ initValues: state的初始值
+ Store Enhancer: 增强器

### store.getState()
+ 获取store上存储的所有状态

### store.subscribe(listener)
+ 监听store的变化，触发listener
+ 可以放在在 componentWillMount()声明周期函数中 
+ 在componentWillUnmount()中 通过store.unsubscribe()注销监听

### store.dispatch(action)
+ 通过dispatch方法派发action


## Redux DevTools Extension
Redux 开发工具可以让 store 可视化
```javascript
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware()
  ));

```



## 容器组件和傻瓜组件
### 一个React组件基本上要完成两个功能
+ 1 和Redux Store打交道
    + 读取store的状态，用于组件状态的初始化
    + 监听store的状态，用于更新组件的状态
+ 2 根据当前props和state的值，渲染出用户界面

### 我们可以把一个组件根据上述两个功能拆分为两个组件
+ 组件1： 负责与Redux打交道
+ 组件2： 负责渲染用户界面

这样的关系里，这两个组件是父子组件的关系
+ 容器组件： 即组件1，我们把与Redux打交道的父组件称为容器组件，既然是容器即要包裹别的组件
+ 傻瓜组件： 即组件2，也称为UI组件，只负责渲染页面，数据来自于外部容器组件即父组件传过来的数据，通过**props**获取

上述都是我们已经学习过的知识

### 容器组件
+ 容器组件通过，**props**,将状态传递给傻瓜组件
```javascript
render() {
    return (
        <CounterUI handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} count={this.state.count}/>
    )
}
```
### 傻瓜组件(UI组件)
+ 傻瓜组件是一个**无状态组件**,只需要根据**props**来渲染结果，不需要**state**

```javascript
const CounterUI = (props) => {
    const { count, handleIncrement, handleDecrement } = props
    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <span>count: {count}</span>
        </div>
    )
}
```
