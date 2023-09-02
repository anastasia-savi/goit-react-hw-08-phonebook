import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.useremail}>{user.email}</p>
      <Button
        type="button"
        variant="outlined"
        className={css.button}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
