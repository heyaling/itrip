import React from 'react'
import Video from './video.js'
import HouseList from './houseList.js'
import HotelDetail from './hotelDetail.js'
import HouseFacilities from './houseFacilities.js'
import HousePolicy from './housePolicy.js'
import HouseHotelassess from './houseHotelassess.js'
import Header from '../../components/Header'
import Footer from '../../components/Footer/'
import { Affix} from 'antd';
import './index.css'
/*
	导航头部数据信息， 显示头部数据展示
 */
class DetailMain extends React.Component {
  scrollToTop=(e)=>{
      console.debug(e.currentTarget);
      document.getElementsByTagName("body")[0].scrollTop=1000;
  }
  render() {
    return (
      <div className="i-main">
        <div className="i_cost_wrap">
          <div className="i_area">
            <Affix>
              <div className="i_title clearfix">
                <a ref="houseList" onClick={this.scrollToTop} className="i_current">房型列表</a>
                <a ref="hotelDetail" onClick={this.scrollToTop} >酒店详情</a>
                <a ref="hotelassess" onClick={this.scrollToTop} >酒店点评{/*（<b>6258</b>）*/}</a>
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
