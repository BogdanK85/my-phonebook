import { Contact } from 'components/Contact/Contact';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllContacts } from 'redux/contactsOperations';
import { Wraper } from './Contact.styled';

const Contacts = () => {
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
          <Contact />
        </div>
      </Section>
    </>
  );
};

export default Contacts;
