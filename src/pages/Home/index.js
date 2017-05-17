import React from 'react'
import { Row, Col } from 'antd'
import SearchHotelTravel from 'containers/SearchHotelTravel'
import HotelCarousel from 'components/HomeComponents/HotelCarousel'
import HomeHotel from 'components/HomeComponents/HomeHotel'
import HomeRecommend from 'components/HomeComponents/HomeRecommend'
import HomeAd from 'components/HomeComponents/HomeAd'
import home from 'constants/home'
import './style.css'

const { foreignHotel, hotHotel, hotDestination } = home.hotel

export default class Home extends React.Component {

  render() {
    return (
      <div className='home'>
        <Row>
          <Col span={10}>
            <SearchHotelTravel />
          </Col>
          <Col span={14}>
            <div className='home-carousel'>
              <HotelCarousel />
            </div>
          </Col>
        </Row>

        <div className='home-homeHotel'>
          <HomeHotel initData={foreignHotel} />
        </div>
        
        <div className='home-homeHotel'>
          <HomeHotel initData={hotHotel} />
        </div>

        <div className='hmoe-ad'>
          <HomeAd />
        </div>

        <div className='home-hotDestination'>
          <HomeHotel initData={hotDestination} />
        </div>

        <div className='homr-recommend'>
          <HomeRecommend />
        </div>
      </div>
    )
  }
}
