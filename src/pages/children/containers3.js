import styles from './containers.css';
import React from 'react';



const dataSource=[
  {
    week:1,
    lesson:1,
    text:'军事化理论基础'
  },
  {
    week:1,
    lesson:4,
    text:'军事化理论基础'
  },

  {
    week:3,
    lesson:1,
    text:'马克思现代主义思想'
  },

  {
    week:2,
    lesson:8,
    text:'马克思现代主义思想'
  },
  {
    week:4,
    lesson:10,
    text:'晚自习'
  },

  {
    week:5,
    lesson:3,
    text:'军事化理论基础'
  },

];
//添加边框颜色
let c1 = {
  background:' #62e48a',
  width: '13%',
}


let myhash = {};//存放本行数据
const newArr2=[];



for (let j = 1; j <14 ; j++) {//每行
  let newArr=[];
  //newArr.push(<td >{j}</td>);
  dataSource.forEach(
    item =>{
      if (item.lesson == j ) {//第几行
        myhash[item.week]=item.text;
      }
    }
  );


  for (let i = 0; i <7 ; i++) {
    console.log( myhash.hasOwnProperty(i+1));
    if (myhash.hasOwnProperty(i+1)){
      const temp = <td  style={c1}>{myhash[i+1].text}</td>;
      newArr.push(temp);
    } else {
      const temp = <td ></td>;
      newArr.push(temp);
    }
  }

  console.log( "========");
  const  temp1 = <tr key={j}>{newArr}</tr>;
  newArr2.push(temp1);
}



export default class containers extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (<div>
      <h1>Hello, wrod</h1>
      <table>
        <tbody>
        {newArr2}
        </tbody>
      </table>
    </div>);
  }
}


