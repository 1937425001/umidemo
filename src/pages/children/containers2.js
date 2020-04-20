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

let newArr=[];
const newArr2=[];
let myhash = {};


for (let j = 1; j <14 ; j++) {//每行
  newArr.push(<td >{j}</td>);
  dataSource.forEach(
    item =>{
      if (item.lesson == j ) {//第几行
        for (let i = 0; i <7 ; i++) {
          newArr.push(<td >{i+1}</td>);
          if(item.week == i) {
            const temp = <td  style={c1}>{item.text}</td>;
            newArr.push(temp);
          }
        }
      }
    }
  );
  const  temp = <tr>{newArr}</tr>;
  newArr=[];
  newArr2.push(temp);
}



export default class containers extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (<div>
      <h1>Hello, wrod</h1>
      <table>
      {newArr2}
      </table>
    </div>);
  }
}


