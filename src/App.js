import React from 'react';

class App extends React.Component {

  state = { message: '' };
  changeName = (e) => {
    const currVal = e.target.value;
    this.setState({ message: currVal });
  }

  render() {
    const { message } = this.state;
    return (
      <div
        className="App">
        <div>

          <p>Type something..</p>
          <input
            onChange={this.changeName}
            type="text"/>

        </div>

        {message && <p>Hello {message}</p>}

      </div>

    )

  };

}
export default App;