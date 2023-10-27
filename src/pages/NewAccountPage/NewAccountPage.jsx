const { ContactForm } = require('components/ContactForm/ContactForm');
const { Section } = require('components/Section/Section');
// const { useEffect } = require('react');
// const { useDispatch } = require('react-redux');
// const { getAllContacts } = require('redux/contactsOperations');

const NewAccountPage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllContacts());
  // });

  return (
    <Section>
      <ContactForm />
    </Section>
  );
};

export default NewAccountPage;
