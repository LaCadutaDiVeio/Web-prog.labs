import { Outlet } from 'react-router'
import AppHeader from '../components/AppHeader'
import Sidebar from '../components/Sidebar'

function AppLayout() {
  return (
    <div className="app-layout">
      <AppHeader />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default AppLayout