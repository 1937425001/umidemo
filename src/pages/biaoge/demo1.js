import styles from './demo1.css';
import { Row, Col, Icon} from 'antd';
import React from 'react';
import { Card } from 'antd';

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




export default class demo1 extends React.Component{

  constructor(props){
    super(props);

  }

  render() {
    return <Dial/>;
  }
}


class Dial extends React.Component{
  //className={styles.zhengzhi}
  constructor(props){
    super(props);
    this.as("1_1");
  }
  as(ids){
    for (let i=0;i<dataSource.length;i++){
      let temp = dataSource[i].lesson+"_"+dataSource[i].week;
      console.log('id'+temp+"内容"+dataSource[i].text);
      console.log('ids'+ids);

    }
    var trs = document.getElementById("1_1");

   /* trs.style.background="#62e48a;";
    trs.style.width= "10%";
    trs.append("<div class='three'>我是子元素append</div>");*/
    console.log(trs);
  }

  render(){
    return(
        <table className={styles.course_table}>
          <tbody id="course_html">
            <tr>
              <th width="30"></th>
              <th>周一</th>
              <th>周二</th>
              <th>周三</th>
              <th>周四</th>
              <th>周五</th>
              <th>周六</th>
              <th>周日</th>
            </tr>
            <tr>
              <td>1</td>
              <td id="1_1" >
                <div></div>
              </td>
              <td id="2_1" >
                <div></div>
              </td>
              <td id="3_1">
                <div ></div>
              </td>
              <td id="4_1" >
                <div ></div>
              </td>
              <td  id="5_1" >
                <div ></div>
              </td>
              <td id="6_1">
                <div ></div>
              </td>
              <td id="7_1">
                <div ></div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td id="1_2">
                <div></div>
              </td>
              <td id="2_2" >
                <div></div>
              </td>
              <td id="3_2">
                <div ></div>
              </td>
              <td id="4_2" >
                <div ></div>
              </td>
              <td  id="5_2" >
                <div ></div>
              </td>
              <td id="6_2">
                <div ></div>
              </td>
              <td id="7_2">
                <div ></div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td id="1_3">
                <div></div>
              </td>
              <td id="2_3" >
                <div></div>
              </td>
              <td id="3_3">
                <div ></div>
              </td>
              <td id="4_3" >
                <div ></div>
              </td>
              <td  id="5_3" >
                <div ></div>
              </td>
              <td id="6_3">
                <div ></div>
              </td>
              <td id="7_3">
                <div ></div>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td id="1_4">
                <div></div>
              </td>
              <td id="2_4" >
                <div></div>
              </td>
              <td id="3_4">
                <div ></div>
              </td>
              <td id="4_4" >
                <div ></div>
              </td>
              <td  id="5_4" >
                <div ></div>
              </td>
              <td id="6_4">
                <div ></div>
              </td>
              <td id="7_4">
                <div ></div>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td id="1_5">
                <div></div>
              </td>
              <td id="2_5" >
                <div></div>
              </td>
              <td id="3_5">
                <div ></div>
              </td>
              <td id="4_5" >
                <div ></div>
              </td>
              <td  id="5_5" >
                <div ></div>
              </td>
              <td id="6_5">
                <div ></div>
              </td>
              <td id="7_5">
                <div ></div>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td id="1_6">
                <div></div>
              </td>
              <td id="2_6" >
                <div></div>
              </td>
              <td id="3_6">
                <div ></div>
              </td>
              <td id="4_6" >
                <div ></div>
              </td>
              <td  id="5_6" >
                <div ></div>
              </td>
              <td id="6_6">
                <div ></div>
              </td>
              <td id="7_6">
                <div ></div>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td id="1_7">
                <div></div>
              </td>
              <td id="2_7" >
                <div></div>
              </td>
              <td id="3_7">
                <div ></div>
              </td>
              <td id="4_7" >
                <div ></div>
              </td>
              <td  id="5_7" >
                <div ></div>
              </td>
              <td id="6_7">
                <div ></div>
              </td>
              <td id="7_7">
                <div ></div>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td id="1_8">
                <div></div>
              </td>
              <td id="2_8" >
                <div></div>
              </td>
              <td id="3_8">
                <div ></div>
              </td>
              <td id="4_8" >
                <div ></div>
              </td>
              <td  id="5_8" >
                <div ></div>
              </td>
              <td id="6_8">
                <div ></div>
              </td>
              <td id="7_8">
                <div ></div>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td id="1_9">
                <div></div>
              </td>
              <td id="2_9" >
                <div></div>
              </td>
              <td id="3_9">
                <div ></div>
              </td>
              <td id="4_9" >
                <div ></div>
              </td>
              <td  id="5_9" >
                <div ></div>
              </td>
              <td id="6_9">
                <div ></div>
              </td>
              <td id="7_9">
                <div ></div>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td id="1_10">
                <div></div>
              </td>
              <td id="2_10" >
                <div></div>
              </td>
              <td id="3_10">
                <div ></div>
              </td>
              <td id="4_10" >
                <div ></div>
              </td>
              <td  id="5_10" >
                <div ></div>
              </td>
              <td id="6_10">
                <div ></div>
              </td>
              <td id="7_10">
                <div ></div>
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td id="1_11">
                <div></div>
              </td>
              <td id="2_11" >
                <div></div>
              </td>
              <td id="3_11">
                <div ></div>
              </td>
              <td id="4_11" >
                <div ></div>
              </td>
              <td  id="5_11" >
                <div ></div>
              </td>
              <td id="6_11">
                <div ></div>
              </td>
              <td id="7_11">
                <div ></div>
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td id="1_12">
                <div></div>
              </td>
              <td id="2_12" >
                <div></div>
              </td>
              <td id="3_12">
                <div ></div>
              </td>
              <td id="4_12" >
                <div ></div>
              </td>
              <td  id="5_12" >
                <div ></div>
              </td>
              <td id="6_12">
                <div ></div>
              </td>
              <td id="7_12">
                <div ></div>
              </td>
            </tr>
        </tbody>
        </table>
    );
  }
}
