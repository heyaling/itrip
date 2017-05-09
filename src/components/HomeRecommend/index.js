import React from 'react'
import classnames from 'classnames'
import './style.css'


export default class HomeRecommend extends React.Component {
  state = {
    currentIndex: -1
  }

  static defaultProps = {
    accordionTitles: ['青旅酒店', '古镇酒店', '亲子酒店', '情侣酒店', '依山酒店', '最美酒店']
  }
  
  handleMouseEnter(index) {
    this.setState({
      currentIndex: index
    })
  }

  handleMouseLeave () {
    this.setState({
      currentIndex: -1
    })
  }

  renderAccordion() {
    const { accordionTitles } = this.props
    const { currentIndex } = this.state
    const list = []

    for (let i = 0; i < 6; i++) {

      let clsNames = classnames({
        hoverItem: currentIndex === i,
        hoverOtheritem: currentIndex > -1 &&  currentIndex !== i
      })

      list.push(
        <li
          className={clsNames}
          onMouseLeave={this.handleMouseLeave.bind(this)}
          onMouseEnter={this.handleMouseEnter.bind(this, i)}
          key={i}>
          <div>{accordionTitles[i]}</div>
        </li>
      )
    }
    return list
  }s

  render() {
    return (
      <div className="HomeRecommend">
        <div className="travel-local-body points-list">

          <div className="HomeHotel-title">
            <h3>特色酒店推荐</h3>
          </div>

          <div id="myAccordion" className="tab-content ">
            <div className="tab-pane fade in active" id="accordion">
              <div className="travel-accordion accordion">
                <div className="box">
                  <ul>
                    {this.renderAccordion()}
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
