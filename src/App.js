import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { containerActions } from './action'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ this.props.increase }>INCREASE</button><br/>
        <button onClick={ this.props.decrease }>DECREASE</button><br/>
        <p>VALUE: {this.props.value}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value
  }
}
//connect是由react-redux提供的辅助函数，作用是将store state里的值，映射到this.props
//containerActions是把action里的方法绑定到当前组件，也就是App的this.props
export default connect(mapStateToProps, containerActions)(App);
