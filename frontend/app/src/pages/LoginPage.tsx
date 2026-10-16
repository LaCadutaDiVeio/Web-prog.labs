// src/pages/LoginPage.tsx
import type { FormEvent } from 'react';
import { Link } from 'react-router';

import FormField from '../components/FormField';

export default function LoginPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: отправить запрос на /api/login
  };

  return (
    <>
      <h1>Вход</h1>
      <h2>Управляйте задачами команды в одном месте!</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <FormField label="Почта" name="email" type="email" autoComplete="email" required />
        <FormField label="Пароль" name="password" type="password" required />

        <button className="auth-button" type="submit">
          Войти
        </button>
      </form>

      <p className="auth-option-switch">
        Нет аккаунта?{' '}
        <Link className="auth-option-switch_link" to="/register">
          Зарегистрируйтесь!
        </Link>
      </p>
    </>
  );
}