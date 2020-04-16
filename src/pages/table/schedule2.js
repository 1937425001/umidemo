//布局
import { Row, Col } from 'antd';
import styles from './table.css';
import React from 'react'

let tims =[
  '8:00','9:00','10:00','11:00','12:00','13:00',
  '14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00'
];
let kecheng = [
  { week:1,
    starttime:'8:00',
    endtime:'10:00',
    name:'军事化理论基础'
  },
  { week:2,
    starttime:'8:00',
    endtime:'9:00',
    name:'军事化理论基础'},
  { week:2,
    starttime:'14:00',
    endtime:'16:00',
    name:'马克思现代主义思想'},
];


export default class schedule2 extends React.Component{
  constructor(props){
    super(props)
  }

  //布局



  render() {
    return(
      <div>

        {this.heads()}
        <Row>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
        </Row>
        <Row>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
        </Row>
        <Row>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
        </Row>
        <Row>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
        </Row>
        <Row>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
          <Col span={3}>col-3</Col>
        </Row>
      </div>
    );

  }
  //周几
  heads(){
    return (
      <Row>
        <Col span={3}></Col>
        <Col span={3}>周一</Col>
        <Col span={3}>周二</Col>
        <Col span={3}>周三</Col>
        <Col span={3}>周四</Col>
        <Col span={3}>周五</Col>
        <Col span={3}>周六</Col>
        <Col span={3}>周日</Col>
      </Row>
    );
  }

  cols(){
    return <Col span={3} />
  }
}
