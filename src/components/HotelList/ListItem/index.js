import React from 'react'
import DiamondIcon from 'components/HotelList/DiamondIcon'
import ListItemfeatureNames from 'components/HotelList/ListItemfeatureNames'
import ListItemServesIcon from 'components/HotelList/ListItemServesIcon'
import { hashHistory } from 'react-router'
import { stringify } from 'querystring'

import './style.css'

//列表页中的一条列表组件
export default class ListItem extends React.Component {
  //提交相关数据
  submitMes = (e) => {
    
    //改变状态
    this.setState({
      formData: this.props.timeData
    })
    //拼接字符串
    this.state.formData["hotelId"] = e.currentTarget.value;

    // 跳转页面
    const query = stringify({
      hotelId:e.currentTarget.value,
      startTime:this.state.formData.checkInDate,
      endTime:this.state.formData.checkOutDate
    })
    hashHistory.push('/hoteldetail?' + query)

  }

  render() {
    //请求来数据的时候就渲染请求的数据，没有请求数据的时候就显示原始数据
    var commentNodes = this.props.data.map( (comment, index)=> {
      return (
        <div className="tavern-model-grid">
          <div className="modal-grid-left">
            <div className="recommend">
              <span className="text">力推</span>
            </div>
            <img src={comment.imgUrl + "_285x180.jpg"} />
          </div>
          <div className="model-grid-right">
            <div key={comment.id} className="model-grid-title">{comment.hotelName}</div>
            <div className="model-grid-label">
              {/*钻石组件*/}
              <DiamondIcon iconSum={comment.hotelLevel} />
              <ListItemfeatureNames featureStr={comment.featureNames} />
            </div>
            <div className="model-grid-message">
              {comment.address}
              <br />
              <a href="javascript:;">交通地图</a> <a href="javascript:;">周边街景</a>
              {/*<i className="fa fa-wifi" />
              <i className=" icon-food" />
              <i className="fa fa-product-hunt" />*/}
              <ListItemServesIcon serveIcon={comment.extendPropertyPics} />
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
              <button className="btn btn-default" value={comment.id} onClick={this.submitMes.bind(this)}>查看详情</button>
            </div>
          </div>
        </div>
      );
    })
    return (
      <div className="commentBox">{commentNodes}</div>
    )


  }

}
