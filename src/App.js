import { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { AppBar } from 'Components/AppBar/AppBar';
import { Loader } from './Components/Loader/Loader';
//import { Container } from 'Components/Container/Container';
import PrivateRoute from 'Components/PrivateRoute';
import PublicRoute from 'Components/PublicRoute';
import {
  //toast,
  Toaster,
} from 'react-hot-toast';

import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { authSelectors } from 'redux/auth/auth-selectors';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "HomeView" */),
);
const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView' /* webpackChunkName: "RegisterView" */
  ),
);
const LoginView = lazy(() =>
  import('./views/LoginView/LoginView' /* webpackChunkName: "LoginView" */),
);
const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView' /* webpackChunkName: "ContactsView" */
  ),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <AppBar />

          <Suspense fallback={<Loader size={200} />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomeView />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsView />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}

      <Toaster autoClose={2000} />
    </>
  );
}
