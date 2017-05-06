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

const formItemLayout2 = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 9
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

class SearchHotelForeign extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
  
    this.props.form.validateFields((err, values) => {
      if (err) return
      for (const formField in values) {
        const formValue = values[formField]
        if (formValue.format) {
          values[formField] = formValue.format('YYYY-MM-DD')
        }
      }
      this.props.onSubmit(values)
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className='SearchHotelInland'>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="目的地">
            {getFieldDecorator('muDiDi', { initialValue: '' })(
              <Input size='small' placeholder='三亚' />
            )}
          </FormItem>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout2}
                label="入住时间">
                {getFieldDecorator('ruZhuShiJian', { initialValue: '' })(
                  <DatePicker style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout2}
                label="退房时间">
                {getFieldDecorator('tuiFangShiJian', { initialValue: '' })(
                  <DatePicker style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
          </Row>
          <FormItem
            {...formItemLayout}
            label="住客数">
            {getFieldDecorator('zhuKeShu', { initialValue: '' })(
              <Select placeholder='请选择' size='small' style={{ width: '110px' }}>
                <Option value="1">1成人/间</Option>
                <Option value="2">2成人/间</Option>
                <Option value="3">3成人/间</Option>
                <Option value="4">4成人/间</Option>
                <Option value="5">5成人/间</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="关键词">
            {getFieldDecorator('guangJianCi', { initialValue: '' })(
              <Input size='small' placeholder='海岛' />
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

export default Form.create()(SearchHotelForeign)
