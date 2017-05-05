import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import video_01 from '../../../common/images/video/travel/video.mp4'
import video_02 from '../../../common/images/video/travel/video.webm'
class Video extends React.Component {
  render() {
    return (
      <div className="i-tv">
        <div className="video-plugin ">
          <div className="video-mess-body">
            <div className="video-message">
              <div className="mes-title">三亚喜来登度假酒店</div>
              <div className="mes-desc">Sheraton Sanya Resort</div>
              <div className="mes-button">【 亚龙湾 】国家旅游度假区，亚龙湾高尔夫球场对面
              </div>
              <div className="mes-button">
                ● 东南亚风情
                &nbsp;
                ● 休闲度假
                &nbsp;
                ● 亲子时刻
                &nbsp;
                ● 会议酒店
              </div>
              <div className="mes-play"><i className=" icon-play-circle" /><span>查看完整视频</span></div>
            </div>
          </div>
          <video className="video" autoPlay="autoplay" preload="auto" loop="loop">
            <source src={video_02} type="video/webm" alt=""/>
            <source src={video_01} type="video/mp4"  alt=""/>
          </video>
        </div>
      </div>

    )
  }
}


export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Video />
        <Footer />
      </div>
    )
  }
}
