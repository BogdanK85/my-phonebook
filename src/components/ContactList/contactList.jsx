// import React, { useEffect, useState } from 'react';
import { ContactContainer } from './ContactList.styled';
import { useContacts } from 'helpers/hookUseContacts';
import { Notification } from 'components/Notification/Notification';
import { Loading } from 'components/Loader/Loader';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const { isLoading, contacts, filter } = useContacts();
  // const [contactList, setContactList] = useState(contacts);

  // const handleDeleteContact = contactId => {
  //   setContactList(contactList.filter(contact => contact.id !== contactId));
  // };

  // useEffect(() => {
  //   setContactList(contacts);
  // }, [contacts]);

  if (isLoading) {
    return <Loading />;
  }

  const filteredContacts = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
    );
  });
  // const updateContactList = contactId => {
  //   setContactList(contactList.filter(contact => contact.id !== contactId));
  // };

  return (
    <ContactContainer>
      {contacts.length === 0 ? (
        <Notification message="There are no contacts" />
      ) : filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            // deleteContact={handleDeleteContact}
          />
        ))
      ) : (
        <Notification message="There are no contacts for this match" />
      )}
    </ContactContainer>
  );
};
export default ContactList;
