import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { Section } from 'components/Section/Section';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/auth-operations';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  //   const registration = async body => {
  //     try {
  //       const data = await signUp(body);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  return (
    <Section>
      <RegistrationForm onSubmit={handleSubmit} />
    </Section>
  );
};

export default Register;
