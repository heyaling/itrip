import React from 'react'
import HotelCard from 'components/HotelCard'
import './style.css'

export default class HotelListCard extends React.Component {
  render () {
    return (
      <div className='HotelCardList'>
        <a className='HotelCardList-item' href="#">
          <HotelCard />
        </a>
        <a className='HotelCardList-item' href="#">
          <HotelCard />
        </a>
        <a className='HotelCardList-item' href="#">
          <HotelCard />
        </a>
        <a className='HotelCardList-item' href="#">
          <HotelCard />
        </a>
      </div>
    )
  }
}
