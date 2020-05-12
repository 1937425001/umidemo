import React from 'react'
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
const AutoCompleteOption = AutoComplete.Option;
let state = {
  confirmDirty: false,
  autoCompleteResult: [],
};

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  constructor(props){
    super();
    this.state={
      confirmDirty: false,
      autoCompleteResult: [],
    }
  }


  handleWebsiteChange = value => {
    //声明字段
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const websiteOptions = getFieldDecorator.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    return(
    <Form >
      <Form.Item label="Website">
        {getFieldDecorator('website', {
          rules: [{ required: true, message: 'Please input website!' }],
        })(
          <AutoComplete
            dataSource={websiteOptions}
            onChange={this.handleWebsiteChange}
            placeholder="website"
          >
            <Input />
          </AutoComplete>,
        )}
      </Form.Item>
    </Form>)
  }
}
const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default class website extends React.Component{
  render() {
    return(
      <WrappedRegistrationForm/>
    );
  }
}
