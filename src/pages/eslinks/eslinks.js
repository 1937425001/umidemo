import React from 'react'


class eslinks extends React.Component{
  merge() {
     const ret = {};
    for (var i in arguments) {
      var m = arguments[i];
      for (var j in m) ret[j] = m[j];
    }
    return ret;
  };
  asd(){
    return "11111111";
  }
  render() {
    console.log(this.merge({ a: 123}, { b: 456}));
    //console.log(this.asd());
    return (
      <div>
        /*{this.merge()}*/
        this.asd()
      </div>

    );
  }


}


export default eslinks;
