// import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <HelmetProvider>
        <title>Registration</title>
      </HelmetProvider>
      <RegisterForm />
    </div>
  );
}
