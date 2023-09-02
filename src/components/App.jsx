import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/authOperations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// import ContactForm from './ContactForm/ContactForm';
// import Section from './Section/Section';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';

// const App = () => {
//     const dispatch = useDispatch();
//     const isLoading = useSelector(selectIsLoading);
//     const error = useSelector(selectError);

//     useEffect(() => {
//       dispatch(fetchContacts());
//     }, [dispatch]);
//   return (
//     <div className="div">
//       <Section title="Phonebook">
//         <ContactForm />
//       </Section>
//       <Section title="Contacts">
//         <Filter />
//         {isLoading && !error && <b>Request in progress...</b>}
//         <ContactList />
//       </Section>
//     </div>
//   );
// };

// export default App;
