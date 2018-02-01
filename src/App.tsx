import * as React from 'react';
import './App.css';
const cxs = require('cxs');

const navbarClasses = cxs({
  position: 'absolute',
  left: 0,
  top:0,
  right: 0,
  height: '40px',
  background: '#333',
  borderBottom: '1px solid #000'
});

const titleClasses = cxs({
  color: 'white',
  left: '15px',
  top: '10px',
  position: 'absolute',
  'text-transform': 'uppercase',
  'font-weight': 'bold',
  'font-family': "'Lato', sans-serif"
});

const hexagonClasses = cxs({
  background: 'white',
  width: '500px',
  height: '500px',
  position: 'absolute',
  marginLeft:'-250px',
  marginTop:'-250px',
  left: '50%',
  top: '50%',
  border: '1px solid #111',
  boxShadow: '2px 2px 20px rgba(16,16,16,0.5)'
});

const svgClasses = cxs({
  marginTop: '90px'
})


class Navbar extends React.PureComponent {
  render(){
    return (
      <div className={navbarClasses}>
        <div className={titleClasses}>
          Hexagonal Tile Editor
        </div>
      </div>
    );
  }
}

class Hexagonal extends React.PureComponent {
  render(){
    return (
      <div className={hexagonClasses}>
        <svg className={svgClasses} id="color-fill" xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">
          <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
        </svg>
      </div>
    );
  }
}

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hexagonal />
      </div>
    );
  }
}

