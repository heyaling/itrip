/*
* @Author: zhzbin
* @Date:   2017-05-08 13:58:01
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:59:32
*/
import React from 'react'
import img_01 from '../../common/images/icon/card01_xxx1214_09.jpg'
import img_02 from '../../common/images/icon/card02_xxx1214_09.jpg'
import img_03 from '../../common/images/icon/card03_xxx1214_09.jpg'
import img_04 from '../../common/images/icon/card_xxx1214_09.jpg'

'use strict';
export default class HousePolicy extends React.Component {
  componentWillMount() {
    this.setState({
      data:
      [{
        "rootName": "入住和离店",
        "leafs": ["入住时间：15:00以后      离店时间：12:00以前"]
      }, {
        "rootName": "儿童政策",
        "leafs": ["不接受18岁以下客人单独入住。",
          "1岁以下婴儿使用现有床铺免费，不含儿童早餐。",
          "1岁以下婴儿加婴儿床免费，不含儿童早餐。",
          "1-18岁儿童使用现有床铺免费，不含儿童早餐。",
          "1-18岁儿童加床收费，每晚RMB300.00，不含儿童早餐。",
          "6-12岁儿童早餐为人民币105 / 位 / （包含10％服务费）。6岁以下儿童增订早餐免费。",
        ]
      }, {
        "rootName": "膳食安排",
        "leafs": ["自助早餐 RMB 210"]
      }, {
        "rootName": "宠物",
        "leafs": ["不可携带宠物。"]
      },
      ]
    })
  }
  render() {//clearfix
    return (
      <div className="i_cost i_cost_con clearfix">
        <span className="i_icon1">
          <h4>酒店政策</h4>
          <i className="icon-book" />
        </span>
        <div className="i_cost_list">
          <div className="i_list_shang">
            <div className="facility_list">
              {
                this.state.data.map(function (val, i, array) {
                  return (
                    <div className="list_wrap clearfix">
                      <h5>【{val.rootName}】</h5>
                      <ol>
                          {
                            val.leafs.map(value => {
                              return (<li>{value}</li>)
                            })
                          }
                        </ol>
                    </div>
                  )
                })
              } 
              <div className="list_wrap">
                <h5>【接受信用卡】</h5>
                <a href="#"><img src={img_01} height={40} width={67} alt="" /></a>
                <a href="#"><img src={img_02} height={40} width={64} alt="" /></a>
                <a href="#"><img src={img_03} height={40} width={41} alt="" /></a>
                <a href="#"><img src={img_04} height={40} width={53} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    )

  }
}
