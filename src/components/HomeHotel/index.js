import React from 'react'
import { Icon } from 'antd'
import HotelCardList from 'components/HotelCardList'
import './style.css'

import longImg from './haiwai.png'

export default class HomeHotel extends React.Component {
  render() {
    return (
      <section className='HomeHotel'>
        <div className='HomeHotel-title'>
          <h3>xxx酒店</h3>
          <ul className='hotelCls'>
            <li className='hotelClsOn'>酒店1</li>
            <li>酒店2</li>
            <li>酒店3</li>
          </ul>
          <a className='HomeHotel-more' href="#">
            更多xxx酒店
            <Icon style={{ fontSize: '10px' }} type="double-right" />
          </a>
        </div>
        <div className='HomeHotel-hotelList'>
          <div className='HomeHotel-left'>
            <a href="#">
              <img width='178' height='518' src={longImg} alt="" />
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
