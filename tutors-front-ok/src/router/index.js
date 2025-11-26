import AdminPage from '../pages/AdminPage';
import TutorPage from '../pages/TutorPage';
import CatalogPage from '../pages/CatalogPage';
import MainPage from '../pages/MainPage';

export const ROUTE_PATHS = {
  MAIN: '/main',
  CATALOG: '/tutors',
  LOGIN: '/main',
  ADMIN: '/admin',
};

export const publicRoutes = [
  {
    path: ROUTE_PATHS.MAIN,
    Component: MainPage,
  },
  {
    path: ROUTE_PATHS.CATALOG,
    Component: CatalogPage,
  },
  {
    path: ROUTE_PATHS.CATALOG + '/:id',
    Component: TutorPage,
  },
  {
    path: ROUTE_PATHS.LOGIN,
    Component: MainPage,
  },
];

export const privateRoutes = [
  {
    path: ROUTE_PATHS.ADMIN,
    Component: AdminPage,
  },
];
