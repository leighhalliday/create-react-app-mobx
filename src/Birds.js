import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BirdStore')
@observer
export default class Birds extends Component {
  render() {
    const { BirdStore } = this.props;

    return <div>Birds</div>;
  }
}
