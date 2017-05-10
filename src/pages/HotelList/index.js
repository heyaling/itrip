import React from 'react'
import { Pagination } from 'antd'
import { Cascader } from 'antd'

import ListOption from 'components/ListOption'
import ListItem from 'components/ListItem'
import options from 'components/Cascader'

import './style.css'

export class ListParent extends React.Component {
  render() {
    return (
       <div className="itemParent">
          <div>
        <div style={{margin: '10px 0'}} className="tavern-params-title">
          <span style={{color: 'red', fontWeight: 800, fontSize: 18}}>8</span>&nbsp;家酒店 <span>您已选择：</span>
          <button className="btn">北京 <i className="icon-remove" /></button>
        </div>
        <div className="tavern-grid-title">
          <div className="btn-group">
            <button className="btn btn-default">最受欢迎</button>
            <button className="btn btn-default">评分</button>
            <button className="btn btn-default">价格</button>
            <button className="btn btn-default">星级</button>
          </div>
        </div>
      </div>

       </div>
    )
  }
}

var data = [
		  {id:1, name: "七天", price: 2333, text: "This is one comment"},
		  {id:2, name: "如家", price: 2456, text: "This is *another* comment"}
		];

//列表页主页组件
export default class HotelList extends React.Component {
  render() {
    return (
      <div className="HotelList">
        <ListOption />
        <ListParent />
        <ListItem data={data} />
        <div className="paginationWrapper">
        	<Pagination defaultCurrent={1} total={50} />
        </div>       

        
      </div>
    )
  }
}
