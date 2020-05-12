import styles from './dzj.css';
import React from 'react'

//父组件
class App extends React.Component{
  constructor(props){
    super(props);
    //初始化状态
    this.state={
      //传递到子组件
      studentArr: [
        {name: '周杰伦', age: 30, gender: '男', phone: '18899989839'},
        {name: '谢霆锋', age: 40, gender: '男', phone: '18299839890'},
        {name: '刘德华', age: 50, gender: '男', phone: '18998938783'}
      ]

    }
  }

  render() {
    return(
    <div id="app">
      <Add/>
      <List/>
    </div>
    );
  }
}

//子组件表单
class Add extends React.Component{
  render() {
    return(
      <div>
        <fieldset>
          <legend>撩课信息录入系统(React版)</legend>
          <div>
            <span>姓名: </span>
            <input type="text" placeholder="请输入姓名"/>
          </div>
          <div>
            <span>年龄: </span>
            <input type="text" placeholder="请输入年龄"/>
          </div>
          <div>
            <span>性别: </span>
            <select>
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
          </div>
          <div>
            <span>手机: </span>
            <input type="text" placeholder="请输入手机号码"/>
          </div>
          <button>创建新用户</button>
        </fieldset>

      </div>
    );
  }
}

//子组件列表
class List extends React.Component{
  //设置props中属性的类型
  static pr
  render() {
    return(
      <div>
        <table>
          <thead>
          <tr>
            <td>姓名</td>
            <td>性别</td>
            <td>年龄</td>
            <td>手机</td>
            <td>删除</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>周杰伦</td>
            <td>男</td>
            <td>38</td>
            <td>18888888888</td>
            <td>
              <button>删除</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}



export default App;
