/*
* @Author: zhzbin
* @Date:   2017-05-08 13:58:01
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:59:32
*/
import React from 'react'
import { Tabs, Pagination } from 'antd';
'use strict';
const TabPane = Tabs.TabPane;

export default class HouseHotelassess extends React.Component {
  componentWillMount() {
    this.setState({
      data: {
        "beginPos": 3,
        "curPage": 2,
        "pageCount": 3,
        "pageSize": 2,
        "rows": [
          {
            "checkInDate": "2017-10-10",
            "content": "string",
            "creationDate": "2017-05-07",
            "hotelLevel": null,
            "id": 3,
            "isHavingImg": 1,
            "roomTitle": "豪华客房",
            "score": 4,
            "tripModeName": "商务出差",
            "userCode": "张三"
          },
          {
            "checkInDate": "2017-10-10",
            "content": "这个真的很好,有很多好玩的，值得去玩玩奥",
            "creationDate": "2017-05-06",
            "hotelLevel": null,
            "id": 1,
            "isHavingImg": 0,
            "roomTitle": "高级客房",
            "score": 5,
            "tripModeName": "商务出差",
            "userCode": "c测试用户显示名称"
          }
        ],
        "total": 5
      },
      recomData: {
      },
      gradget:{
        data:[]
      }
    })
  }
  recommendClick(e){
    /* 2 代表低 个tabs 课设定此值 为比较有意义的函数值方便有后期修改和查找*/
    if(e==2){

      this.setState({
      recomData: {
        "beginPos": 3,
        "curPage": 2,
        "pageCount": 3,
        "pageSize": 2,
        "rows": [
          {
            "checkInDate": "2017-10-10",
            "content": "string",
            "creationDate": "2017-05-07",
            "hotelLevel": null,
            "id": 3,
            "isHavingImg": 1,
            "roomTitle": "豪华客房",
            "score": 4,
            "tripModeName": "商务出差",
            "userCode": "张三"
          },
          {
            "checkInDate": "2017-10-10",
            "content": "这个真的很好,有很多好玩的，值得去玩玩奥",
            "creationDate": "2017-05-06",
            "hotelLevel": null,
            "id": 1,
            "isHavingImg": 0,
            "roomTitle": "高级客房",
            "score": 5,
            "tripModeName": "商务出差",
            "userCode": "c测试用户显示名称"
          }
        ],
        "total": 5
      }
    })
    }
  }
  render() {
    return (
      <div className="i_cost_con i_comment_con" id="hotelassess">
        <div className="i_cost clearfix">
          <span className="i_icon1">
            <h4>用户点评</h4>
            <i className="icon-user" />
          </span>
          <div className="i_grade">
            <div className="i_total_grade clearfix">
              <div className="i_left">
                <b>4.9</b>
                <span>总体评分</span>
              </div>
              <div className="i_right">
                <ul className="process">
                  <li>
                    位置
                    <span className="num">4.7</span>
                    <span className="processbar">
                      <em style={{width:294}}/>
                    </span>
                  </li>
                  <li>
                    设施
                    <span className="num">4.3</span>
                    <span className="processbar">
                      <em className="bar_two" />
                    </span>
                  </li>
                  <li>
                    服务
                    <span className="num">4.6</span>
                    <span className="processbar">
                      <em className="bar_three" />
                    </span>
                  </li>
                  <li>
                    卫生
                    <span className="num">4.5</span>
                    <span className="processbar">
                      <em className="bar_four" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="i_grade_list">
              <div className="card-container">
                {/*tabs 点击回调函数由 Tabs 函数触发请求具体的tabs下的参数数据信息*/}
                <Tabs type="card" onTabClick={this.recommendClick.bind(this)} >
                  <TabPane tab="全部评论（2110）" key="1">
                    <HotelComment data={this.state.data.rows} />
                    {/*<Pagination  defaultCurrent={3} total={5} />*/}
                    <Pagination style={{ float: 'right' }} defaultCurrent={1} total={50} />
                  </TabPane>
                  <TabPane tab="值得推荐（600）" key="2" >
                    <HotelComment data={this.state.recomData.rows} />
                  </TabPane>
                  <TabPane tab="有待改善（354）" key="3">Content of Tab Pane 3</TabPane>
                  <TabPane tab="有图片 （456）" key="4">Content of Tab Pane 4</TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}
class HotelComment extends React.Component {

  render() {
    if(!this.props.data){
      return  <div className="all_data_cur"></div>;
    }
    return (

      <div className="all_data_cur">
        {
          this.props.data.map(function (data, i, arr) {
            let star = function (e) {
              let stars = [];
              for (var i = 0; i < e; i++) {
                stars.push(<i className="icon-star" />)
              }
              return stars;
            }(data.score);
            let imag = function (e) {
               let imags = [];
              for (var i = 0; i < e; i++) {
                imags.push( <a href="#"><img src="images/icon/pic_list100100_xxx1212_03.jpg" height={100} width={100} alt /></a>)
              }
              return imags;
                
            }(data.isHavingImg);
            return (<ul className="comment_list">
              <li>
                <div className="author ">
                  <a href="javascript:;">
                    {star}
                  </a>
                  <strong>{data.score}分</strong>
                  <p> {data.userCode} </p>
                  <span>{data.tripModeName} </span>
                </div>
                <p className="comment_info">
                  <span>{data.tripModeName}    {data.checkInDate} 入住 </span>
                  <span>{data.roomTitle}</span>
                </p>
                <p className="comment_detail">
                  {data.content}
                </p>
                <div className="comment_pic_list">
                  {
                    imag
                  }
                </div>
                <p className="detail_comment_tips">
                  <a href="#">2016-09-05 18:47</a>
                  <a href="#">来自：i 旅行</a>
                </p>
              </li>
            </ul>)
          })
        }
      </div>
    )
  }
}
