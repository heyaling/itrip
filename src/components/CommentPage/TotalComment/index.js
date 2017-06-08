import React from 'react'
import { Icon } from 'antd';

import './style.css'

//总体评价组件情况
export default class TotalComment extends React.Component {
  render() {
        return (

                <div className="toatlcomwrapper">
                  <span>总评</span>
                  <div className="commentlike">
                    <Icon type="like-o" /> 值得推荐
                  </div>
                  <div className="commentdislike">
                    <Icon type="dislike-o" /> 有待改善
                  </div>
                </div>
             
          )
  }
}
