/*
* @Author: zhzbin
* @Date:   2017-05-08 13:58:01
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:59:32
*/
import React from 'react' 
'use strict';


export default class HouseFacilities extends React.Component {
	render(){
		return (
							
				 <div className="i_cost i_cost_con clearfix">
        <span className="i_icon1">
          <h4>酒店设施</h4>
          <i className="icon-key" />
        </span>
        <div className="i_cost_list">
          <div className="i_list_shang">
            <div className="facility_list clearfix">
              <h5>【通用设施】</h5>
              <ul>
                <li><i className="icon-ok-circle" />免费停车场</li>
                <li><i className="icon-map-marker" />免费旅游交通图</li>
                <li><i className="icon-rss" />有无线上网</li>
                <li><i className=" icon-file-alt" />大堂免费报纸</li>
                <li><i className="icon-food" />中餐厅</li>
                <li><i className="icon-food" />西餐厅</li>
                <li><i className="icon-ok-circle" />残疾人客房</li>
                <li><i className="icon-shopping-cart" />商场</li>
                <li><i className="icon-ok-circle" />前台保险箱</li>
                <li><i className="icon-ok-circle" />自动取款机</li>
                <li><i className="icon-ok-circle" />大堂吧</li>
                <li><i className="icon-ok-circle" />电梯</li>
                <li><i className="icon-ok-circle" />中央空调</li>
                <li><i className="icon-ok-circle" />多功能厅</li>
                <li><i className="icon-ok-circle" />公共音响系统</li>
                <li><i className="icon-ok-circle" />公共区域闭路电视监控</li>
              </ul>
            </div>
            <div className="facility_list clearfix">
              <h5>【活动设施】</h5>
              <ul>
                <li><i className="icon-ok-circle" />KTV</li>
                <li><i className="icon-ok-circle" />棋牌室</li>
                <li><i className="icon-ok-circle" />桌球室</li>
                <li><i className="icon-ok-circle" />乒乓球室</li>
                <li><i className="icon-ok-circle" />网球场</li>
                <li><i className="icon-ok-circle" />健身室</li>
                <li><i className="icon-ok-circle" />残按摩室</li>
                <li><i className="icon-ok-circle" />桑拿浴室</li>
                <li><i className="icon-ok-circle" />前室外游泳池</li>
                <li><i className="icon-ok-circle" />SPA</li>
              </ul>
            </div>
            <div className="facility_list clearfix">
              <h5>【服务项目】</h5>
              <ul>
                <li><i className="icon-ok-circle" />会议厅</li>
                <li><i className="icon-ok-circle" />商务中心</li>
                <li><i className="icon-money" />外币兑换服务</li>
                <li><i className="icon-ok-circle" />洗衣服务</li>
                <li><i className="icon-ok-circle" />送餐服务</li>
                <li><i className="icon-medkit" />医务室</li>
                <li><i className="icon-ok-circle" />叫车服务</li>
                <li><i className="icon-ok-circle" />穿梭机场班车</li>
                <li><i className="icon-ok-circle" />儿童乐园</li>
                <li><i className="icon-envelope" />邮政服务</li>
                <li><i className="icon-ok-circle" />水上运动</li>
                <li><i className="icon-ok-circle" />专职行李员</li>
                <li><i className="icon-ok-circle" />行李寄存</li>
                <li><i className=" icon-bell" />叫醒服务</li>
                <li><i className="icon-ok-circle" />租车服务</li>
                <li><i className="icon-ok-circle" />礼宾服务</li>
                <li className="otherli"><i className="icon-ok-circle" />办理私人登记入住/退房手续</li>
                <li><i className="icon-ok-circle" />儿童俱乐部</li>
                <li><i className="icon-ok-circle" />婚宴服务</li>
                <li><i className="icon-ok-circle" />24小时前台服务</li>
                <li><i className="icon-ok-circle" />快速办理入住/退房手续</li>
                <li><i className="icon-ok-circle" />代客泊车</li>
                <li><i className="icon-ok-circle" />自行车租赁服务</li>
                <li><i className="icon-ok-circle" />信用卡结算服务</li>
                <li><i className="icon-ok-circle" />一次性账单结算服务</li>
                <li><i className="icon-ok-circle" />部分时段大堂经理</li>
              </ul>
            </div>
            <div className="facility_list clearfix">
              <h5>【客房设施】</h5>
              <ul>
                <li className="otherli"><i className="icon-ok-circle" />免费洗漱用品(6样以上)</li>
                <li><i className="icon-ok-circle" />免费瓶装水</li>
                <li><i className="icon-ok-circle" />免费报纸</li>
                <li><i className="icon-ok-circle" />免费客房WIFI覆盖</li>
                <li><i className="icon-ok-circle" />书桌</li>
                <li><i className="icon-medkit" />24小时热水</li>
                <li><i className="icon-ok-circle" />电热水壶</li>
                <li><i className="icon-coffee" />迷你吧</li>
                <li><i className="icon-ok-circle" />小冰箱</li>
                <li><i className="icon-envelope" />浴衣</li>
                <li><i className="icon-ok-circle" />多种规格电源插座</li>
                <li><i className="icon-ok-circle" />独立淋浴间</li>
                <li><i className="icon-ok-circle" />吹风机</li>
                <li><i className="icon-lock" />房内保险箱</li>
                <li><i className="icon-leaf" />中央空调</li>
                <li><i className="icon-hdd" />有线频道</li>
                <li><i className="icon-hdd" />卫星频道</li>
                <li><i className="icon-ok-circle" />液晶电视机</li>
                <li><i className="icon-ok-circle" />衣柜/衣橱</li>
                <li><i className="icon-ok-circle" />220V电压插座</li>
                <li><i className="icon-ok-circle" />手动窗帘/退房手续</li>
                <li><i className="icon-ok-circle" />床具:毯子或被子</li>
                <li><i className="icon-gift" />欢迎礼品</li>
                <li><i className="icon-ok-circle" />海景</li>
                <li><i className="icon-ok-circle" />山景</li>
                <li><i className="icon-ok-circle" />花园</li>
                <li><i className="icon-ok-circle" />景阳台</li>
                <li><i className="icon-ok-circle" />游泳池景</li>
                <li><i className="icon-ok-circle" />洗浴间</li>
                <li><i className="icon-phone-sign" />电话</li>
                <li><i className="icon-ok-circle" />沙发</li>
                <li><i className="icon-ok-circle" />房间内高速上网</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


			)

	}
}
