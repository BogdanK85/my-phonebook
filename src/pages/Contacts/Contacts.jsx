import { MainTitle, SecondTitle } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/contactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/contactsOperations';

const Contacts = () => {
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(getAllContacts());
  });

  return (
    <>
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <SecondTitle>Contacts</SecondTitle>
        <Filter />
        <div>
          <ContactList />
        </div>
      </div>
    </>
  );
};

export default Contacts;
