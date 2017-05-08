import React from 'react'
import './style.css'


export default class HomeRecommend extends React.Component {
  render() {
    return (
      <div>
        <div className="travel-local-body points-list">

          <div className="HomeHotel-title">
            <h3>特色酒店推荐 </h3>
          </div>

          <div id="myAccordion" className="tab-content ">
            <div className="tab-pane fade in active" id="accordion">
              <div className="travel-accordion accordion">
                <div className="box">
                  <ul>
                    <li>
                      <div>青旅酒店</div>
                    </li>
                    <li><div>古镇酒店</div></li>
                    <li><div>亲子酒店</div></li>
                    <li><div>情侣酒店</div></li>
                    <li><div>依山酒店</div></li>
                    <li><div>最美酒店</div></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
