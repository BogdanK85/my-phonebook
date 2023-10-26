import {
  ButtonRegistration,
  Input,
  Label,
  RegistrationFormStyled,
  RegistrationFormTitle,
} from './RegistrationForm.styled';

const RegistrationForm = ({ onSubmit }) => {
  return (
    <>
      <RegistrationFormTitle>Registration</RegistrationFormTitle>
      <RegistrationFormStyled onSubmit={onSubmit} autoComplete="off">
        <Label>
          Name
          <Input
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
            type="password"
            name="password"
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
