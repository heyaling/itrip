import React from 'react'
import { Row, Col } from 'antd'
import SearchHotelTravel from 'containers/SearchHotelTravel'
import HotelCarousel from 'components/HomeComponents/HotelCarousel'
import HomeHotel from 'components/HomeComponents/HomeHotel'
import HomeHotDestination from 'components/HomeComponents/HomeHotDestination'
import HomeRecommend from 'components/HomeComponents/HomeRecommend'
import HomeAd from 'components/HomeComponents/HomeAd'
import './style.css'


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
          <HomeHotel />
        </div>
        
        <div className='home-homeHotel'>
          <HomeHotel />
        </div>

        <div className='hmoe-ad'>
          <HomeAd />
        </div>

        <div className='home-hotDestination'>
          <HomeHotDestination />
        </div>

        <div className='homr-recommend'>
          <HomeRecommend />
        </div>
      </div>
    )
  }
}
