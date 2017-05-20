import React from 'react'
import { Pagination } from 'antd'

import ListOption from 'components/HotelList/ListOption'
import ListItem from 'components/HotelList/ListItem'
import ListParent from 'components/HotelList/ListParent'
import './style.css'

//import {fetchBiz} from '../../components/fetchUtils'

/*模拟的假数据*/
/*var data = [
  { id: 1, name: "七天", price: 2333, text: "This is one comment", sum: 3 },
  { id: 2, name: "如家", price: 2456, text: "This is *another* comment", sum: 4 }
];*/

var data = [];
/*let data1="";*/
//列表页主页调用组件情况
export default class HotelList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beginPos: -10,
      curPage: 0,
      pageCount: 1,
      pageSize: 10,
      total: 6,
      rows: [],
      handleOptionChild: (dataIndex) => {
        this.setState(dataIndex);
        //console.warn("parentIndex" + JSON.stringify(dataIndex));
        //  console.log(dataIndex["rows"]);
        //console.log("222"+data);
      }
    };
  }

  //耗时操作放在这里面
  /* componentDidMount(){
       this.getNet();
   }*/

  render() {
    return (
      <div className="HotelList">
        <ListOption dataChild={this.state.handleOptionChild} />
        <ListParent />
        <ListItem data={this.state.rows} />
        <div className="paginationWrapper">
          <Pagination defaultCurrent={this.state.curPage} total={this.state.pageSize} />
        </div>


      </div>
    )
  }
}
