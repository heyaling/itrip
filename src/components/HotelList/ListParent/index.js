import React from 'react'
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group; 

//列表的头部选项（选定几家酒店、最受欢迎等等项目）
export default class ListParent extends React.Component {
  onChange=(e) => {
  console.log("radio checked:"+ e.target.value);
}
  render() {
    return (
      <div className="itemParent">
        <div>
          <div style={{ margin: '10px 0' }} className="tavern-params-title">
            <span style={{ color: 'red', fontWeight: 800, fontSize: 18 }}>{this.props.totalNum}</span>&nbsp;家酒店 <span>您已选择：</span>
            <button className="btn">北京 <i className="icon-remove" /></button>
          </div>
          <div className="tavern-grid-title">
            <RadioGroup onChange={this.onChange} defaultValue="a" size="large">
              <RadioButton value="isOkCount">最受欢迎</RadioButton>
              <RadioButton value="avgScore">评分</RadioButton>
              <RadioButton value="minPrice">价格</RadioButton>
              <RadioButton value="hotelLevel">星级</RadioButton>
            </RadioGroup>
          </div>
        </div>
      </div>
    )
  }
}
