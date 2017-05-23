import React from 'react'
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

import SearchHotelItem from 'components/HotelList/SearchHotelItem'
import './style.css'



//列表页导航下方 搜索选项组件
export default class ListOption extends React.Component {

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  state = {
     value: 1,
    optionnode: {}
  }
  optionnode = (data) => {
    let val = {};
    if (data && data.rows.length > 0) {
      val = data.rows.map(function (value, index) {
        //console.log(data.rows.length);
        return (
          <label className="checkbox-inline">
            <input type="checkbox" id="locationCheckbox3" defaultValue="option3" /><span>{value.tradingAreaNames}</span>
          </label>
        )
      })
    }
    this.setState(
      {
        optionnode: val
      })
  }

  constructor(props) {
    super(props);
    this.state = {
      takeData: " ",
      handleSearchChild: (datas) => {
        // this.setState({ takeData: datas });
        this.props.dataChild(datas);
        //console.warn("takeData" + JSON.stringify(datas.rows));
        //根据后台数据生成位置选项
        this.optionnode(datas);
      }
    }
    //this.clickDesc=this.clickDesc.bind(this)
  }
  /*
clickDesc=(e)=>{
  

}*/
  render() {

    return (
      <div className="travel tavern-list">
        <div className="tavern-list-head">
          <div className="localtion-item">您所在的位置：<a>酒店预订&gt;</a>北京酒店</div>
        </div>
        <div className="travel-body list-body">
          <div id="myTabContent" className="tavern-list-param">
            <SearchHotelItem receivedata={this.state.handleSearchChild} />
            <div className="tavern-search-params">
              <div className="search-one-param">
                <span className="param-label">位置：</span>
                <div className="checkbox-list">
                  {this.state.optionnode}
                </div>
              </div>
              <div className="search-one-param">
                <span className="param-label">价格：</span>
                <div className="checkbox-list">
                  {/*<label className="radio-inline">
                    <input type="radio" id="unitCheckbox1" defaultValue="option1" />¥150以下
                  </label>
                  <label className="radio-inline">
                    <input type="radio" id="unitCheckbox2" defaultValue="option2" defaultChecked />¥150-300
                  </label>
                  <label className="radio-inline">
                    <input type="radio" id="unitCheckbox3" defaultValue="option3" />¥301-450
                  </label>
                  <label className="radio-inline">
                    <input type="radio" id="unitCheckbox4" defaultValue="option3" />¥450以上
                  </label>*/}

                  <RadioGroup onChange={this.onChange} value={this.state.value}>
                    <Radio value={1}>¥150以下</Radio>
                    <Radio value={2}>¥150-300</Radio>
                    <Radio value={3}>¥301-450</Radio>
                    <Radio value={4}>¥450以上</Radio>
                  </RadioGroup>

                  
                </div>
              </div>
              <div className="search-one-param">
                <span className="param-label">星级：</span>
                <div className="checkbox-list">
                  <label className="radio-inline">
                    <input type="radio" id="starCheckbox1" defaultValue="option1" />二星级及以...
                  </label>
                  <label className="radio-inline">
                    <input type="radio" id="starCheckbox2" defaultValue="option2" defaultChecked />三星级/舒适
                  </label>
                  <label className="radio-inline">
                    <input type="radio" id="starCheckbox3" defaultValue="option3" />四星级/高档
                  </label>
                  <label className="radio-inline">
                    <input type="radio" id="starCheckbox4" defaultValue="option3" /> 五星级/高档
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





