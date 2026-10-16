import { Link } from 'react-router'

function AppHeader() {
  return (
    <header className="app-header">
      <Link className="app-name" to="/project">
        TaskMaster
      </Link>

      <form
        className="app-search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="search">Поиск</label>

        <input
          id="search"
          name="search"
          type="search"
          placeholder="Найти задачу"
        />
      </form>

      <button className="profile-button" type="button">
        Профиль
      </button>
    </header>
  )
}

export default AppHeader