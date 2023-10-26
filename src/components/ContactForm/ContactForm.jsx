import { Wraper } from 'pages/Login/Login.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/contactsOperations';
import { selectContacts } from 'redux/selectors';
import {
  ButtonAddContact,
  FormInputTitle,
  FormStyled,
  Input,
  Label,
} from './ContactForm.styled';
import user from '../../images/user.png';
import phone from '../../images/phone.png';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  const handleFormInput = evt => {
    const { name, value } = evt.target;

    if (name === 'number' && !/^\d+$/.test(value)) {
      return;
    }

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();

    const formData = { name: name, number: number };
    const haveAllreadyContact = contacts.find(
      contact => contact.name === formData.name
    );
    if (haveAllreadyContact) {
      return alert(`${formData.name} is already in contacts`);
    }

    dispatch(addNewContact(formData));
    clearForm();
  };

  return (
    <FormStyled onSubmit={handleFormSubmit}>
      <Label>
        <Wraper>
          <img src={user} alt="email Img " width="25" />
          <FormInputTitle>Name</FormInputTitle>
        </Wraper>

        <Input
          onChange={handleFormInput}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="name"
        />
      </Label>
      <Label>
        <Wraper>
          <img src={phone} alt="email Img " width="20" />
          <FormInputTitle>Number</FormInputTitle>
        </Wraper>
        <Input
          onChange={handleFormInput}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="number"
        />
      </Label>
      <ButtonAddContact type="submit">Add contact</ButtonAddContact>
    </FormStyled>
  );
};
