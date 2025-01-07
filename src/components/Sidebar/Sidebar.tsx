import Logo from '../../assets/logo.svg'
import './style.css'
import Dashboard from '../../assets/dashboard.svg'
import teams from '../../assets/teams.svg'
import employees from '../../assets/employees.svg'
import settings from '../../assets/settings.svg'
import arrow_down from '../../assets/arrow-down.svg'

const Sidebar = () => {
  return (
    <aside>
      <div className='logo-container'>
        <img src={Logo} alt='logo' />
      </div>
      <ul>
        <li>
          <img src={Dashboard} alt='dashboard' />
          <span>Dashboard</span>
        </li>
        <li>
          <img src={teams} alt='teams' />
          <span>teams</span>
        </li>
        <li className='active'>
          <div>
            <img src={employees} alt='employees' />
            <span>employees</span>
          </div>
        </li>
        <li className='setting'>
          <div>
            <img src={settings} alt='Settings' />
            <span>Settings</span>
          </div>
          <img src={arrow_down} alt='arrow_down' />
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
