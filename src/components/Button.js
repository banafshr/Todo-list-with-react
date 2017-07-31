import React, {Component} from 'react';
import './Button.css'

export default class Button extends Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        <i className="fa fa-check" aria-hidden="true"></i>
      </button>
    )
  }
}