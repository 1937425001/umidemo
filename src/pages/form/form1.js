import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}


const  FormItem = Form.Item;

class form1 extends React.Component{

  componentDidMount() {
    // 组件载入时调用表单验证方法验证表单，将按钮置灰
    this.props.form.validateFields();
  }
  //提交的值
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  // 支持字母、数字、下划线
  handleVerify = (rule, value, callback) => {
    const reg = /[^A-Z|a-z|0-9|_]+/g;
    if (value && value.match(reg)) {
      callback('只允许输入字母、数字、下划线');
    }
    callback();
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.仅在触摸字段后显示错误。
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' },{ validator: this.handleVerify }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    );

  }

}

const WrappedNormalLoginForm = Form.create()(form1);
export default class FromDemo  extends React.Component{
  render(){
    return (
      <WrappedNormalLoginForm/>
    );
  }

}



