import {Button} from 'antd'
import React from 'react'


//创建组件类
class states extends React.Component{
  constructor(props){
    super(props);
    //初始化状态
    this.state = {
      name:'周杰伦',
      gender:'男',
      intro:'七里香'
    }
  }

  render() {
    const {name,gender,intro} = this.state;
    return(
      <div>
        <h3>我叫：{name},性别：{gender},代表作：{intro}</h3>
        <Button onClick={()=>{this.dealClik() }}> 换一个</Button>
      </div>
    );
  }
  dealClik(){
    //alert("点了");
    this.setState({
      name:'林俊杰',
      gender:'男',
      intro:'曹操'
    });
  }
}


export default states;
