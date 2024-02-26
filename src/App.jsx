import './App.css'
import AllowNotification from './Pages/AllowNotification'
import CodeConfirm from './Pages/CodeConfirm'
import Explorer from './Pages/Explorer'
import Home from './Pages/Home'
import AppLayout from './Pages/Layouts/AppLayout'
import PlanLayout from './Pages/Layouts/PlanLayout'
import PhoneConfirmation from './Pages/PhoneConfirmation'
import Profile from './Pages/Profile'
import Welcome from "./Pages/Welcome"
import Upcoming from "./Pages/Upcoming"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Activity from './Pages/Activity'

function App() {
  const Pages = [
    {
      planPage: <Welcome />,
      planLink: "/"
    },
    {
      planPage: <PhoneConfirmation />,
      planLink: "/invite"
    },
    {
      planPage: <CodeConfirm />,
      planLink: "/confirm"
    },
    {
      planPage: <AllowNotification />,
      planLink: "/notification"
    },

    {
      appPage: <Home />,
      appLink: "/home"
    },
    {
      appPage: <Explorer />,
      appLink: "/explorer"
    },
    {
      appPage: <Profile />,
      appLink: "/profile"
    },
    {
      appPage: <Upcoming />,
      appLink: "/upcoming"
    },
    {
      appPage: <Activity />,
      appLink: "/activity"
    },
  ]

  return (
    <Router>
      <Routes>
        {Pages.map((page) => (
          <Route key={page} path={page.planLink} element={
            <PlanLayout>
              {page.planPage}
            </PlanLayout>
          } />
        ))}
      </Routes>
      <Routes>
        {Pages.map((page) => (
          <Route key={page} path={page.appLink} element={
            <AppLayout>
              {page.appPage}
            </AppLayout>
          } />

        ))}
      </Routes>
    </Router>
  )
}

export default App
