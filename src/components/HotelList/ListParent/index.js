import React from 'react'

//列表的头部选项（选定几家酒店、最受欢迎等等项目）
 export default class ListParent extends React.Component {
  render() {
    return (
       <div className="itemParent">
          <div>
        <div style={{margin: '10px 0'}} className="tavern-params-title">
          <span style={{color: 'red', fontWeight: 800, fontSize: 18}}>8</span>&nbsp;家酒店 <span>您已选择：</span>
          <button className="btn">北京 <i className="icon-remove" /></button>
        </div>
        <div className="tavern-grid-title">
          <div className="btn-group">
            <button className="btn btn-default">最受欢迎</button>
            <button className="btn btn-default">评分</button>
            <button className="btn btn-default">价格</button>
            <button className="btn btn-default">星级</button>
          </div>
        </div>
      </div>

       </div>
    )
  }
}
