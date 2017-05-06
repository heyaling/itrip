import React from 'react'

export default class HotelCard extends React.Component {
  render () {
    return (
      <div className="column">
        <div className="column-ele column-ele-first">
          <div className="recommend">
            <span className="text">返现</span>
          </div>
          <div className="column-image">
            <img src="../images/img/tavern/haiwai/haiwai01.png" />
          </div>
          <div className="column-desc">
            <div className="cell-desc" title="曼谷盛泰澜中央世界商业中心酒...">
              曼谷盛泰澜中央世界 ...
            </div>
            <div className="cell-money">
              ￥<span>639</span>起
            </div>
          </div>
        </div>
        <div className="points-shouqing" />
      </div>
    )
  }
}
