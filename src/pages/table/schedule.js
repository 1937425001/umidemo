import {Button , Table } from 'antd';
import styles from './table.css';
import React from 'react'

const dataSource=[
  {
    action:'8:00',
    monday:'军事化理论基础',

  },{
    action:'9:00',
    monday:'军事化理论基础',
    tuesday :'军事化理论基础',
  },{
    action:'10:00',

  },{
    action:'11:00',

  },{
    action:'12:00',

  },{
    action:'13:00',

  },{
    action:'14:00',

  },{
    action:'15:00',

  },{
    action:'16:00',
    saturday:'军事化理论基础',
    thursday:'体育'
  },{
    action:'17:00',

  },{
    action:'18:00',

  },{
    action:'19:00',

  },{
    action:'20:00',

  },{
    action: '21:00',

  },
];


const columns = [

  {
    title: '',
    dataIndex:'action',
    key: 'action',
    fixed: 'left',
  },
  {
    title: '周一',
    dataIndex: 'monday',
    key: 'monday',
  },
  {
    title: '周二',
    dataIndex: 'tuesday',
    key: 'tuesday',
  },
  {
    title: '周三',
    dataIndex: 'wednesday',
    key: 'wednesday',
  },{
    title: '周四',
    dataIndex: 'thursday',
    key: 'thursday',
  },
  {
    title: '周五',
    dataIndex: 'friday',
    key: 'friday',
  },
  {
    title: '周六',
    dataIndex: 'saturday',
    key: 'saturday',
  },
  {
    title: '周日',
    dataIndex: 'sunday',
    key: 'sunday',
  }
];

export default class schedule extends React.Component{
  constructor(porps){
    super(porps);
    this.state = dataSource
  }
  render() {
    return (
      <div>
        <Table dataSource={dataSource} columns={columns} pagination={false} bordered/>
      </div>
    );
  }

}
