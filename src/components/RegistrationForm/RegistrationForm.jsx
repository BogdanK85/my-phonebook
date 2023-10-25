import {
  ButtonRegistration,
  Input,
  Label,
  RegistrationFormStyled,
  RegistrationFormTitle,
} from './RegistrationForm.styled';

const RegistrationForm = ({ onSubmit }) => {
  //   const handleFormSubmit = event => {
  //     event.preventDefault();

  //     const { name, email, password } = event.target.elements;
  //     registration({
  //       name: name.value,
  //       email: email.value,
  //       password: password.value,
  //     });
  //   };

  return (
    <>
      <RegistrationFormTitle>Registration</RegistrationFormTitle>
      <RegistrationFormStyled onSubmit={onSubmit} autoComplete="off">
        <Label>
          Name
          <Input
            // onChange={handleFormInput}
            // value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="email"
            required
            placeholder="Your name"
          />
        </Label>
        <Label>
          Email
          <Input
            // onChange={handleFormInput}
            // value={name}
            type="email"
            name="email"
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.?[a-zA-Zа-яА-Я]*)*$"
            title="email"
            required
            placeholder="Your email"
          />
        </Label>
        <Label>
          Password
          <Input
            //   onChange={handleFormInput}
            //   value={number}
            type="password"
            name="password"
            //   pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
            title="Password"
            required
            placeholder="Your password"
          />
        </Label>
        <ButtonRegistration type="submit">Registration</ButtonRegistration>
      </RegistrationFormStyled>
    </>
  );
};

export default RegistrationForm;
