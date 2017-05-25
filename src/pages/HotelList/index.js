import React from 'react'
import { Pagination } from 'antd'

import ListOption from 'components/HotelList/ListOption'
import ListItem from 'components/HotelList/ListItem'
import ListParent from 'components/HotelList/ListParent'

import './style.css'

//import {fetchBiz} from '../../components/fetchUtils'


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
      total: 0,
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
        <ListParent totalNum={this.state.total} />
        <ListItem data={this.state.rows} />
        <div className="paginationWrapper">
          <Pagination defaultCurrent={this.state.curPage} total={this.state.pageSize} />
        </div>

      </div>
    )
  }
}
