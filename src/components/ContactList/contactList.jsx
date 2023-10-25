import {
  ContactContainer,
  ContactItemText,
  ContactListItem,
  DeleteBtn,
} from './ContactList.styled';

export const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ContactContainer>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactItemText>Name: {name}</ContactItemText>
          <ContactItemText>Number: {number}</ContactItemText>
          <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteBtn>
        </ContactListItem>
      ))}
    </ContactContainer>
  );
};
export default ContactList;
