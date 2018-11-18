# 组件的context

在介绍react-redux之前，我们先看一下 Counter.js和Summary.js,你会发现这两个组件都引入了store
```javascript
import store  from '../../store/store';
```
虽然redux,全局只有一个store,但是这样直接导入还是有问题。

## 问题？
在实际开发中，你都不知道Counter和Summary这两个组件会在哪里用到，又怎么会知道唯一的Redux Store的文件位置呢？
所以这样直接导入Store是非常不利于组件复用的

## 如何解决？
一个应用中，最好只有一个地方需要直接导入Store,这个位置当然应该是在调用最顶层React组件的位置，在本例中就是 src/index.js,
其余组件应该避免直接导入Store

## 只在顶层导入Store,其它地方如何获取store?
React提供了一个叫context的功能，能够完美的解决这个问题

## 什么是context？
所谓Context,就是上下文环境，让一个树状组件树上的所有组件都能访问一个共同的对象，完成这个任务需要上下级组件共同协作

### Provider组件提供context
> 提供一个Provider组件，作为context的通用提供者
```javascript
class Provider extends Component {
    // 1 获取子组件需要的 context
    getChildContext() {
        return {
          store: this.props.store
        };
      }
    // 2 仅将Provider组件的子组件渲染出来
    render() {
        return this.props.children;
    }
}

// 3 指定store的类型
Provider.propTypes = {
    store: PropTypes.object.isRequired
  }
// 4 指定childContextTypes类型
Provider.childContextTypes = {
    store: PropTypes.object
};
```

### 调用React组件的最顶层位置渲染Provider组件
+ Provider组件的render()，return this.props.children,这里的 children指的就是CounterPanel组件
```javascript
import store from './store/store'

// 全局唯一一处引用Store的位置，然后Provider的子组件都可以获取context
ReactDOM.render(
    <Provider store={store}>
      <CounterPanel />
    </Provider>,
    document.getElementById('root')
  );
```

### Provider的子组件如何获取context
```javascript
class Summary extends Component {
    constructor(props, context){
        // 1 将context绑定到this上
        super(props, context)
        this.state = {
            count: this.getSummary()
        }
    }

    // 2 后续代码 可以通过 this.context.store获取 store
}

// 3 规定contextTypes
Summary.contextTypes = {
    store: PropTypes.object
}
```