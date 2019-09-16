## Rif 组件
### 背景
在react中因为jsx的语法，一般通过某条件判断是否渲染组件一般是通过`this.state.xxx ? <A/> : <B/>` 这样看起来虽然也挺简洁的，但是如果是需要多层判断的话是不是就很麻烦了🤦‍，例如这样
```
this.state.xxx 
  ?  <A /> : this.state.yyy 
    ?  <B /> : this.state.aaa
      ?  <C /> : null

```
这样写的话虽然自己写着很爽，但是别人看你的代码的话就很想打人....所以这个Rif的组件就是解决这个问题的。

---

### 如何使用
1.这个组件的用法类似vue的v-if，这个组件接收三个属性if、else_if、else,下面这两个是最简单的用法，也是用的最多的
```
import * as React from 'react'
import Rif from 'Rif'
import A from './A'
import B from './B'

class Test extends React.Component<any,any> {
  render() {
    return (
      <div>
        <Rif if={true}>
          <A />
        </Rif>
      </div>
    )
  }
}
export default Test
```
👆如果if为true(任何真值)的话就会渲染组件A，为false的话就不会渲染组件A
```
import * as React from 'react'
import Rif from 'Rif'
import A from './A'
import B from './B'

class Test extends React.Component<any,any> {
  render() {
    return (
      <div>
        <Rif if={true}>
          <A />
        </Rif>
        <Rif else>
          <B />
        </Rif>
      </div>
    )
  }
}
export default Test
```
👆当if的值为true(包括任何真值)的话，就会渲染组件A，而不会渲染组件B，如果if的值为false的话，就会渲染组件B而不会渲染组件A

2.下面这个用法是包括else_if

```
import * as React from 'react'
import Rif from 'Rif'
import A from './A'
import B from './B'
import C from './C'

class Test extends React.Component<any,any> {
  render() {
    return (
      <div>
        <Rif if={false}>
          <A />
        </Rif>
        <Rif else_if={true}>
          <B />
        </Rif>
        <Rif else>
          <C />
        </Rif>
      </div>
    )
  }
}
export default Test

```
像👆这种情况的话就会渲染组件B，而不会渲染组件A和C

---

### 注意事项
**❌下面这三种用法都是错误的**

**⚠️这个组件必须包含if、else_if、else三个属性之一**
```
import * as React from 'react'
import Rif from 'Rif'
import A from './A'

class Test extends React.Component<any,any> {
  render() {
    return (
      <div>
        <Rif>
          <A />
        </Rif>
      </div>
    )
  }
}
export default Test
```
**⚠️包含else_if属性的组件必须紧跟包含if属性的组件后面**
```
import * as React from 'react'
import Rif from 'Rif'
import A from './A'

class Test extends React.Component<any,any> {
  render() {
    return (
      <div>
        <Rif else_if={true}>
          <A />
        </Rif>
      </div>
    )
  }
}
export default Test
```
**⚠️包含else属性的组件必须紧跟包含if属性的组件后面或者else_if属性后面**
```
import * as React from 'react'
import Rif from 'Rif'
import A from './A'

class Test extends React.Component<any,any> {
  render() {
    return (
      <div>
        <Rif else>
          <A />
        </Rif>
      </div>
    )
  }
}
export default Test
```