import ContactList from 'components/ContactList/contactList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllContacts } from 'redux/contactsOperations';
import { Wraper } from './Contact.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  });

  return (
    <>
      <Section>
        <Wraper>
          <NavLink className="link navBtn" to="/newaccountpage">
            Return to add account
          </NavLink>
        </Wraper>

        <div>
          <Filter />
        </div>
        <div>
          <ContactList />
        </div>
      </Section>
    </>
  );
};

export default ContactsPage;
