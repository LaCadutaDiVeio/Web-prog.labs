import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <Outlet />
      </section>
    </main>
  )
}

export default AuthLayout