import React from 'react'
import './style.css'

// temp
import img from './haiwai01.png'

export default class HotelCard extends React.Component {
  render () {
    return (
      <div className="HotelCard">
        <div className='HotelCard-img'>
          <img src={img} alt=""/>
          {/*<i className='iconfont icon-sanjiao'/>
          <span>返现</span>*/}
        </div>
        <div className='HotelCard-desc'>
          <p>曼谷盛泰澜中央世界商业中心酒</p>
          <p>
            <span>￥</span>
            <b>639</b>
            <span>起</span>
          </p>
        </div>
      </div>
    )
  }
}
