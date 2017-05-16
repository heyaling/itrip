import React from 'react'
import { Input, Button } from 'antd';
import './style.css'


/*我的信息页的主体框架*/
export default class MyInfoSearch extends React.Component {
  render() {
        return (
              <div className="myinfosearch">
                <span>旅客姓名</span><Input placeholder="中文名/英文名" /><Button style={{marginRight:"10px"}} type="primary">查询</Button><Button type="primary">新增</Button>
              </div>

           )
  }
}


