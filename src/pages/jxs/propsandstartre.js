import React from 'react'


class Dog extends React.Component{
  constructor(props){
    super();
    this.state={
      age:1,
      dogFriends:[]
    }
  }

  static defaultProps = {
    name:"张三",
    gender:'公'
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
      </div>
    );
  }
}

export default Dog;
