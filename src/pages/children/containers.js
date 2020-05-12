import styles from './containers.css';
import React from 'react';



//
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

  width: '13%',
};

const newArr2=[];



for (let j = 1; j <14 ; j++) {//每行
  let newArr=[];
  let myhash = {};//存放本行数据
  //newArr.push(<td >{j}</td>);
  dataSource.forEach(
    item =>{
      if (item.lesson == j ) {//第几行
        myhash[item.week]=item;
      }
    }
  );
  for (let i = 0; i <=7 ; i++) {
    if (i == 0){
      const temp = <th ><div>{j}</div></th>;
      newArr.push(temp);
      continue;
    }
    console.log( myhash.hasOwnProperty(i));
    if (myhash.hasOwnProperty(i)){
      const temp = <td  style={c1} ><div>{myhash[i].text}</div></td>;
      newArr.push(temp);
    } else {
      const temp = <td ><div>+</div></td>;
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
    return (
      <div>
      <table className={styles.course_table}>
        <thead>
        <tr key={0}>
          <th width="30"></th>
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th>周六</th>
          <th>周日</th>
        </tr>
        </thead>
        <tbody>
        {newArr2}
        </tbody>
      </table>
        <div className="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
    </div>);
  }
}


