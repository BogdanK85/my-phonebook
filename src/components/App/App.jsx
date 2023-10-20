import { Route, Routes } from 'react-router-dom';

// import { Filter } from 'components/Filter/Filter';
import HomePage from 'pages/HomePage/HomePage';
import { Layout } from 'components/Layout/Layout';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';
// import { ContactForm } from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/contactList';
// import { MainTitle, SecondTitle } from './App.styled';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
    </Routes>

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
