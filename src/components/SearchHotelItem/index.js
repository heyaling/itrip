import React from 'react'
import { Form, Input, DatePicker, Row, Col, Select, Button, Icon, Cascader  } from 'antd'
import options from 'components/Cascader'
import "./style.css"

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

class SearchHotelItem extends React.Component {
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
	            {...formItemLayout}
	            label="目的地">
	            {getFieldDecorator('muDiDi', { initialValue: '' })(
	              <Cascader options={options} size='small' placeholder="北京"/>
	            )}
	          </FormItem>
         	</Col>
            <Col span={4}>
              <FormItem
                {...formItemLayout2}
                label="入住时间">
                {getFieldDecorator('ruZhuShiJian', { initialValue: '' })(
                  <DatePicker style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem
                {...formItemLayout2}
                label="退房时间">
                {getFieldDecorator('tuiFangShiJian', { initialValue: '' })(
                  <DatePicker style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
          <Col span={5}>
	          <FormItem
	            {...formItemLayout}
	            label="关键词">
	            {getFieldDecorator('guangJianCi', { initialValue: '' })(
	              <Input size='small' placeholder='海岛' />
	            )}
	          </FormItem>
           </Col>
		<Col span={4}>
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

export default Form.create()(SearchHotelItem)
