import { Component } from 'react';

import HomePage from "../../pages/HomePage/HomePage";
import ServicesPage from '../../pages/ServicesPage/ServicesPage';
import ServicesPageInner from '../../pages/ServicesPageInner/ServicesPageInner';
import WorkPage from '../../pages/WorkPage/WorkPage';
import SomeProject from '../../pages/SomeProject/SomeProject';
import AboutUs from '../../pages/AboutUs/AboutUs';
import Positions from '../../pages/Positions/Positions';
import News from '../../pages/News/News';
import PostPage from '../../pages/PostPage/PostPage';
import ContactsUs from '../../pages/ContactsUs/ContactsUs';


import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <HomePage />
        {/* <ServicesPage /> */}
        {/* <ServicesPageInner /> */}
        {/* <WorkPage /> */}
        {/* <SomeProject /> */}
        {/* <AboutUs /> */}
        {/* <Positions /> */}
        <News />
        {/* <PostPage /> */}
        {/* <ContactsUs /> */}
      </>
    )
  }
}

export default App;
