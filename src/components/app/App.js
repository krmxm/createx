import { Component } from 'react';

import HomePage from "../../pages/HomePage/HomePage";
import ServicesPage from '../../pages/ServicesPage/ServicesPage';
import ServicesPageInner from '../../pages/ServicesPageInner/ServicesPageInner';


import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {/* <HomePage /> */}
        {/* <ServicesPage /> */}
        <ServicesPageInner />
      </>
    )
  }
}

export default App;
