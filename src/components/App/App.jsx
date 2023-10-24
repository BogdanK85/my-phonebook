import { Navigate, Route, Routes } from 'react-router-dom';

// import { Filter } from 'components/Filter/Filter';
import HomePage from 'pages/HomePage/HomePage';
import { Layout } from 'components/Layout/Layout';
import Login from 'pages/Login/Login';
import { Toaster } from 'components/ToastWrap/ToastWrap';
import Register from 'pages/Register/Register';
import { useDispatch, useSelector } from 'react-redux';
// import { selectRefreshing } from 'redux/Auth/auth-selectors';
import { useEffect } from 'react';
// import { refrechCurrentUser } from 'redux/Auth/auth-operations';
// import { Loading } from 'components/Loader/Loader';
// import { PublicRoute } from 'components/PublicRoute';
// import { PrivateRoute } from 'components/PrivateRoute';
import Contacts from 'pages/Contacts/Contacts';
import { selectContacts } from 'redux/selectors';
import { getAllContacts } from 'redux/contactsOperations';
// import { ContactForm } from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/contactList';
// import { MainTitle, SecondTitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectRefreshing);
  const contacts = useSelector(selectContacts);
  // useEffect(() => {
  //   dispatch(refrechCurrentUser());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    // isRefreshing ? (
    //   <Loading />
    // ) : (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/register"
            element={
              <Register />
              // <PublicRoute>
              // {/* </PublicRoute> */}
            }
          />
        </Route>
      </Routes>
    </>
  );
};

// // <PrivateRoute>
// {
//   /* </PrivateRoute> */
// }
