import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import HeaderComponent from './components/Header/HeaderComponent';
import HomeView from './views/HomeView/HomeView';
import FooterComponent from './components/Footer/FooterComponent';
import { ErrorView } from './views/ErrorView/ErrorView';
import ContactView from './views/ContactView/ContactView';
import AboutView from './views/AboutView/AboutView';
import LoginView from './views/LoginView/LoginView';
import PWResetView from './views/PWRestView/PWResetView';
import UserAdminView from './views/UserAdminView/UserAdminView';

const App = () => {
  return (
    <Router>
      <div className="container--fluid">
        <HeaderComponent />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/home" element={<HomeView />} exact />
            <Route path="/about" element={<AboutView />} exact />
            <Route path="/contact" element={<ContactView />} exact />
            <Route path="/login" element={<LoginView />} exact />
            <Route path="/password-reset/:token" element={<PWResetView />} />
            <Route path="/user-admin" element={<UserAdminView />} />
            <Route path="*" element={<ErrorView />} exact />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
