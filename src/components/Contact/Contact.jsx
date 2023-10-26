import ContactList from 'components/ContactList/contactList';
import { Loading } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { useContacts } from 'helpers/hookUseContacts';
import { useDispatch } from 'react-redux';
import { deleteContactById } from 'redux/contactsOperations';

export const Contact = () => {
  const { isLoading, contacts, filter } = useContacts();
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
    );
  });

  const onDeleteContact = contactId => {
    dispatch(deleteContactById(contactId));
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {contacts.length === 0 ? (
        <Notification message="There are no contacts" />
      ) : filteredContacts.length > 0 ? (
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
      ) : (
        <Notification message="There are no contacts for this match" />
      )}
    </>
  );
};
