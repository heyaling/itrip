import React from 'react'

export default class Home extends React.Component {
  render() {
    return (
      <div className="i-top clearfix">
        <div className="i-top-wrap">
          <div className="i-logo fl">
            <a href="#" title="i旅行">i旅行</a>
          </div>
          <div className="i-hotline fr">
            <ul>
              <li><a href="#">客服中心</a></li>
              <li>|</li>
              <li><a href="#">24小时热线：400-855-6666</a></li>
              <li className="i-top-phone">
                <a href="#"><i className="icon-mobile-phone" /></a>
                <div className="i-top-app i-top-appL">
                  <img src="images/img/erweima_1126.jpg" height={102} width={102} alt />
                  <p>手机扫码快速下载</p>
                  <p>App享受最多50% 优惠力度</p>
                </div>
              </li>
              <li className="i-top-phone i-top-wei">
                <a href="#"><i className="icon-comments" /></a>
                <div className="i-top-app i-top-app-wei">
                  <img src="images/img/erweima_1126.jpg" height={102} width={102} alt />
                  <p>i旅行微信公众号: <a href="#">ilvxing</a></p>
                  <p>手机扫一扫，享受专属福利</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
