import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Employees from './pages/Employees/Employees'
import Employee from './pages/Employee/Employee'
import ErrorPage from './error-page'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement:  <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Employees />,
        errorElement:  <ErrorPage />,
      },
      {
        path: '/employee/:ud',
        element: <Employee />,
        errorElement:  <ErrorPage />,
      }
    ]
  }
])

export default routes
