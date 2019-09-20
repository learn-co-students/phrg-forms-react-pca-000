import React from 'react';

export default class ControlledInput extends React.component {
  state = {
    value = ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.sendFormDataSomewhere(this.state);
  }

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event) }>
        <input type='text' value={this.state.value} />
      </form>
    );
  }
}
