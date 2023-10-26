import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { Toaster } from 'components/ToastWrap/ToastWrap';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'helpers/hookUseAuth';
import { refrechCurrentUser } from 'redux/Auth/auth-operations';
import { Loading } from 'components/Loader/Loader';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const NewAccountPage = lazy(() =>
  import('../../pages/NewAccountPage/NewAccountPage')
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refrechCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loading />
  ) : (
    <>
      <Suspense fallback={'loading'}>
        <Toaster />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route
              path="/register"
              element={
                <PublicRoute redirectTo="/homepage" component={<Register />} />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/newaccountpage"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<NewAccountPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
