import React, {Component} from 'react';
import {ClientComponent} from './client';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {experiment: 'exp'};
  }

  onChange(event) {
    const experiment = event.target.value;
    this.setState({experiment});
  }

  render() {
    const {experiment} = this.state;
    const list = [];
    for (let id = 0; id < 10; id++) {
      list.push(
        <ClientComponent key={id} {...{id, experiment}} />
      )
    }
    return (
      <div>
        <h1>Sixpack</h1>
        <input type='text'
          placeholder='experiment name'
          onChange={this.onChange.bind(this)}
          value={experiment}></input>
        {list}
      </div>
    );
  }
}

export default List;
