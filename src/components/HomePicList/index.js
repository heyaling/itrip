import React from 'react'

export default class HomePicList extends React.Component {
  render () {
    return (
      <div className="travel-overseas-body points-list">
        <div className="points-list-header">
          <div className="tavern-list-left">
            <span>海外酒店</span>
          </div>
          <ul id="myTab" className="nav nav-tabs ">
            <li>
              <a href="#home" data-toggle="tab">
                普吉酒店
              </a>
            </li>
            <li className="active"><a href="#ios" data-toggle="tab">
                曼谷酒店
              </a></li>
            <li><a href="#ios" data-toggle="tab">
                首尔酒店
              </a></li>
            <li><a href="#ios" data-toggle="tab">
                清迈酒店
              </a></li>
            <li><a href="#ios" data-toggle="tab">
                新加坡酒店
              </a></li>
          </ul>
          <div className="header-list-right">
            <span>更多海外酒店 &gt;</span>
          </div>
        </div>
        
      </div>
    )
  }
}
