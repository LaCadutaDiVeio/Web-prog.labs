// src/router.tsx
import { createBrowserRouter } from 'react-router';

import AuthLayout from './layouts/AuthLayout';
import AppLayout from './layouts/AppLayout';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProjectPage from './pages/ProjectPage';
import MyTasksPage from './pages/MyTasksPage';

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },

  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <ProjectPage /> },
      { path: '/my-tasks', element: <MyTasksPage /> },
    ],
  },
]);