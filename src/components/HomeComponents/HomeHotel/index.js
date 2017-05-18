import React from 'react'
import { Icon, message, Spin } from 'antd'
import HotelCardList from 'components/HomeComponents/HotelCardList'
import { postRequest, getRequest } from 'common/js/fetch'
import { hotelListUrl } from 'constants/url'
import './style.css'

import longImg from './haiwai.png'


export default class HomeHotel extends React.Component {
  state = {
    loading: true,
    selectedIndex: 0,
    hotelList: []
  }

  componentWillMount() {
    const { initData } = this.props
    const { selectedIndex } = this.state

    if (!initData.category.length) return
    
    const cityId = initData.category[selectedIndex].id
    
    if (initData.hotelList) {
      this.staticFlag = true
      this.setState({
        loading: false,
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
    this.setState({
      loading: true
    })
    postRequest(hotelListUrl, {
      cityId,
      count: 6
    }).then(res => {
      if (res.success === 'true') {
        this.setState({
          loading: false,
          selectedIndex,
          hotelList: res.data
        })
      }
    }).catch(err => {
      this.setState({
        loading: false
      })
      if (err.msg || err.message) {
        message.error(err.msg || err.message)
        return
      }
      console.log(err)
    })
  }

  renderItem() {
    const { initData } = this.props
    const { selectedIndex } = this.state
    const { category } = initData

    return category.map((item, i) => (
      <li
        key={item.id}
        onClick={this.handleSwitchCity.bind(this, item.id, i)}
        className={i === selectedIndex ? 'hotelClsOn' : ''}>
        {item.name}
      </li>
    ))
  }

  render() {
    const { initData } = this.props
    const { hotelList, loading } = this.state

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
            <Spin spinning={loading}>
              <HotelCardList hotelList={hotelList} />
            </Spin>
          </div>
        </div>
      </section>
    )
  }
}
