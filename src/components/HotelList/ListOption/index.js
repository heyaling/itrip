import React from 'react'
import SearchHotelItem from 'components/HotelList/SearchHotelItem'
import './style.css'

//列表页导航下方 搜索选项组件
export default class ListOption extends React.Component {
	render() {
		return (
	<div className="travel tavern-list">
        <div className="tavern-list-head">
          <div className="localtion-item">您所在的位置：<a>酒店预订&gt;</a>北京酒店</div>
        </div>
        <div className="travel-body list-body">
          <div id="myTabContent" className="tavern-list-param">
            <SearchHotelItem />
            <div className="tavern-search-params">
              <div className="search-one-param">
                <span className="param-label">位置：</span>
                <div className="checkbox-list">
                  <label className="checkbox-inline">
                    <input type="checkbox" id="locationCheckbox1" defaultValue="option1" defaultChecked />天安门、王...
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="locationCheckbox2" defaultValue="option2" /> 中关村、五...
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="locationCheckbox3" defaultValue="option3" />西单、金融...
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="locationCheckbox4" defaultValue="option3" />首都机场
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="locationCheckbox5" defaultValue="option3" />亚运村
                  </label>
                </div>
              </div>
              <div className="search-one-param">
                <span className="param-label">价格：</span>
                <div className="checkbox-list">
                  <label className="checkbox-inline">
                    <input type="checkbox" id="unitCheckbox1" defaultValue="option1" />¥150以下
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="unitCheckbox2" defaultValue="option2" defaultChecked />¥150-300
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="unitCheckbox3" defaultValue="option3" />¥301-450
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="unitCheckbox4" defaultValue="option3" />¥450以上
                  </label>
                </div>
              </div>
              <div className="search-one-param">
                <span className="param-label">星级：</span>
                <div className="checkbox-list">
                  <label className="checkbox-inline">
                    <input type="checkbox" id="starCheckbox1" defaultValue="option1" />二星级及以...
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="starCheckbox2" defaultValue="option2" defaultChecked />三星级/舒适
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="starCheckbox3" defaultValue="option3" />四星级/高档
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="starCheckbox4" defaultValue="option3" /> 五星级/高档
                  </label>
                </div>
              </div>
              <div className="search-one-param">
                <span className="param-label">特色：</span>
                <div className="checkbox-list">
                  <label className="checkbox-inline">
                    <input type="checkbox" id="featureCheckbox1" defaultValue="option1" />休闲度假
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="featureCheckbox2" defaultValue="option2" defaultChecked />青年旅社
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="featureCheckbox3" defaultValue="option3" />精品酒店
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="featureCheckbox4" defaultValue="option3" />商务出行
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" id="featureCheckbox5" defaultValue="option3" />会
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

			)
	}
}





