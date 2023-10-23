import {
  Label,
  Input,
  ButtonSignIn,
  LoginFormStyled,
} from './LoginFonm.styled';

const LoginForm = () => {
  return (
    <LoginFormStyled
      // onSubmit={handleFormSubmit}
      autoComplete="off"
    >
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
      <ButtonSignIn type="submit">Sign in</ButtonSignIn>
    </LoginFormStyled>
  );
};

export default LoginForm;
