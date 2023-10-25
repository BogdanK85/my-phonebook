import { useAuth } from 'helpers/hookUseAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/auth-operations';
import UserImg from '../../images/user.png';
import { LoginUserPageWrap } from './LoginUserPage.styled';

export const LoginUserPage = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <LoginUserPageWrap>
      <img src={UserImg} alt="user Img " width="350" />
      <h2>Congratulations!</h2>
      <p>Dear {user}</p>
      <button
        className="action-button"
        type="button"
        onClick={() => dispatch(logOut())}
      ></button>
    </LoginUserPageWrap>
  );
};
//     <LoginFormStyled
//       // onSubmit={handleFormSubmit}
//       autoComplete="off"
//     >
//       <Label>
//         Email
//         <Input
//           // onChange={handleFormInput}
//           // value={name}
//           type="email"
//           name="email"
//           pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.?[a-zA-Zа-яА-Я]*)*$"
//           title="email"
//           required
//           placeholder="Your email"
//         />
//       </Label>
//       <Label>
//         Password
//         <Input
//           //   onChange={handleFormInput}
//           //   value={number}
//           type="password"
//           name="password"
//           //   pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
//           title="Password"
//           required
//           placeholder="Your password"
//         />
//       </Label>
//       <ButtonSignIn type="submit">Sign in</ButtonSignIn>
//     </LoginFormStyled>
//   );
// };
