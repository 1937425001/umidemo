import styles from './kecheng.css';
import React from 'react';



const dataSource=[
  {
    week:1,
    lesson:2,
    startTime:'8:00',
    endTime:'10:30',
    text:'8:00-8:50 军事化理论基础'
  },
  {
    week:2,
    lesson:1,
    startTime:'8:00',
    endTime:'8:50',
    text:'8:00-8:50 军事化理论基础'
  },
  {
    week:2,
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





export default class kecheng extends React.Component{
  constructor(props){
    super(props);
  }

  titles() {
      return (
        <div className={styles.Week}>
          <ul>
            <li className={styles.fl}>周一</li>
            <li className={styles.fl}>周二</li>
            <li className={styles.fl}>周三</li>
            <li className={styles.fl}>周四</li>
            <li className={styles.fl}>周五</li>
            <li className={styles.fl}>周六</li>
            <li className={styles.fl}>周日</li>
          </ul>
        </div>);
    }
    sorces(){
      return(
        <div className={styles.Source}>
          <div className={styles.Num  + " " + styles.fl } >
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
              <li>22:00</li>
            </ul>
          </div>
          {/*星期一课程信息*/}
          <div className={styles.Mon + " " + styles.fl }>
            <ul className={styles.KeCheng}>
              <li className={styles.SQL}>
                <p>大型数据库@含浦校区3203教室</p>
              </li>
            </ul>
            <ul className={styles.KeCheng3} >
              <li className={styles.YunChou} >
                <p>运筹学@含浦校区3303教室</p>
              </li>
            </ul>
            <ul className={styles.KeCheng}>
              <li className={styles.Com}>
                <p>计算机组成原理@含浦校区3302教室</p>
              </li>
            </ul>
          </div>
          {/*  星期二课程信息-*/}
          <div className={styles.Tue  + " " + styles.fl }>
            <ul className={styles.KeCheng}>
              <li className={styles.WeiJi}>
                <p>微机原理@含浦校区3306教室</p>
              </li>
              <li className={styles.wuke2} style={{border:' none',boxShadow:' none',width: '108px' ,height:' 78px'}}></li>

              <li className={styles.Suan}>
                <p>算法设计与分析@含浦校区3202教室</p>
              </li>
              <li className={styles.Com}>
                <p>计算机组成原理@含浦校区3机房</p>
              </li>
            </ul>
          </div>
        </div>
      );
    }

  render() {
    return (
      <div >
        <div >
          <div className={styles.Content}>
            {this.titles()}
            <Sorces/>
          </div>
        </div>
        </div>
     );
  }

}


class Sorces extends React.Component{
  constructor(props){
    super(props)
  }
  rows(){
    return(
      <div className={styles.Num  + " " + styles.fl } >
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
          <li>22:00</li>
        </ul>
      </div>
    );
  }

  //840
  weeks(){
    for (let i=0;i<7;i++ ) {
      let foo = false;
      dataSource.forEach(item =>{
        if (item.week == i ) {//第几行
          foo = true;
          const a = <li key={i} className={styles.Com } style={this.csse(item)}>+{item.name}+</li>;
        }
      });

      if (!foo){
        const a =  <li style={{border:' none',marginTop:'380px',width: '108px',boxShadow:'none',height:' 140px'}} ></li>
      }
    }

  }
  //计算时间 每一分钟1px高度
  datetimes(timess){
    let arr = timess.split(':');
    let temp = parseInt(arr[0])*60+parseInt(arr[1]) ;
    return temp;
  }
  //计算时间 每一分钟1px高度
  csse(item){
    let csse = {border:' none',boxShadow:' none',marginTop:'0px',width: '108px' ,height:' 150px'};

    csse.marginTop =this.datetimes(item.starttime);
    return csse;
  }


  render() {
    return(
      <div className={styles.Source +" "+styles.divs}>
        {this.rows()}
        {/*星期一课程信息*/}
        <div className={styles.Mon + " " + styles.fl }>
          <ul className={styles.KeCheng}>
            <li className={styles.Com} style={{border:' none',boxShadow:' none',width: '108px' ,height:' 150px'}}>
              <p>8:00-10:30 军事化理论</p>
            </li>
          </ul>
        </div>
        {/*  星期二课程信息-*/}
        <div className={styles.Tue  + " " + styles.fl }>
          <ul className={styles.KeCheng}>
            <li className={styles.Com} style={{border:' none',boxShadow:' none',width: '108px' ,height:' 50px'}}><p>8:00-10:30 军事化理论</p></li>
            <li className={styles.Com} style={{border:' none',marginTop:'450px',boxShadow:'none',height:' 140px'}} >
                <p>14:20-16:40 马克思现代主义思想</p>
              </li>
          </ul>
        </div>
        {/*  星期二课程信息-*/}
        <div className={styles.Tue  + " " + styles.fl }><ul >

        </ul></div>
        {/*  星期二课程信息-*/}
        <div className={styles.Tue  + " " + styles.fl }>
          <ul className={styles.KeCheng}>
            <li className={styles.Com} style={{border:' none',boxShadow:' none',marginTop:'380px',width: '108px' ,height:' 50px'}}><p>13:30-15:30 马克思现代主义思想</p></li>
            <li className={styles.Com} style={{border:' none',marginTop:'380px',boxShadow:'none',width: '108px',height:' 140px'}} >
              <p>13:30-15:20 马克思现代主义思想</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}
