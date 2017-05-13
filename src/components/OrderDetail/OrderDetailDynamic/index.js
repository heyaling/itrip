import React from 'react'
import './style.css'

//订单详情动态组件
export default class OrderDetailDynamic extends React.Component {
  render() {
        return (
                 <ul className="detailDynamic">
                     <li>
                        <span>2017-05-02 10:26</span>
                        <p>感谢您的入住，欢迎点评该酒店</p>
                     </li>
                     <li>
                        <span>2017-04-30 06:38</span>
                        <p>您的入住信息已核实</p>
                     </li>
                     <li>
                        <span>2017-04-15 16:05</span>
                        <p>预订已成功，您的入住信息将在5-15分钟通过代理商发送至酒店</p>
                     </li>
                     <li>
                        <span>2017-04-15 16:05</span>
                        <p>代理商已确认您的预订，您可安心入住！专业服务，全程保障！</p>
                     </li>
                 </ul>
            )
        }
    }
