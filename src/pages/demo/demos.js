import React from 'react';
import './jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';





export default class demos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
    );
  }

}
