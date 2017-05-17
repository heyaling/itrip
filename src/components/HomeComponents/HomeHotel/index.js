import React from 'react'
import { Icon } from 'antd'
import HotelCardList from 'components/HomeComponents/HotelCardList'
import { postRequest, getRequest } from 'common/js/fetch'
import { hotelListUrl } from 'constants/url'
import './style.css'

import longImg from './haiwai.png'


export default class HomeHotel extends React.Component {
  state = {
    selectedIndex: 0,
    hotelList: []
  }

  componentWillMount() {
    const { initData } = this.props
    const { selectedIndex } = this.state
    const cityId = initData.category[selectedIndex].cityId

    if (initData.hotelList) {
      this.staticFlag = true
      this.setState({
        hotelList: initData.hotelList
      })
      return
    }
    
    this.getHotelList(cityId, selectedIndex)
  }

  handleSwitchCity(cityId, selectedIndex) {
    if (this.staticFlag) return
    this.getHotelList(cityId, selectedIndex)
  }

  getHotelList (cityId, selectedIndex) {
    postRequest(hotelListUrl, {
      cityId,
      count: 6
    }).then(res => {
      if (res.success === 'true') {
        this.setState({
          selectedIndex,
          hotelList: res.data
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }

  renderItem() {
    const { initData } = this.props
    const { selectedIndex } = this.state
    const { category } = initData

    return category.map((item, i) => (
      <li
        key={item.cityId}
        onClick={this.handleSwitchCity.bind(this, item.cityId, i)}
        className={i === selectedIndex ? 'hotelClsOn' : ''}>
        {item.name}
      </li>
    ))
  }

  render() {
    const { initData } = this.props
    const { hotelList } = this.state

    return (
      <section className='HomeHotel'>
        <div className='HomeHotel-title'>
          <h3>{initData.title}</h3>
          <ul className='hotelCls'>
            {this.renderItem()}
          </ul>
          <a className='HomeHotel-more' href="#">
            更多{initData.title}
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
            <HotelCardList hotelList={hotelList} />
          </div>
        </div>
      </section>
    )
  }
}
