import * as React from 'react'

function Rif(props:IProps) {
  // 记录第一个if的状态
  if(props.if !== undefined) {
    if(typeof props.if === 'function') {
      throw new Error('if property is not receiving function property')
    }
    Rif.prototype.if = props.if
    // 初始化
    Rif.prototype.else_if = undefined
    Rif.prototype.hasElseIf = false
    Rif.prototype.lastIf = props.if
    Rif.prototype.elseIfStatus = []
  }
  // 没有if, else_if, else状态的时候抛出错误
  if(props.if === undefined && props.else_if === undefined && props.else === undefined) {
    throw new Error('Rif must contain if or else_if or else property')
  }
  // 没有if状态的时候直接使用else_if状态抛出错误
  if(Rif.prototype.lastIf === undefined && props.else_if !== undefined) {
    throw new Error('Rif must contain if propetry before else_if property')
  }
  // 没有if状态的时候直接使用else状态抛出错误
  if(Rif.prototype.lastIf === undefined && props.else) {
    throw new Error('Rif must contain if propetry before else property')
  }
  // 判断是否有else_if状态，把所有的else_if状态存起来
  if(props.else_if !== undefined) {
    if(typeof props.else_if === 'function') {
      throw new Error('else_if property is not receiving function property')
    }
    Rif.prototype.hasElseIf = true
    Rif.prototype.elseIfStatus.push(props.else_if)
  }
  // 记录else_if的状态
  if(props.else_if && !Rif.prototype.else_if) {
    Rif.prototype.else_if = props.else_if
  } else if(props.else_if !== undefined){
    Rif.prototype.else_if = null
  }
  // 三种状态if, else, else_if
  if(props.if !== undefined) {
    return(
      <div>
        {
          props.if ? props.children : null
        }
      </div>
    )
  } else if (props.else_if !== undefined) {
    return (
      <div>
        {
          Rif.prototype.else_if && !Rif.prototype.if ? props.children : null
        }
      </div>
    )
  } else {
     if(!Rif.prototype.hasElseIf) { // 1、只有if, else 
      Rif.prototype.lastIf = undefined
      return (
        <div>
          {
            Rif.prototype.if ? null : props.children
          }
        </div>
      )
     } else { // 2、有if, else_if, else状态
        let isShowElse = true
        for(let i = 0; i < Rif.prototype.elseIfStatus.length; i++) {
          if(Rif.prototype.elseIfStatus[i]) {
            isShowElse = false
            break
          }
        }
        Rif.prototype.lastIf = undefined
        return (
          <div>
            {
              !Rif.prototype.if && isShowElse ? props.children : null
            }
          </div>
        )
     }
  }
}
Rif.prototype.hasElseIf = false
Rif.prototype.elseIfStatus = []
export default Rif