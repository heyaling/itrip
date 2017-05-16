import React from 'react'
import MyInfoLayout from 'components/MyInfo/MyInfoLayout'
import './style.css'
//我的信息主页 调用组件情况
export default class MyInfo extends React.Component {
  render() {
        return (
            <div className="order">
                <MyInfoLayout />
            </div>
        )
  }
}
