import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <ul className={css.header}>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? `${css.active}` : 'none')}
            to="/register"
          >
            Register
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? `${css.active}` : 'none')}
            to="/login"
          >
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
