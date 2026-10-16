// src/pages/RegisterPage.tsx
import type { FormEvent } from 'react';
import { Link } from 'react-router';

import FormField from '../components/FormField';

export default function RegisterPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: отправить запрос на /api/register
  };

  return (
    <>
      <h1>Регистрация</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <FormField label="Логин" name="login" type="text" placeholder="user1234" required />
        <FormField label="Почта" name="email" type="email" placeholder="youre@really.cool" required />
        <FormField
          label="Пароль"
          name="password"
          type="password"
          placeholder="Не менее 8 символов"
          minLength={8}
          required
        />
        <FormField
          label="Повторите пароль"
          name="password-repeat"
          type="password"
          placeholder="Не используйте копирование :)"
          minLength={8}
          required
        />

        <button className="auth-button" type="submit">
          Зарегистрироваться
        </button>
      </form>

      <p className="auth-option-switch">
        Уже есть аккаунт?{' '}
        <Link className="auth-option-switch_link" to="/login">
          Войдите!
        </Link>
      </p>
    </>
  );
}