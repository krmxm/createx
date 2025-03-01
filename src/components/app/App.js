import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
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
  render() {
    return (
      <Routes>
        {/* Основные маршруты */}
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServicesPageInner />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/projects/:id" element={<SomeProject />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<PostPage />} />
        <Route path="/contacts" element={<ContactsUs />} />

        {/* Резервный маршрут для 404 */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    );
  }
}

export default App;