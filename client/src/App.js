import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import SpinnerComponent from './components/Spinner/SpinnerComponent';

const HeaderComponent = lazy(() =>
  import('./components/Header/HeaderComponent'),
);
const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const FooterComponent = lazy(() =>
  import('./components/Footer/FooterComponent'),
);
const AboutView = lazy(() => import('./views/AboutView/AboutView'));
const ContactView = lazy(() => import('./views/ContactView/ContactView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const PWResetView = lazy(() => import('./views/PWRestView/PWResetView'));
const UserAdminView = lazy(() => import('./views/UserAdminView/UserAdminView'));
const AdminView = lazy(() => import('./views/AdminView/AdminView'));
const ErrorView = lazy(() => import('./views/ErrorView/ErrorView'));
const AdminProfileView = lazy(() =>
  import('./views/AdminView/AdminProfileView'),
);
const AdminPlayersView = lazy(() =>
  import('./views/AdminView/AdminPlayersView'),
);
const AdminGeneralInformationView = lazy(() =>
  import('./views/AdminView/AdminGeneralInformationView'),
);
const AdminPublicNoticeView = lazy(() =>
  import('./views/AdminView/AdminPublicNoticeView'),
);
const AdminPrivateMessagesView = lazy(() =>
  import('./views/AdminView/AdminPrivateMessagesView'),
);

const App = () => {
  return (
    <Router>
      <div className="container--fluid">
        <HeaderComponent />
        <Suspense fallback={<SpinnerComponent />}>
          <div className="content-wrapper">
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
          </div>
        </Suspense>
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
