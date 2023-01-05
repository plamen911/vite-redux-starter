import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import classes from './Header.module.css'
import { authActions } from '../store/auth'

export default function Header () {
  const [loadingMsg, setLoadingMsg] = useState(null)

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const username = useSelector(state => state.auth.username)

  const dispatch = useDispatch()

  const logoutHandler = () => {
    setLoadingMsg('Logging out...')
    setTimeout(() => {
      setLoadingMsg(null)
      dispatch(authActions.loggedOut())
    }, 1000)
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loadingMsg && <div>{loadingMsg}</div>}
      {!loadingMsg && isLoggedIn && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              Hello, {username}!
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
