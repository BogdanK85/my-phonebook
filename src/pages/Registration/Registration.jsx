import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/Auth/auth-operations';

const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      registration({
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
  return <RegistrationForm onSubmit={handleSubmit} />;
};

export default Registration;
