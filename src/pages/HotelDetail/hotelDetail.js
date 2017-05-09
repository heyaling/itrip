/*
* @Author: zhzbin
* @Date:   2017-05-08 13:58:01
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:59:32
*/
import React from 'react' 
'use strict';


export default class HotelDetail extends React.Component {
	render(){
		return (
				 <div id="hotelDetail" className="i_cost i_cost_con i_cost_in clearfix">
        <span className="i_icon1">
          <h4>酒店介绍</h4>
          <i className="icon-info-sign" />
        </span>
        <div className="i_cost_list">
          <div className="i_list_shang">
            <div className="facility_list">
              <div className="list_wrap">
                <span className="wrap_in_detail">东南亚风情</span>
                <span className="wrap_in_detail">休闲度假</span>
                <span className="wrap_in_detail">亲子时刻</span>
                <span className="wrap_in_detail">会议酒店</span>
              </div> 
              <div className="list_wrap clearfix">
                <ul className="list_wrap_title">
                  <li><span>【东南亚风情】</span>酒店到处都是草坪和热带的大叶绿植，还有大海、沙滩，有着浓浓的海边度假风情。</li>
                  <li><span>【休闲度假】</span>你可以在spa馆享受安静的理疗，也可以来到室外享受托艇冲浪、滑水、航海等海上活动。</li>
                  <li><span>【亲子时刻】</span>儿童乐园、室外泳池、私人海滩等设施都是全家感受亲子时光的好去处。</li>
                  <li><span>【会议酒店】</span>这里是召开会议的理想场所，配备先进的会议设施，并可提供完善的会议服务。</li>
                </ul>
              </div>
              <div className="list_wrap">
                <p className="list_wrap_say">2003年开业  511间房   <a href="#">联系电话</a><br />　　
                  三亚喜来登度假酒店位于亚龙湾的中心，正对亚龙湾高尔夫球场。湛蓝的大海和银白的沙滩是海洋生物栖息繁衍的天堂和户外娱乐活动的理想之地。<br />
                  您在客房内便可观赏到美丽的海景。专为儿童配设的儿童乐园、室外泳池、私人海滩等设施都是亲子游乐的好去处，是全家感受亲子时光的好选择。<br />
                  这里餐饮服务设施种类繁多，有瑶池西餐厅、香料园亚洲餐厅、白云阁中餐厅、池畔吧、美景台大堂吧、桑吧葡萄酒吧等，时尚入流，充分融合了亚欧菜肴特色；可容纳1400人的大宴会厅及16个会议厅，为您的商务出行提供便利。<br />
                  如果您想玩刺激的项目，康乐中心可为您安排托艇冲浪、滑水、航海等活动。这里的SPA为您提供各种舒缓压力、安心静性的疗养服务。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

			)

	}
}
