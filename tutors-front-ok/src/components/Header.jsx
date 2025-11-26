import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, Navigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../router';
import { adminActions, authAction, regAction, selectAdmin } from '../store/slices/adminSlice';
import Modal from '../components/modal/Modal';

const Header = () => {
  const { isAuth, user, error } = useSelector(selectAdmin);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const isAdmin = user?.role == 1;
  const dispatch = useDispatch();

  const [data, setData] = useState({
    login: '',
    password: '',
  });
  const reset = () => {
    setData({
      login: '',
      password: '',
    });
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    if (data.login && data.password) {
      dispatch(regAction(data));
      setRegisterVisible(false);
      reset();
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (data.login && data.password) {
      dispatch(authAction(data));
      setVisible(false);
      reset();
    }
  };

  if (isAuth) {
    localStorage.setItem('isAuth', true);
    localStorage.setItem('user', JSON.stringify(user));
  }

  const handleLogoutClick = () => {
    dispatch(adminActions.setIsAuth(false));
    dispatch(adminActions.setUser(null));
    localStorage.removeItem('isAuth');
    localStorage.removeItem('user');
  };
  const handleLoginClick = () => {
    setVisible(true);
  };
  const handleRegisterClick = () => {
    setRegisterVisible(true);
  };

  return (
    <header className="header">
      <div className="header__top top-header">
        <div className="top-header__container">
          <NavLink to={ROUTE_PATHS.MAIN} className="top-header__text logo">
            SUPER-TUTOR.BY
          </NavLink>

          <div className="top-header__menu">
            <NavLink to={ROUTE_PATHS.CATALOG} className={'top-header__button'}>
              Преподаватели
            </NavLink>
            {isAuth ? (
              <>
                {isAdmin ? (
                  <NavLink className={'top-header__button'} to={ROUTE_PATHS.ADMIN}>
                    {user?.login}
                  </NavLink>
                ) : (
                  <p>{user?.login}</p>
                )}
                <button onClick={handleLogoutClick} className={'top-header__button'}>
                  Выйти
                </button>
              </>
            ) : (
              <>
                <NavLink onClick={handleRegisterClick} className={'top-header__button'}>
                  Регистрация
                </NavLink>
                <NavLink onClick={handleLoginClick} className={'top-header__button'}>
                  Войти
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>

      <Modal visible={visible} setVisible={setVisible}>
        <h3 className="login__title">Вход</h3>
        <form className="login__form" onSubmit={onSubmit}>
          <input //
            value={data.login}
            onChange={(e) => setData({ ...data, login: e.target.value })}
            required
            add={'add'}
            className="form__input input"
            type="text"
            placeholder="Логин"
          />
          <input //
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
            className="form__input input"
            type="password"
            placeholder="Пароль"
          />
          <button type="submit" className="btn btn-primary login__btn">
            Вход
          </button>
          <button onClick={() => setVisible(false)} className="login-close">
            ×
          </button>
        </form>
      </Modal>
      <Modal visible={registerVisible} setVisible={setRegisterVisible}>
        <h3 className="login__title">Регистрация</h3>
        <form className="login__form" onSubmit={onRegisterSubmit}>
          <input //
            value={data.login}
            onChange={(e) => setData({ ...data, login: e.target.value })}
            required
            className="form__input input"
            type="text"
            placeholder="Логин"
          />
          <input //
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
            className="form__input input"
            type="password"
            placeholder="Пароль"
          />
          <button type="submit" className="btn btn-primary login__btn">
            Регистрация
          </button>
          <button onClick={() => setRegisterVisible(false)} className="login-close">
            ×
          </button>
        </form>
      </Modal>
    </header>
  );
};

export default Header;
