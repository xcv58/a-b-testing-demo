import React, {Component} from 'react';
import sixpack from 'sixpack-client';

class ClientComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: ''};
  }

  participate({id, experiment}) {
    const session = new sixpack.Session({
      client_id: id,
      base_url: 'http://do.xcv58.com:5000'
    });
    session.participate(experiment, ['red', 'blue', 'green'], (err, res) => {
      if (err) throw err;
      const color = res.alternative.name
      console.log(experiment, color);
      this.setState({color});
    });
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
