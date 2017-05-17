import React from 'react'
import { Modal, Icon, Layout, Input, Checkbox, Button, Select, Radio, Form, DatePicker, Row, Col } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
export default class App extends React.Component {
  state = {
    visible: this.props.data.visible,
  }

  componentWillReceiveProps() {
    this.setState({
      visible: this.props.data.visible
    });
  }
  componentWillMount() {
    this.setState({
      visible: this.props.data.visible
    });
  }
  showModal = (e) => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
    this.props.data.callback(this.props.data);
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }


  render() {
    let data = this.props.data.data;
    const WrappedApp = Form.create()(MyAddFrom);
    return (
      <Modal title="编辑用户信息" width={300} maskClosable={false} visible={this.state.visible}
        onOk={this.handleOk} onCancel={this.handleCancel} >
       <WrappedApp data={data}></WrappedApp>
      </Modal>
    )
  }
}
export class MyAddFrom extends React.Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }

  render() {
    let data = this.props.data;
    const { getFieldDecorator } = this.props.form;
    return (
       <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="姓名"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }} >  
            {/*<Input size="small" defaultValue={data.userMess.userName} />*/}

          {getFieldDecorator('userName', {
            rules: [{
              type: 'string', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
            initialValue:data.userMess.userName
          })(
            <Input size="small"  />
          )}

          </FormItem>
          <FormItem
            label="电话"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
          >
           
          {getFieldDecorator('phone', {
            rules: [{
              type: 'string', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
            initialValue:data.userMess.phone
          })(
            <Input size="small"  />
          )}
          </FormItem>
          <FormItem
            label="身份证号"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
          >
            <Input size="small" defaultValue={data.userMess.card} />
          </FormItem>
          <FormItem
            wrapperCol={{ span: 8, offset: 4 }}
          >
            <Button type="primary" htmlType="submit">
              Submit
          </Button>
          </FormItem>
        </Form>
    )
  }
}
