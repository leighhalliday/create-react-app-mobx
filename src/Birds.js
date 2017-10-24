import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BirdStore')
@observer
export default class Birds extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.BirdStore.addBird(this.birdInput.value);
    e.target.reset();
  };

  render() {
    const { BirdStore } = this.props;

    return (
      <div>
        <h2>You have {BirdStore.birdCount} birds</h2>

        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            ref={input => (this.birdInput = input)}
            placeholder="Add a bird"
          />
        </form>

        <ul>{BirdStore.birds.map(bird => <li key={bird}>{bird}</li>)}</ul>
      </div>
    );
  }
}
