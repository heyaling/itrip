import React from 'react'
import { Form, Input, DatePicker, Row, Col, Select, Button, Icon, Cascader  } from 'antd'
import "./style.css"

const FormItem = Form.Item
const Option = Select.Option

const formItemLayout = {
  labelCol: {
    span: 5
  },
  wrapperCol: {
    span: 14
  },
}

const formItemLayout2 = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  },
}

const tailFormItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  },
}

class SearchOrder extends React.Component {
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
      //this.props.onSubmit(values)
      console.log(values);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className='SearchTitle'>
        <Form onSubmit={this.handleSubmit}>
         <Row>
         	<Col span={5}>
	          <FormItem
	            {...tailFormItemLayout}
	            label="订单号">
	            {getFieldDecorator('dingDanHao', { initialValue: '' })(
	                <Input size='small' placeholder='订单号' />
	            )}
	          </FormItem>
         	</Col>
             <Col span={5}>
	          <FormItem
	            {...formItemLayout}
	            label="旅客">
	            {getFieldDecorator('lvKe', { initialValue: '' })(
	              <Input size='small' placeholder='中文名/英文名' />
	            )}
	          </FormItem>
           </Col>
            <Col span={5}>
              <FormItem
                {...formItemLayout2}
                label="预定日期">
                {getFieldDecorator('ruZhuShiJian', { initialValue: '' })(
                  <DatePicker style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
            <Col span={5}>
              <FormItem
                {...formItemLayout2}
                label="结束日期">
                {getFieldDecorator('tuiFangShiJian', { initialValue: '' })(
                  <DatePicker style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
		<Col span={3}>
          <FormItem
            {...tailFormItemLayout}
            colon={false}
            label=" ">
            <div className='common-bar'>
              <Button type="primary" htmlType="submit" size="default">
                搜索
                <Icon style={{fontSize: '14px'}} type="right" />
              </Button>
            </div>
          </FormItem>
          </Col>
          </Row>

        </Form>
      </div>
    )
  }
}

export default Form.create()(SearchOrder)
