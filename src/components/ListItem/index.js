import React from 'react'
import jiudian from "../../common/images/img/jiudian.png"
import './style.css'

//列表页选项组件
export default class ListItem extends React.Component {

/*		constructor(...args){
        		super(...args);

        		//初始状态
        	

        	}*/


	render() {
				var commentNodes = this.props.data.map(function(comment,index) {
				      return (
				        <div className="list-Item">
					<div className="tavern-model-grid">
		        <div className="modal-grid-left">
		          <div className="recommend">
		            <span className="text">力推</span>
		          </div>
		          <img src={jiudian} style={{width: 285}} />
		        </div>
		        <div className="model-grid-right">
		          <div key={comment.id} className="model-grid-title">{comment.name}</div>
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
		            <a href="javascript:;">交通地图</a> <a href="javascript:;">周边街景</a>
		            <i className="fa fa-wifi" />
		            <i className=" icon-food" />
		            <i className="fa fa-product-hunt" />
		          </div>
		          <div className="model-grid-grade">
		            <div className="cell-grade">
		              <div className="left"> <span>4.7</span>/5分</div>
		              <div key={comment.id}  className="right"> 98%用户推荐</div>
		              <div>{comment.text}</div>
		            </div>
		            <div className="cell-money">
          			￥<span key={comment.id} >{comment.price}</span>起
		            </div>
		            <button className="btn btn-default">查看详情</button>
		          </div>
		        </div>
		      </div>
				</div>
				      );
				    });

		return (
				 <div className="commentBox">{commentNodes}</div>
				)


		}

	}