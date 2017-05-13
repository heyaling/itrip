/*
* @Author: zhzbin
* @Date:   2017-05-08 13:58:01
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:59:32
*/
import React from 'react'
'use strict';


export default class HouseFacilities extends React.Component {
  componentWillMount() {

    this.setState({
      group: [
        {
        "rootName": "通用设施",
        "leafs": [{
          "name": "ktv",
          "pic": "icon-ok-circle"
        }, {
          "name": "spa",
          "pic": "icon-ok-circle"
        }, {
          "name": "stop",
          "pic": "icon-ok-circle"
        }
        ]
      },
        {
        "rootName": "通用设施",
        "leafs": [{
          "name": "ktv",
          "pic": "icon-ok-circle"
        }, {
          "name": "spa",
          "pic": "icon-ok-circle"
        }, {
          "name": "stop",
          "pic": "icon-ok-circle"
        }
        ]
      },
        {
        "rootName": "通用设施",
        "leafs": [
          {
          "name": "ktv",
          "pic": "icon-ok-circle"
        }, {
          "name": "spa",
          "pic": "icon-ok-circle"
        }, 
          {
          "name": "ktv",
          "pic": "icon-ok-circle"
        }, {
          "name": "spa",
          "pic": "icon-ok-circle"
        }, 
          {
          "name": "ktv",
          "pic": "icon-ok-circle"
        }, {
          "name": "spa",
          "pic": "icon-ok-circle"
        }, 
          {
          "name": "ktv",
          "pic": "icon-ok-circle"
        }, {
          "name": "spa",
          "pic": "icon-ok-circle"
        }, 
          {
          "name": "ktv",
          "pic": "icon-ok-circle"
        }, {
          "name": "spa",
          "pic": "icon-ok-circle"
        }, 
          {
          "name": "ktv",
          "pic": "icon-ok-circle"
        }, {
          "name": "spa",
          "pic": "icon-ok-circle"
        }, 
          {
          "name": "ktv",
          "pic": "icon-ok-circle"
        }, {
          "name": "spa",
          "pic": "icon-ok-circle"
        }, 
        {
          "name": "stop",
          "pic": "icon-ok-circle"
        }
        ]
      },
        {
        "rootName": "通用设施",
        "leafs": [{
          "name": "ktv",
          "pic": "icon-ok-circle"
        }, {
          "name": "spa",
          "pic": "icon-ok-circle"
        }, {
          "name": "stop",
          "pic": "icon-ok-circle"
        }
        ]
      },
       {
        "rootName": "活动设施",
        "leafs": [{
          "name": "游泳池",
          "pic": "icon-ok-circle"
        }, {
          "name": "健身房",
          "pic": "icon-ok-circle"
        }, {
          "name": "泡泡浴",
          "pic": "icon-ok-circle"
        }
        ]
      }
      ]
    })

  }
  render() {
    return (

      <div className="i_cost i_cost_con clearfix">
        <span className="i_icon1">
          <h4>酒店设施</h4>
          <i className="icon-key" />
        </span>
        <div className="i_cost_list">
          <div className="i_list_shang">
            {
              this.state.group.map(function (val, i, array) {
                return (
                  <div className="facility_list clearfix">
                    <h5>【{val.rootName}】</h5>
                    <ul>
                      {val.leafs.map(value => {
                        return <li><i className={value.pic} />{ value.name}</li>
                      })}
                    </ul>
                  </div>
                )

              })
            }

          </div>
        </div>
      </div>


    )

  }
}
