import React, {Component} from 'react';
import {SixpackComponent} from './sixpack';
import {PlanOutComponent} from './planout';

export default class App extends Component {
  render() {
    return (
      <div>
        <SixpackComponent />
        <PlanOutComponent />
      </div>
    );
  }
}
