import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import { adminActions, selectAdmin } from './store/slices/adminSlice';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_PATHS, privateRoutes, publicRoutes } from './router';

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(selectAdmin);

  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      dispatch(adminActions.setIsAuth(true));
      dispatch(adminActions.setUser(JSON.parse(localStorage.getItem('user'))));
    }
  }, []);
  return (
    <div className="app">
      <Header />
      <main className="page">
        <Routes>
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          {!isAuth ? (
            <Route path="*" element={<Navigate to={ROUTE_PATHS.LOGIN} />} />
          ) : (
            privateRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)
          )}
          <Route path="*" element={<Navigate to={ROUTE_PATHS.MAIN} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
