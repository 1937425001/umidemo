import {Button , Table } from 'antd';
import styles from './table.css';
import React from 'react'
import { Link } from 'umi';


const columns = [
  {
    title: '编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '主题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '内容',
    dataIndex: 'body',
    key: 'body',
  },
];

export default class table extends React.Component{
  constructor(props){
    super(props);
    this.state={dataSource:[]}
  }
  render(){
    return (
      <div>
        <Button type="danger" onClick={this.pushdata.bind(this)}>拉取数据</Button>
        <Link to="/">Go to list page</Link>
        <Table dataSource={this.state.dataSource} columns={columns} />
      </div>
    );
  }
  pushdata () {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    //this 防止函数指向其他地方
    let that= this;
    fetch(url).then(response => response.json())
      .then(data =>{
        that.setState({dataSource:data});
      })
  }
  /*//加载数据
  componentDidMount() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    //this 防止函数指向其他地方
    let that= this;
    fetch(url).then(response => response.json())
      .then(data =>{
        that.setState({dataSource:data});
      })
  }*/
}


/*
export default function() {
  return (
    <div>
      <Button type="danger">拉取数据</Button>
      <Table dataSource={dataSource} columns={columns} />;

    </div>
  );
}
*/
