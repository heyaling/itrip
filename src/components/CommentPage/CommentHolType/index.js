import React from 'react'
import { Input, Select } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;

import './style.css'

//评价酒店类型组件情况
export default class CommentHolType extends React.Component {
  render() {
        return (

                <div className="Commenthoteltype">
                <span className="hoteltypecc">酒店类型：</span>
                    <InputGroup compact>
                      <Select defaultValue="请选择">
                        <Option value="商务出差">商务出差</Option>
                        <Option value="朋友出游">朋友出游</Option>
                        <Option value="情侣出游">情侣出游</Option>
                        <Option value="家庭亲子">家庭亲子</Option>
                        <Option value="独自旅行">独自旅行</Option>
                        <Option value="代人预定">代人预定</Option>
                        <Option value="其他">其他</Option>
                      </Select>
                    </InputGroup>
                </div>
             
          )
  }
}



        
