/*
* @Author: zhzbin
* @Date:   2017-05-08 13:40:52
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:41:49
*/
import React from 'react'
import { DatePicker, Select } from 'antd';
'use strict';

export default class HouseList extends React.Component {
  constructor(props) {
    super(props);

    // 设置 initial state
    this.state = {
      text: props.initialValue || 'placeholder'
    };

    // ES6 类中函数必须手动绑定
    // this.handleClick = this.handleClick.bind(this);

  }
  componentWillMount() {
    /*获取数据接口中的数据信息，通过设置选项获取到数据信息和内容信息*/
    // fetch('http://rapapi.org/mockjsdata/18171/api/todo/list')
    //     .then(function(response) {
    //         return response.json()
    //     })
    //     .then(res => {
    //         this.setState({
    //             source: imgSrc
    //         })
    //     })
    /*  模拟数据接口数据信息 */
 
    this.setState({
      title: "三亚喜来登度假酒店",
      desc: "Sheraton Sanya Resort",
      subDesc: "【 亚龙湾 】国家旅游度假区，亚龙湾高尔夫球场对面",
      descMap: ["东南亚风情", "休闲度假", "亲子时刻", "会议酒店"]

    })
  }
  /*点击搜索按钮的时候可以按照入住时间和退房时间尽心数据的查询*/
   serachByTime( e) {
      console.debug("绑定点击事件触发")
    }
  /*点击每个不同的按钮的时候出发时间操作*/
   serachClickButton(e) {
      console.debug("绑定点击事件触发")
      console.debug(e);
      console.debug(e.currentTarget);
    }
  render() {
    return (

      <div className="house_list" id="houseList">
        <div className="line">
          <div className="hotel_detail_item hotel_detail_clder">
            <span>入住</span>
            <DatePicker  size="small" />
          </div>
          <div className="hotel_detail_item hotel_detail_clder hotel_detail_cldertwo">
            <span>退房</span>
            <DatePicker   size="small" />
          </div>
          <button className="btn-serach" onClick={this.serachByTime.bind(this)}>重新搜索</button>
        </div>
        <div className="hotel_detail-sort clearfix">
          <div className="btn-serach-div act"   onClick={this.serachClickButton.bind(this)} >含早餐 <span /><i className=" icon-ok" /></div>
          <div className="btn-serach-div act"   onClick={this.serachClickButton.bind(this)} >立刻确认 <span /><i className=" icon-ok" /></div>
          <div className="btn-serach-div act"   onClick={this.serachClickButton.bind(this)} >免费取消 <span /><i className=" icon-ok" /></div>
          <div className="btn-serach-div act"   onClick={this.serachClickButton.bind(this)} >可预订 <span /><i className=" icon-ok" /></div>
          <div className="select-group">
            <Select defaultValue="0" style={{ width: 83,height:38}}>
              <Option value="0" Select>床型</Option>
              <Option value="1">大床房</Option>
              <Option value="2">大床房</Option>
              <Option value="3">大床房</Option>
            </Select> &nbsp;
            <Select defaultValue="0" style={{ width: 83,height:38}}>
              <Option value="0" Select>支付类型</Option>
              <Option value="1">大床房</Option>
              <Option value="2">大床房</Option>
              <Option value="3">大床房</Option>
            </Select>
            
          </div>
        </div>
        <div className="table-list">
          <table>
            <thead>
              <tr className="th">
                <th className="col1" style={{ paddingLeft: 10 }}>房型</th>
                <th className="col2" />
                <th className="col3">床型</th>
                <th className="col4">早餐</th>
                <th className="col5">宽带</th>
                <th className="col_policy">政策</th>
                <th className="col6">房价（含服务费）</th>
                <th className="col7">
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="first_room" expand>
                <td id="first_room_01" data-clum={20} data-show={5} rowSpan={5}>
                  <div className="room_img_ms">
                    <a>
                      <img src="images/img/hotelD01_0315.jpg" height={350} width={500} /></a>
                    <br />
                    <a> 豪华大床房 <br /><span>查看详情</span></a>
                  </div>
                  <div className="rom-show-image ">
                    <div className="left-tran" />
                    <a className="model-remove">
                      <i className=" icon-remove" />
                    </a>
                    <img className="big-img" src="images/img/hotelD01_0315.jpg" height={350} width={500} alt="" />
                    <div className="small-img">
                      <img src="images/img/hotelD01_0315.jpg" alt="" />
                      <img src="images/img/hotelD02_0315.jpg" alt="" />
                      <img src="images/img/hotelD03_0315.jpg" alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <span className="room_type_name">i旅行直营</span><span className="rom_type_label_1">代理</span>&nbsp;<span className="rom_type_label_2">礼</span>
                  <p className="book_percent"><span className="green">预订满意度 100%</span></p>
                </td>
                <td>大床</td>
                <td>无早</td>
                <td><span>免费</span>
                </td>
                <td><span>不可取消</span></td>
                <td>
                  <span className="rom_unit_label"><dfn>¥</dfn><em>2699</em><span>起</span></span>
                </td>
                <td className="col7">
                  <button className="room_by">预定</button>
                </td>
              </tr>
              <tr className="unexpanded">
                <td>
                  <span className="room_type_name">i旅行直营</span><span className="rom_type_label_1">代理</span>&nbsp;<span className="rom_type_label_2">礼</span>
                  <p className="book_percent"><span className="green">预订满意度 100%</span></p>
                </td>
                <td>大床</td>
                <td>单早</td>
                <td>免费</td>
                <td><span>不可取消</span></td>
                <td>
                  <span className="rom_unit_label"><dfn>¥</dfn><em>2699</em><span>起</span></span>
                </td>
                <td className="col7">
                  <button className="room_by">预定</button>
                </td>
              </tr>
              <tr className="unexpanded">
                <td>
                  <span className="room_type_name">i旅行直营</span><span className="rom_type_label_1">代理</span>&nbsp;<span className="rom_type_label_2">礼</span>
                  <p className="book_percent"><span className="green">预订满意度 100%</span></p>
                </td>
                <td>大床</td>
                <td>单早</td>
                <td>免费</td>
                <td><span>不可取消</span></td>
                <td>
                  <span className="rom_unit_label"><dfn>¥</dfn><em>2699</em><span>起</span></span>
                </td>
                <td className="col7">
                  <button className="room_by">预定</button>
                </td>
              </tr>
              <tr className="unexpanded">
                <td>
                  <span className="room_type_name">i旅行直营</span><span className="rom_type_label_1">代理</span>&nbsp;<span className="rom_type_label_2">礼</span>
                  <p className="book_percent"><span className="green">预订满意度 100%</span></p>
                </td>
                <td>大床</td>
                <td>单早</td>
                <td>免费</td>
                <td><span>不可取消</span></td>
                <td>
                  <span className="rom_unit_label"><dfn>¥</dfn><em>2699</em><span>起</span></span>
                </td>
                <td className="col7">
                  <button className="room_by">预定</button>
                </td>
              </tr>
              <tr className="unexpanded ">
                <td>
                  <span className="room_type_name">i旅行直营</span><span className="rom_type_label_1">代理</span>&nbsp;<span className="rom_type_label_2">礼</span>
                  <p className="book_percent"><span className="green">预订满意度 100%</span></p>
                </td>
                <td>大床</td>
                <td>单早</td>
                <td>免费</td>
                <td><span>不可取消</span></td>
                <td>
                  <span className="rom_unit_label"><dfn>¥</dfn><em>2699</em><span>起</span></span>
                </td>
                <td className="col7">
                  <button className="room_by">预定</button>
                </td>
              </tr>
              <tr className="unexpanded hidden">
                <td>
                  <span className="room_type_name">i旅行直营</span><span className="rom_type_label_1">代理</span>&nbsp;<span className="rom_type_label_2">礼</span>
                  <p className="book_percent"><span className="green">预订满意度 100%</span></p>
                </td>
                <td>大床</td>
                <td>单早</td>
                <td>免费</td>
                <td><span>不可取消</span></td>
                <td>
                  <span className="rom_unit_label"><dfn>¥</dfn><em>2699</em><span>起</span></span>
                </td>
                <td className="col7">
                  <button className="room_by">预定</button>
                </td>
              </tr>
              <tr className="unexpanded last_room" overf="F">
                <td className="fold_bold_r" />
                <td className="child_name" />
                <td className="col3" />
                <td className="col4" />
                <td className="col5" />
                <td />
                <td className="col_policy" />
                <td className="room_detail_fold"><a data-id="first_room_01" data-hidedata={1} data-status={0}>展开全部房型 <i className=" icon-chevron-down" /></a>
                </td>
              </tr>
              <tr className="first_room" expand>
                <td id="first_room_02" data-clum={20} data-show={5} rowSpan={5}>
                  <div className="room_img_ms">
                    <a>
                      <img src="images/img/hotelD04_0315.jpg" height={350} width={500} /></a>
                    <br />
                    <a> 豪华大床房 <br /><span>查看详情</span></a>
                  </div>
                  <div className="rom-show-image ">
                    <div className="left-tran" />
                    <a className="model-remove">
                      <i className=" icon-remove" />
                    </a>
                    <img className="big-img" src="images/img/hotelD04_0315.jpg" alt="" />
                    <div className="small-img">
                      <img src="images/img/hotelD04_0315.jpg" alt="" />
                      <img src="images/img/hotelD05_0315.jpg" alt="" />
                      <img src="images/img/hotelD06_0315.jpg" alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <span className="room_type_name">i旅行直营</span><span className="rom_type_label_1">代理</span>&nbsp;<span className="rom_type_label_2">礼</span>
                  <p className="book_percent"><span className="green">预订满意度 100%</span></p>
                </td>
                <td>大床</td>
                <td>无早</td>
                <td><span>免费</span>
                </td>
                <td><span>不可取消</span></td>
                <td>
                  <span className="rom_unit_label"><dfn>¥</dfn><em>2699</em><span>起</span></span>
                </td>
                <td className="col7">
                  <button className="room_by">预定</button>
                </td>
              </tr>
              <tr className="unexpanded">
                <td>
                  <span className="room_type_name">i旅行直营</span><span className="rom_type_label_1">代理</span>&nbsp;<span className="rom_type_label_2">礼</span>
                  <p className="book_percent"><span className="green">预订满意度 100%</span></p>
                </td>
                <td>大床</td>
                <td>单早</td>
                <td>免费</td>
                <td><span>不可取消</span></td>
                <td>
                  <span className="rom_unit_label"><dfn>¥</dfn><em>2699</em><span>起</span></span>
                </td>
                <td className="col7">
                  <button className="room_by">预定</button>
                </td>
              </tr>
              <tr className="unexpanded">
                <td>
                  <span className="room_type_name">i旅行直营</span><span className="rom_type_label_1">代理</span>&nbsp;<span className="rom_type_label_2">礼</span>
                  <p className="book_percent"><span className="green">预订满意度 100%</span></p>
                </td>
                <td>大床</td>
                <td>单早</td>
                <td>免费</td>
                <td><span>不可取消</span></td>
                <td>
                  <span className="rom_unit_label"><dfn>¥</dfn><em>2699</em><span>起</span></span>
                </td>
                <td className="col7">
                  <button className="room_by">预定</button>
                </td>
              </tr>
              <tr className="unexpanded">
                <td>
                  <span className="room_type_name">i旅行直营</span><span className="rom_type_label_1">代理</span>&nbsp;<span className="rom_type_label_2">礼</span>
                  <p className="book_percent"><span className="green">预订满意度 100%</span></p>
                </td>
                <td>大床</td>
                <td>单早</td>
                <td>免费</td>
                <td><span>不可取消</span></td>
                <td>
                  <span className="rom_unit_label"><dfn>¥</dfn><em>2699</em><span>起</span></span>
                </td>
                <td className="col7">
                  <button className="room_by">预定</button>
                </td>
              </tr>
              <tr className="unexpanded ">
                <td>
                  <span className="room_type_name">i旅行直营</span><span className="rom_type_label_1">代理</span>&nbsp;<span className="rom_type_label_2">礼</span>
                  <p className="book_percent"><span className="green">预订满意度 100%</span></p>
                </td>
                <td>大床</td>
                <td>单早</td>
                <td>免费</td>
                <td><span>不可取消</span></td>
                <td>
                  <span className="rom_unit_label"><dfn>¥</dfn><em>2699</em><span>起</span></span>
                </td>
                <td className="col7">
                  <button className="room_by">预定</button>
                </td>
              </tr>
              <tr className="unexpanded hidden">
                <td>
                  <span className="room_type_name">i旅行直营</span><span className="rom_type_label_1">代理</span>&nbsp;<span className="rom_type_label_2">礼</span>
                  <p className="book_percent"><span className="green">预订满意度 100%</span></p>
                </td>
                <td>大床</td>
                <td>单早</td>
                <td>免费</td>
                <td><span>不可取消</span></td>
                <td>
                  <span className="rom_unit_label"><dfn>¥</dfn><em>2699</em><span>起</span></span>
                </td>
                <td className="col7">
                  <button className="room_by">预定</button>
                </td>
              </tr>
              <tr className="unexpanded last_room" overf="F">
                <td className="fold_bold_r" />
                <td className="child_name" />
                <td className="col3" />
                <td className="col4" />
                <td className="col5" />
                <td />
                <td className="col_policy" />
                <td className="room_detail_fold"><a data-id="first_room_02" data-hidedata={1} data-status={0}>展开全部房型 <i className=" icon-chevron-down" /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



    )

  }
}
