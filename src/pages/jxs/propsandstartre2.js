import React from 'react'


class Dog extends React.Component{
  constructor(props){
    super();
    this.state={
      age:1,
      dogFriends:[]
    }
  }
  //3.设置props属性的默认益
  static defaultProps = {
    name:"张三",
    gender:'公'
  };

  //4.设置props属性的类型
  static propTypes = {
  // name:PropTyps.
  };


  render() {
    const {name,gender} = this.props;
    const {age,dogFriends} = this.state;
    return(
      <div>
        <span>狗命：{name},性别：{gender}</span>
        <span>我今年{age},岁了</span>
        <span>我有很多狗友</span>
        <p>
          {
            dogFriends.map((friend,index)=>(
              <li key={index}>{friend}</li>
            ))
          }
        </p>
        <button onClick={()=>{this.andyear()}}>增加一岁</button>
      </div>
    );
  }
  andyear(){
    let temp = this.state.dogFriends;
    temp.push('狗友'+Math.floor(Math.random()*100));
    this.setState({
      age:this.state.age+1,
      dogFriends:temp
    })
  }
}

export default Dog;
