import {Button , Table } from 'antd';
import styles from './table.css';
import React from 'react'
import { blue } from '@ant-design/colors';

const dataSource=[
  {
    action:'8:00',
    monday:'军事化理论基础',

  },{
    action:'9:00',
    monday:'军事化理论基础',
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
    columnWidth:'20px',
    render(text, row, index){
      for (let i= 1;i<dataSource.length+1;i++) {
        if (index == i-1) {
          return{
            children:<div>{i+7}:00</div>
          }
        }

      }
    }

  },
  {
    title: '周一',
    dataIndex: 'monday',
    key: 'monday',
    render:(text, row, index)=> {
      if (index == 0) {
        return        {
          children: <div>军事化理论基础</div>,
            props: { rowSpan: 3,}
           };
      }
      if (index == 1) {
        return {
          children: <a></a>,
          props: { rowSpan: 0, }
        };
      }
        if (index == 2) {
          return        {
            children: <a></a>,
            props: { rowSpan: 0,}
          };
      }
    }
  },{
    title: '周二',
    dataIndex: 'tuesday',
    key: 'tuesday',
    render:(text, row, index)=> {
      if (index == 7) {
        return        {
          children: <div >马克思现代主义思</div>,
          props: { rowSpan: 3,}
        };
      }
      if (index == 8) {
        return {
          children: <a></a>,
          props: { rowSpan: 0, }
        };
      }
      if (index == 9) {
        return        {
          children: <a></a>,
          props: { rowSpan: 0,}
        };
      }
    }
  },
  {
    title: '周三',
    dataIndex: 'wednesday',
    key: 'wednesday',
  },{
    title: '周四',
    dataIndex: 'thursday',
    key: 'thursday',
    render:(text, row, index)=> {
      if (index == 4) {
        return        {
          children: <div>军事化理论基础</div>,
          props: { rowSpan: 2,}
        };
      }
      if (index == 5) {
        return {
          children: <a></a>,
          props: { rowSpan: 0, }
        };
      }

    }
  },
  {
    title: '周五',
    dataIndex: 'friday',
    key: 'friday',
    render:(text, row, index)=> {
      if (index == 10) {
        return        {
          children: <div>军事化理论基础</div>,
        };
      }
      

    }
  },
  {
    title: '周六',
    dataIndex: 'saturday',
    key: 'saturday',
    render:(text, row, index)=> {
      if (index == 13) {
        return        {
          children: <div>马克思现代主义思</div>,
        };
      }
    }
  },
  {
    title: '周日',
    dataIndex: 'sunday',
    key: 'sunday',render:(text, row, index)=> {
      if (index == 12) {
        return        {
          children: <div>马克思现代主义思</div>,
          props: { rowSpan: 2, }
        };
      }
      if (index == 13) {
        return        {
          children: <div>马克思现代主义思</div>,
          props: { rowSpan: 0, }
        };
      }
    }
  }
];

export default class demo extends React.Component{
  constructor(porps){
    super(porps);
    this.state = dataSource
  }
  render() {
    return (
      <div>
        <Table  dataSource={dataSource} columns={columns} pagination={false}  style={styles.biankuang} bordered/>
      </div>
    );
  }

}
