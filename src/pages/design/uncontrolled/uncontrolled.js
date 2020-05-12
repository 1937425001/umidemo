import {Card} from 'antd'
import React from 'react'




//输入框
const MyInput = ({onChange}) =>(
  <input onChange={onChange}/>
);
export default class uncontrolled extends React.Component{
  //打印输入的值
  onTextChange = (exent)=>{
    console.log(exent.target.value);
  };
  //一个重置按钮，点击后可以清空 MyInput 的内容
  onTextReset = () => {
    // 我该怎么做？
    // 拿到 MyInput 内部的 input 元素然后设置 value 为 ''？
  }
  render() {
    return (
      <div>
        <MyInput onChange={this.onChange} />
        <button onClick={this.onTextReset}>Reset</button>
      </div>
    )
  }
}



/*//输入框
const MyInput = ({onChange}) =>(
  <input onChange={onChange}/>
);
export default class uncontrolled extends React.Component{
  //打印输入的值
  onTextChange = (exent)=>{
    console.log(exent.target.value);
  };
  render() {
    return (
      <MyInput onChange={this.onTextChange}/>
    )
  }
}*/
