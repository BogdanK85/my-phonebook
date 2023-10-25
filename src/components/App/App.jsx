import { Navigate, Route, Routes } from 'react-router-dom';

// import { Filter } from 'components/Filter/Filter';
import HomePage from 'pages/HomePage/HomePage';
import { Layout } from 'components/Layout/Layout';
import Login from 'pages/Login/Login';
import { Toaster } from 'components/ToastWrap/ToastWrap';
import Register from 'pages/Register/Register';
import Contacts from 'pages/Contacts/Contacts';

export const App = () => {
  // const dispatch = useDispatch();
  // // const isRefreshing = useSelector(selectRefreshing);
  // const contacts = useSelector(selectContacts);
  // // useEffect(() => {
  // //   dispatch(refrechCurrentUser());
  // // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(getAllContacts());
  // }, [dispatch]);

  return (
    // isRefreshing ? (
    //   <Loading />
    // ) : (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/register"
            element={
              <Register />
              // <PublicRoute>
              // {/* </PublicRoute> */}
            }
          />
        </Route>
      </Routes>
    </>
  );
};

// // <PrivateRoute>
// {
//   /* </PrivateRoute> */
// }
