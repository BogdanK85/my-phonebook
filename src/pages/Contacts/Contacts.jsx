import { Contact } from 'components/Contact/Contact';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/contactsOperations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  });

  return (
    <>
      <Section>
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
