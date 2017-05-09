/*
* @Author: zhzbin
* @Date:   2017-05-08 13:58:01
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:59:32
*/
import React from 'react' 
'use strict';


export default class HousePolicy extends React.Component {
	render(){
		return (
				<div className="i_cost i_cost_con clearfix">
        <span className="i_icon1">
          <h4>酒店政策</h4>
          <i className="icon-book" />
        </span>
        <div className="i_cost_list">
          <div className="i_list_shang">
            <div className="facility_list">
              <div className="list_wrap">
                <h5>【入住和离店】</h5>
                <span>入住时间：15:00以后      离店时间：12:00以前</span>
              </div>
              <div className="list_wrap clearfix">
                <h5>【儿童政策】</h5>
                <ol>
                  <li>不接受18岁以下客人单独入住。</li>
                  <li>1岁以下婴儿使用现有床铺免费，不含儿童早餐。</li>
                  <li>1岁以下婴儿加婴儿床免费，不含儿童早餐。</li>
                  <li>1-18岁儿童使用现有床铺免费，不含儿童早餐。</li>
                  <li>1-18岁儿童加床收费，每晚RMB300.00，不含儿童早餐。</li>
                  <li>6-12岁儿童早餐为人民币105 / 位 / （包含10％服务费）。6岁以下儿童增订早餐免费。</li>
                </ol>
              </div>
              <div className="list_wrap">
                <h5>【膳食安排】</h5>
                <span>自助早餐 RMB 210</span>
              </div>
              <div className="list_wrap">
                <h5>【宠物】</h5>
                <span>不可携带宠物。</span>
              </div>
              <div className="list_wrap">
                <h5>【接受信用卡】</h5>
                <a href="#"><img src="images/icon/card01_xxx1214_09.jpg" height={40} width={67} alt="" /></a>
                <a href="#"><img src="images/icon/card02_xxx1214_09.jpg" height={40} width={64} alt="" /></a>
                <a href="#"><img src="images/icon/card03_xxx1214_09.jpg" height={40} width={41} alt="" /></a>
                <a href="#"><img src="images/icon/card_xxx1214_09.jpg" height={40} width={53} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

			)

	}
}
