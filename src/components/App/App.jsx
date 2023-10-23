import { Route, Routes } from 'react-router-dom';

// import { Filter } from 'components/Filter/Filter';
import HomePage from 'pages/HomePage/HomePage';
import { Layout } from 'components/Layout/Layout';
import Login from 'pages/Login/Login';
import { Toaster } from 'components/ToastWrap/ToastWrap';
import Register from 'pages/Register/Register';
// import { ContactForm } from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/contactList';
// import { MainTitle, SecondTitle } from './App.styled';

export const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>

    // <div>
    //   <MainTitle>Phonebook</MainTitle>
    //   <ContactForm />
    //   <SecondTitle>Contacts</SecondTitle>
    //   <Filter />
    //   <div>
    //     <ContactList />
    //   </div>
    // </div>
  );
};
