import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';
import css from './RegisterForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          type="text"
          name="name"
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
      </label>
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
        type="submit"
        variant="outlined"
        className={css.button}
        style={{ minWidth: '295px' }}
      >
        Register
      </Button>
    </form>
  );
};
