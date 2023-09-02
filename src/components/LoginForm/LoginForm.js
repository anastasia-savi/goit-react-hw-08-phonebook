import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authOperations';
import css from './LoginForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <TextField
          style={{ minWidth: '295px' }}
          type="email"
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
      </label>
      <label className={css.label}>
        <TextField
          style={{ minWidth: '295px' }}
          type="password"
          name="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
      </label>
      <Button
        style={{ minWidth: '295px' }}
        type="submit"
        variant="outlined"
        className={css.button}
      >
        Log In
      </Button>
    </form>
  );
};
