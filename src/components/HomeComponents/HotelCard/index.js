import React from 'react'
import './style.css'

export default class HotelCard extends React.Component {
  render () {
    const hotel = this.props.hotel
    
    return (
      <div className="HotelCard">
        <div className='HotelCard-img'>
          <img src={hotel.staticImgUrl ? require(hotel.imgUrl) : hotel.imgUrl} alt=""/>
          {/*<i className='iconfont icon-sanjiao'/>
          <span>返现</span>*/}
        </div>
        <div className='HotelCard-desc'>
          <p>{hotel.hotelName}</p>
          <p>
            <span>￥</span>
            <b>{hotel.minPrice}</b>
            <span>起</span>
          </p>
        </div>
      </div>
    )
  }
}
