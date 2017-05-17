import React from 'react'
import { Pagination } from 'antd'

import ListOption from 'components/HotelList/ListOption'
import ListItem from 'components/HotelList/ListItem'
import ListParent from 'components/HotelList/ListParent'
import './style.css'

//import {fetchBiz} from '../../components/fetchUtils'

/*模拟的假数据*/
var data = [
		  {id:1, name: "七天", price: 2333, text: "This is one comment", sum: 3},
		  {id:2, name: "如家", price: 2456, text: "This is *another* comment", sum: 4}
		];

//列表页主页调用组件情况
export default class HotelList extends React.Component {
   constructor(props) {
        super(props);

        //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {r1 !== r2}});
        this.state = {
            /*dataSource: ds,
            load:false,
            text:''*/
        };
    }

    //耗时操作放在这里面
   /* componentDidMount(){
        this.getNet();
    }

    getNet(){
        /*fetch('biz/api/hotel/queryhotelfeature')//请求地址
            .then((response) => response.json())//取数据
            .then((responseText) => {//处理数据
                //通过setState()方法重新渲染界面
                /*this.setState({
                    //改变加载ListView
                    load: true,
                    //设置数据源刷新界面
                    dataSource: this.state.dataSource.cloneWithRows(responseText.results),
                })

                //console.log (responseText);
                alert(responseText.data.rows[1]);

            })
            .catch((error) => {
                alert('error');
            });



          fetch('biz/api/hotel/queryhotelfeature')//请求地址
          .then(function(response) {
            /*if(response.ok) {
              alert("成功")
            } else {
              console.log('Network response was not ok.');
            }

          alert("成功")

          })
          .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
          });

        
    }*/


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
