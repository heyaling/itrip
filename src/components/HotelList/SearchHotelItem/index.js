import React from 'react'
import { Form, Input, DatePicker, Row, Col, Button, Icon, Cascader } from 'antd'

import CitySwitcher from 'components/CitySwitcher'
import { fetchSearch } from 'components/fetchUtils'
import "./style.css"

const FormItem = Form.Item
//const Option = Select.Option

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

  constructor(props) {
    super(props);

    // 设置 initial state
    this.state = {

    };

  }

  componentDidMount() {
    // this.refs['submitID'].handleClick();
    this.handleSubmit();
  }
  //获得子组件传递的名称和ID
  handleChangeCityName = (cityName, cityId) => {
    console.log("cityName="+ cityName)
    console.log("cityId="+ cityId)
  }
  handleSubmit = (e) => {
    if (e) {
      e.preventDefault()
    }

    this.props.form.validateFields((err, values) => {
      if (err) return
      for (const formField in values) {
        const formValue = values[formField]
        if (formValue.format) {
          values[formField] = formValue.format('YYYY-MM-DD')
        }
      }
      //values包含表单的数据了
      //console.log("values="+JSON.stringify(values));


      //后台接口请求数据
      fetchSearch({
        url: "/hotellist/searchItripHotelPage",
        type: "POST",
        param: values,
        callback: e => {
          //得到后台的请求数据
          console.log(e.data);
          // 将请求数据传递给父组件
          this.props.receivedata(e.data, values)
        }
      })

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
                {getFieldDecorator('destination', { initialValue: '北京' })(
                  <CitySwitcher changeCityName={this.handleChangeCityName} />
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem
                {...formItemLayout2}
                label="入住时间">
                {getFieldDecorator('checkInDate', { initialValue: '' })(
                  <DatePicker style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem
                {...formItemLayout2}
                label="退房时间">
                {getFieldDecorator('checkOutDate', { initialValue: '' })(
                  <DatePicker style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
            <Col span={5}>
              <FormItem
                {...formItemLayout}
                label="关键词">
                {getFieldDecorator('keywords', { initialValue: '' })(
                  <Input size='small' placeholder='品牌' />
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem
                {...tailFormItemLayout}
                colon={false}
                label=" ">
                <div className='common-bar'>
                  <Button type="primary" ref="submitID" htmlType="submit" size="default">
                    搜索
                <Icon style={{ fontSize: '14px' }} type="right" />
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
