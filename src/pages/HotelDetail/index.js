import React from 'react'
import Video from './video.js'
import HouseList from './houseList.js'
import HotelDetail from './hotelDetail.js'
import HouseFacilities from './houseFacilities.js'
import HousePolicy from './housePolicy.js'
import HouseHotelassess from './houseHotelassess.js'
import Header from '../../components/Header'
import Footer from '../../components/Footer/'
import { Affix } from 'antd';
import './index.css'
/*
	导航头部数据信息， 显示头部数据展示
 */
class DetailMain extends React.Component {
  scrollToTop = (e) => {
    let type = e.currentTarget.type;
    let map = {
      houseList: document.getElementById("houseList"),
      hotelDetail: document.getElementById("hotelDetail"),
      hotelassess: document.getElementById("hotelassess")
    }
    document.getElementsByTagName("body")[0].scrollTop = map[type].offsetTop;

    let mapDoc = document.getElementsByClassName("hotelDetail-title");
    for (var i = 0; i < mapDoc.length; i++) {
      mapDoc[i].className = 'hotelDetail-title'
    }
    e.currentTarget.className = 'hotelDetail-title i_current';
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll = (e) => {
    if (document.getElementById("houseList")) {
      let bodyDom = document.getElementsByTagName("body")[0];
      let houseList = document.getElementById("houseList");
       let hotelDetail = document.getElementById("hotelDetail");
       let hotelassess = document.getElementById("hotelassess");
      let mapDoc = document.getElementsByClassName("hotelDetail-title");
      for (var i = 0; i < mapDoc.length; i++) {
        mapDoc[i].className = 'hotelDetail-title'
      }
      if (hotelDetail.offsetTop > bodyDom.scrollTop && bodyDom.scrollTop  >= houseList.offsetTop) {
        document.getElementById("houseListId").className = 'hotelDetail-title i_current';
      }
      if (hotelassess.offsetTop > bodyDom.scrollTop && bodyDom.scrollTop  >= hotelDetail.offsetTop) {
        document.getElementById("hotelDetailId").className = 'hotelDetail-title i_current';
      }
      if (bodyDom.scrollTop >= hotelassess.offsetTop) {
        document.getElementById("hotelassessId").className = 'hotelDetail-title i_current';
      }
    }
  }
  render() {
    return (
      <div className="i-main">
        <div className="i_cost_wrap">
          <div className="i_area">
            <Affix>
              <div className="i_title clearfix">
                <a type="houseList" id="houseListId" onClick={this.scrollToTop} className="hotelDetail-title i_current">房型列表</a>
                <a type="hotelDetail" id="hotelDetailId" onClick={this.scrollToTop} className="hotelDetail-title ">酒店详情</a>
                <a type="hotelassess" id="hotelassessId" onClick={this.scrollToTop} className="hotelDetail-title ">酒店点评{/*（<b>6258</b>）*/}</a>
              </div>
            </Affix>

            <div className="i_title fixTop clearfix">
              <a href="#houseList" className>房型列表</a>
              <a href="#hotelDetail" className="i_current">酒店详情</a>
              <a href="#hotelassess" className>酒店点评（<b>6258</b>）</a>
            </div>
            <div className="i_con">
              <HouseList hotelId={1} />
              <HotelDetail hotelId={1} />
              <HouseFacilities hotelId={1} />
              <HousePolicy hotelId={1} />
              <HouseHotelassess hotelId={1} />
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Video hotelId={1} />
        <DetailMain />
      </div>
    )
  }
}
