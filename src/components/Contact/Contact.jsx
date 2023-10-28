import { useDispatch } from 'react-redux';
import { deleteContactById } from 'redux/contactsOperations';
import { ContactItemText, ContactListItem, DeleteBtn } from './Contact.styled';

export const Contact = ({ id, name, number, deleteContact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContactById(contactId));
  };

  return (
    <>
      <ContactListItem key={id}>
        <ContactItemText>Name: {name}</ContactItemText>
        <ContactItemText>Number: {number}</ContactItemText>
        <DeleteBtn type="button" onClick={() => handleDeleteContact(id)}>
          Delete
        </DeleteBtn>
      </ContactListItem>
    </>
  );
};
