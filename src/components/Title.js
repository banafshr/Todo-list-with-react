import React, {Component} from 'react';
import './Title.css'

export default class Title extends Component {
  render() {
    return <h3>{this.props.value}</h3>
  }
}