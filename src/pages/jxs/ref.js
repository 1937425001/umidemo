import React from 'react'

class Custom extends React.Component{
  constructor(props){
    super(props);
    //绑定ref
    this.myInput = React.createRef();
  }
  render() {
    return (
      <div>
        <input ref={this.myInput} type="text" placeholder="请输入内容"/>
        <input type="button" placeholder="获取焦点" onClick={()=>{this.focusInput() }}/>
      </div>
    );
  }
  focusInput(){
  //  console.log(this.myInput);
  this.myInput.current.focus();//获取焦点
  }

}

export default Custom;
