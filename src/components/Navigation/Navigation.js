import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <ul className={css.header}>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? `${css.active}` : 'none')}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={css.link}>
          {isLoggedIn && (
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.active}` : 'none'
              }
              to="/contacts"
            >
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
