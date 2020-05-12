import styles from './a.css';
import React from 'react';

const dataSource=[
  {
    week:1,
    startTime:'8:00',
    endTime:'10:30',
    text:'8:00-10:30 军事化理论基础'
  },
  {
    week:2,
    startTime:'8:00',
    endTime:'8:50',
    text:'8:00-8:50军事化理论基础'
  },
  {
    week:2,
    startTime:'14:30',
    endTime:'15:20',
    text:'14:30-15:20马克思现代主义思想'
  },
  {
    week:4,
    startTime:'13:30',
    endTime:'15:20',
    text:'13:30-15:20马克思现代主义思想'
  },
  {
    week:4,
    startTime:'20:20',
    endTime:'22:00',
    text:'20:20-22:00 晚自习'
  }
];


export default class kecheng extends React.Component{
  constructor(props){
    super(props);
  }

  titles() {
    return (
      <div className={styles.tables}>
        <ul>
          <li ></li>
          <li >周一</li>
          <li>周二</li>
          <li >周三</li>
          <li>周四</li>
          <li>周五</li>
          <li >周六</li>
          <li >周日</li>
        </ul>
      </div>);
  }


  render() {
    return (
      <div >
        <div >
          <div className={styles.course_table}>
            {this.titles()}
            <Course/>
          </div>
        </div>
      </div>
    );
  }

}

const divtemp= -1;

class Course extends React.Component{
  constructor(props){
    super(props)
  }

  //计算每个div距离顶部位置，每一分钟一个px
  divTop(timess,week){

    let arr = timess.split(':');
    let temp = parseInt(arr[0])*60+parseInt(arr[1]) ;
    temp=temp-480;//480分钟 即8点后
    //console.log("距离顶部位置"+temp );
    return temp+"px";
  }
  //计算每个div高度
  divHeight(startTime,endTime){
    console.log("startTime"+startTime+"endTime"+endTime);
    let startarr=[];
    let endarr=[];
    let starttemp = 0;
    let endtemp = 0;
    if (startTime){
      startarr = startTime.split(':');
      starttemp = parseInt(startarr[0])*60+parseInt(startarr[1]) ;
    }

    if (endTime){
      endarr = endTime.split(':');
      endtemp = parseInt(endarr[0])*60+parseInt(endarr[1]);
    }

    console.log("每个div高度"+(endtemp-starttemp) );
    return(endtemp-starttemp)+"px";
  }
  //左边的时间
  sorces(){
    return(
      <div >
        <ul>
          <li>8:00</li>
          <li>9:00</li>
          <li>10:00</li>
          <li>11:00</li>
          <li>12:00</li>
          <li>13:00</li>
          <li>14:00</li>
          <li>15:00</li>
          <li>16:00</li>
          <li>17:00</li>
          <li>18:00</li>
          <li>19:00</li>
          <li>20:00</li>
          <li>21:00</li>
        </ul>
      </div>
    );
  }

  render() {
    const newArr2=[];//存放ul
    //7列周一到周日
    for (let i =0;i<7;i++) {
      const newArr=[];//存放li
      dataSource.forEach(item=>{
        if (item.week-1 == i){
          //设定课程的宽高
          const styletemp = {top:'1`px',width: '100%',height:' 0px',border:'1px solid #ffffff' };
          styletemp.top = this.divTop(item.startTime,item.week);//相对定位
          styletemp.height=this.divHeight(item.startTime,item.endTime);
          const temp =  <li  key={item.text}><div className={styles.Com} style={styletemp} >{item.text}</div></li>
          newArr.push(temp);
        }
      })
      const  Arr2 = <ul key={i}>{newArr}</ul>
      newArr2.push(Arr2)
    }


    return(
      <div className={styles.source}>
        {this.sorces()}
        {newArr2}
      </div>
    );

  }
}
