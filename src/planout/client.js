import React, {Component} from 'react';
import {MyExperiment} from './experiment';

class ClientComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: ''};
  }

  participate({id, experiment}) {
    const exp = new MyExperiment({userId: `${experiment}-${id}`});
    const color = exp.get('foo');
    this.setState({color});
  }

  componentDidMount() {
    this.participate({...this.props});
  }

  componentWillReceiveProps(nextProps) {
    this.participate({...nextProps});
  }

  render() {
    const {id, experiment} = this.props;
    const {color} = this.state;
    let style = {color};
    return (
      <div style={style}>
        <h2>
          Exp: {experiment}, Client ID: {id}
        </h2>
        <div>
          {color}
        </div>
        <hr />
      </div>
    );
  }
}

export {ClientComponent};
