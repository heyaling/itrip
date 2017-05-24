import React from 'react'
import DiamondIcon from 'components/HotelList/DiamondIcon'
import ListItemfeatureNames from 'components/HotelList/ListItemfeatureNames'

import jiudian from "common/images/img/jiudian.png"
import './style.css'

//列表页中的一条列表组件
export default class ListItem extends React.Component {

  /*		constructor(...args){
              super(...args);
  
              //初始状态
          	
  
            }*/
  render() {
    //请求来数据的时候就渲染请求的数据，没有请求数据的时候就显示原始数据
    var commentNodes = this.props.data.length != 0 ?
      this.props.data.map(function (comment, index) {
        return (
            <div className="tavern-model-grid">
              <div className="modal-grid-left">
                <div className="recommend">
                  <span className="text">力推</span>
                </div>
                <img src={comment.imgUrl} style={{ width: 285, height: 180 }} />
              </div>
              <div className="model-grid-right">
                <div key={comment.id} className="model-grid-title">{comment.hotelName}</div>
                <div className="model-grid-label">
                  {/*钻石组件*/}
                  <DiamondIcon iconSum={comment.hotelLevel} />
                  <ListItemfeatureNames featureStr={comment.featureNames}/>
                </div>
                <div className="model-grid-message">
                  {comment.address}
                  <br />
                  <a href="javascript:;">交通地图</a> <a href="javascript:;">周边街景</a>
                  <i className="fa fa-wifi" />
                  <i className=" icon-food" />
                  <i className="fa fa-product-hunt" />
                </div>
                <div className="model-grid-grade">
                  <div className="cell-grade">
                    <div className="left"> <span>{comment.avgScore}</span>/5分</div>
                    <div key={comment.id} className="right"> {comment.isOkCount}用户推荐</div>
                    <div>源自{comment.commentCount}位住客点评</div>
                  </div>
                  <div className="cell-money">
                    ￥<span key={comment.id} >{comment.minPrice}</span>起
		            </div>
                  <button className="btn btn-default">查看详情</button>
                </div>
              </div>
            </div>
        );
      })
      :
        <div className="tavern-model-grid">
          <div className="modal-grid-left">
            <div className="recommend">
              <span className="text">力推</span>
            </div>
            <img src={jiudian} style={{ width: 285 }} />
          </div>
          <div className="model-grid-right">
            <div className="model-grid-title">北京盘古七星酒店</div>
            <div className="model-grid-label">
              <i className="fa fa-diamond" />
              <i className="fa fa-diamond" />
              <i className="fa fa-diamond" />
              <i className="fa fa-diamond" />
              <i className="fa fa-diamond" />
              <span className="item">商务出行</span>
              <span className="item">会议酒店</span>
              <span className="item">精品酒店</span>
            </div>
            <div className="model-grid-message">
              朝阳区北四环中路27号，盘古大观，近奥运村国家体育馆。 【 亚运村、 奥体中心地区】
            <br />
              <a>交通地图</a> <a>周边街景</a>
              <i className="fa fa-wifi" />
              <i className=" icon-food" />
              <i className="fa fa-product-hunt" />
            </div>
            <div className="model-grid-grade">
              <div className="cell-grade">
                <div className="left"> <span>4.7</span>/5分</div>
                <div className="right"> 98%用户推荐</div>
                <div>源自1653位住客点评</div>
              </div>
              <div className="cell-money">
                ￥<span>2059</span>起
            </div>
              <button className="btn btn-default">查看详情</button>
            </div>
          </div>
        </div>
      ;


    return (
      <div className="commentBox">{commentNodes}</div>
    )


  }

}
