import { Component } from 'react';

import HomePage from "../../pages/HomePage/HomePage";
import ServicesPage from '../../pages/ServicesPage/ServicesPage';
import ServicesPageInner from '../../pages/ServicesPageInner/ServicesPageInner';
import WorkPage from '../../pages/WorkPage/WorkPage';
import SomeProject from '../../pages/SomeProject/SomeProject';


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
        {/* <ServicesPageInner /> */}
        {/* <WorkPage /> */}
        <SomeProject />
      </>
    )
  }
}

export default App;
