import { Fragment } from 'react'
import { useSelector } from 'react-redux'

import Login from './components/Login'
import Header from './components/Header'
import UserProfile from './components/UserProfile'

function App () {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <Fragment>
      <Header/>
      {!isLoggedIn && <Login/>}
      {isLoggedIn && <UserProfile/>}
    </Fragment>
  )
}

export default App
