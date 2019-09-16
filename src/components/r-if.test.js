import {shallow,configure} from 'enzyme'
import Rif from './r-if'
import * as React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('测试Rif组件', () => {
  const warpper = shallow(<Rif>
    <div className="test">
      xxx
    </div>
  </Rif>)
  it('测试组件的UI状态', () => {
    expect(toJson(warpper)).toMatchSnapshot()
  })
  // 一种状态if
  it('测试if状态为true', () => {
    warpper.setProps({if: true})
    expect(warpper.find('.test').length).toBe(1)
  })
  it('测试if状态为false', () => {
    warpper.setProps({if: false})
    expect(warpper.find('.test').length).toBe(0)
  })
  // 两种状态if else
  it('测试if状态为true,else状态为false', () => {
    console.log('success')
  })
  it('测试if状态为false,else为true', () => {
    console.log('success')
  })
  // 两种状态if else_if
  it('测试if状态为true,else_if为true', () => {
    console.log('success')
  })
  it('测试if状态为true,else_if为false', () => {
    console.log('success')
  })
  it('测试if状态为false,else_if为true', () => {
    console.log('success')
  })
  it('测试if状态为false,else_if为false', () => {
    console.log('success')
  })
  // 三种状态if else_if else
  it('测试if状态为true,else_if为true,else', () => {
    console.log('success')
  })
  it('测试if状态为true,else_if为false,else', () => {
    console.log('success')
  })
  it('测试if状态为false,else_if为true,else', () => {
    console.log('success')
  })
  it('测试if状态为false,else_if为false,else', () => {
    console.log('success')
  })
})