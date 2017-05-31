import React from 'react'
import { Carousel } from 'antd'
import TabSearch from './componentsIndex'
import './style.css'

import carousel1 from './imgs/i_banner_01.jpg'
import carousel2 from './imgs/i_banner_02.jpg'
import carousel3 from './imgs/i_banner_03.jpg'

//首页
export default class ItripHome extends React.Component {
  render() {
    return (
      <div className="ItripHome">
        <div>
          <div className="banner clearfix">
            {/* 全屏轮播部分开始 */}
            <Carousel autoplay>
              <div>
                <a href="javascript:;">
                  <img src={carousel1} alt="" />
                </a>
              </div>
              <div>
                <a href="javascript:;">
                  <img src={carousel2} alt="" />
                </a>
              </div>
              <div>
                <a href="javascript:;">
                  <img src={carousel3} alt="" />
                </a>
              </div>
            </Carousel>
            {/* 全屏轮播部分结束 */}

            {/* i-tab切换 */}
            <TabSearch/>
          </div>

        </div>

        12333
            </div>
    )
  }
}
