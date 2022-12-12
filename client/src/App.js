import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import HomeView from './views/HomeView/HomeView';
import FooterComponent from './components/Footer/FooterComponent';
import { ErrorView } from './views/ErrorView/ErrorView';
import ContactView from './views/ContactView/ContactView';

import LoginView from './views/LoginView/LoginView';
import PWResetView from './views/PWRestView/PWResetView';
import UserAdminView from './views/UserAdminView/UserAdminView';
import AdminView from './views/AdminView/AdminView';
import AdminProfileView from './views/AdminView/AdminProfileView';
import AdminPlayersView from './views/AdminView/AdminPlayersView';
import AdminGeneralInformationView from './views/AdminView/AdminGeneralInformationView';
import AdminPublicNoticeView from './views/AdminView/AdminPublicNoticeView.jsx';
import AdminPrivateMessagesView from './views/AdminView/AdminPrivateMessagesView.jsx';

const HeaderComponent = lazy(() =>
  import('./components/Header/HeaderComponent'),
);
const AboutView = lazy(() => import('./views/AboutView/AboutView'));

const App = () => {
  return (
    <Router>
      <div className="container--fluid">
        <HeaderComponent />
        <div className="content-wrapper">
          <Suspense fallback={<>Loading...</>}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/home" element={<HomeView />} exact />
              <Route path="/about" element={<AboutView />} exact />
              <Route path="/contact" element={<ContactView />} exact />
              <Route path="/login" element={<LoginView />} exact />
              <Route path="/password-reset/:token" element={<PWResetView />} />
              <Route path="/user-admin" element={<UserAdminView />} exact />
              <Route
                path="/admin-profile"
                element={<AdminProfileView />}
                exact
              />
              <Route
                path="/admin-players"
                element={<AdminPlayersView />}
                exact
              />
              <Route
                path="/admin-private-messages"
                element={<AdminPrivateMessagesView />}
                exact
              />
              <Route
                path="/admin-general-information"
                element={<AdminGeneralInformationView />}
                exact
              />
              <Route
                path="/admin-public-notice"
                element={<AdminPublicNoticeView />}
                exact
              />
              <Route path="/admin" element={<AdminView />} exact />
              <Route path="*" element={<ErrorView />} exact />
            </Routes>
          </Suspense>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
