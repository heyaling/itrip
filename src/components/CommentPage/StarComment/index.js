import React from 'react'
import { Rate } from 'antd';

import './style.css'

//星评评论组件情况
export default class StarComment extends React.Component {
  render() {
        return (
              <div className="starcomment">
                <div className="staritem">
                  <span>位置 </span> <Rate defaultValue={3}/>
                </div>
                <div className="staritem">
                  <span>设施 </span> <Rate defaultValue={2}/>
                </div>
                <div className="staritem">
                  <span>服务 </span> <Rate />
                </div>
                <div className="staritem">
                  <span>卫生 </span> <Rate />
                </div>

              </div>


          )
  }
}
