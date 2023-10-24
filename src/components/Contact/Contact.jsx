// import { Loading } from 'components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { deleteContactById } from 'redux/contactsOperations';
import { ContactItemText, ContactListItem, DeleteBtn } from './Contact.styled';

const Contact = ({ contact }) => {
  // const isLoading = useSelector(selectLoading);
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContactById(contactId));
  };

  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <>
      <ContactListItem>
        <ContactItemText>Name: {contact.name}</ContactItemText>
        <ContactItemText>Phone: {contact.number}</ContactItemText>
        <DeleteBtn type="button" onClick={onDeleteContact}>
          Delete
        </DeleteBtn>
      </ContactListItem>
    </>
  );
};

export default Contact;
