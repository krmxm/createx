import { Component } from 'react';

import HomePage from "../../pages/HomePage/HomePage";


import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <HomePage />
      </>
    )
  }
}

export default App;
