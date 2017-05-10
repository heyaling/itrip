import React from 'react'
import { Pagination, Cascader } from 'antd'

import ListOption from 'components/HotelList/ListOption'
import ListItem from 'components/HotelList/ListItem'
import ListParent from 'components/HotelList/ListParent'
import options from 'components/Cascader'
import './style.css'

/*模拟的假数据*/
var data = [
		  {id:1, name: "七天", price: 2333, text: "This is one comment", sum: 3},
		  {id:2, name: "如家", price: 2456, text: "This is *another* comment", sum: 4}
		];

//列表页主页调用组件情况
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
