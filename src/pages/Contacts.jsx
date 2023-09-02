import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
        <title>Your contacts</title>
      </HelmetProvider>
      <ContactForm />
      <Filter/>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
