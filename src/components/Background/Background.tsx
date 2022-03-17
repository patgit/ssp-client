import React, { Component } from 'react';
import './Styles.css';

class Background extends Component {
  render() {
    return (
      <div className='background'>
        <canvas />
      </div>
    );
  }
}

export default Background