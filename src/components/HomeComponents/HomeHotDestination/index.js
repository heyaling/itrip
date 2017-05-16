import React from 'react'
import { Icon } from 'antd'
import HotelCardList from 'components/HomeComponents/HotelCardList'
import './style.css'

import longImg3 from './djrm.png'

export default class HomeHotDestination extends React.Component {
  render() {
    return (
      <section className='HomeHotel'>
        <div className='HomeHotel-title'>
          <h3>单季热门目的地</h3>
          <ul className='hotelCls'>
            <li className='hotelClsOn'>美食</li>
            <li>赏花</li>
            <li>登山</li>
            <li>古镇</li>
            <li>度假</li>
          </ul>
          <a className='HomeHotel-more' href="#">
            更多当地热门目的地
            <Icon style={{ fontSize: '10px' }} type="double-right" />
          </a>
        </div>
        <div className='HomeHotel-hotelList'>
          <div className='HomeHotel-left'>
            <a href="#">
              <img width='178' height='518' src={longImg3} alt="" />
            </a>
          </div>
          <div className='HomeHotel-right'>
            <HotelCardList />
          </div>
        </div>
      </section>
    )
  }
}
