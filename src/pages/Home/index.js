import React from 'react'
import { Row, Col } from 'antd'
import SearchHotelTravel from 'containers/SearchHotelTravel'
import HotelCarousel from 'components/HotelCarousel'
import HomeHotel from 'components/HomeHotel'
import HomeRecommend from 'components/HomeRecommend'
import HomeAd from 'components/HomeAd'
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

        <div className='hmoe-ad'>
          <HomeAd/>
        </div>

        <div className='homr-recommend'>
          <HomeRecommend/>
        </div>
      </div>
    )
  }
}
