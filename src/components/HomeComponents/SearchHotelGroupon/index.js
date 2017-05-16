import React from 'react'
import { Form, Input, DatePicker, Row, Col, Select, Button, Icon } from 'antd'
import './style.css'

const FormItem = Form.Item
const Option = Select.Option

const formItemLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 18
  },
}


const tailFormItemLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 19
  },
}

class SearchHotelGroupon extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className='SearchHotelGroupon'>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...tailFormItemLayout}
            colon={false}
            label="热门城市">
            <div className="common-tar tuiJian">
              <a href="#">上海</a>、
                    <a href="#">广州</a>、
                    <a href="#">深圳</a>、
                    <a href="#">北京</a>、
                    <a href="#">成都</a>、
                    <a href="#">杭州</a>、
                    <a href="#">苏州</a>、
                    <a href="#">青岛</a>
                </div>
              </FormItem>

              <FormItem
            {...tailFormItemLayout}
            colon={false}
            label="热门团购">
            <div className="common-tar tuiJian">
              <a href="#">度假公寓</a>、
                    <a href="#">别墅轰趴</a>、
                    <a href="#">住店游玩</a>、
                    <a href="#">情侣酒店</a>、
                    <a href="#">火车票专</a>
                </div>
              </FormItem>
              <hr/>
               
          <FormItem
            {...formItemLayout}
            label="关键词">
            {getFieldDecorator('guangJianCi', { initialValue: '' })(
              <Input size='small' placeholder='(选填)商圈/景区/酒店品牌/酒店名称/关键字' />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="目的地">
            {getFieldDecorator('muDiDi', { initialValue: '' })(
              <Input size='small' placeholder='三亚' />
            )}
          </FormItem>
         
        
              <FormItem
                {...tailFormItemLayout}
                colon={false}
                label=" ">
                <div className='common-tar'>
                  <Button type="primary" htmlType="submit" size="default">
                    搜索行程
                    <Icon style={{fontSize: '10px'}} type="right" />
                  </Button>
                </div>
              </FormItem>
            </Form>
      </div>
    )
  }
}

export default Form.create()(SearchHotelGroupon)
