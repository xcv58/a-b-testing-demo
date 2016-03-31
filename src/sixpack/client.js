import React, {Component} from 'react';
import sixpack from 'sixpack-client';

class ClientComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: ''};
  }

  participate({id, experiment}) {
    this.session = new sixpack.Session({
      client_id: id,
      base_url: 'http://localhost:5000'
      // base_url: 'http://do.xcv58.com:5000'
    });
    this.session.participate(experiment, ['red', 'blue', 'green'], (err, res) => {
      if (err) throw err;
      const color = res.alternative.name
      console.log(experiment, color);
      this.setState({color});
    });
  }

  convert() {
    const {id, experiment} = this.props;
    this.session.convert(experiment);
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
          {color} <button onClick={this.convert.bind(this)}>
            Convert
          </button>
        </div>
        <hr />
      </div>
    );
  }
}

export {ClientComponent};
