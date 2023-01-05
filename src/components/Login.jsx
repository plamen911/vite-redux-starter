import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import classes from './Login.module.css'
import { authActions } from '../store/auth'

export default function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loadingMsg = useSelector(state => state.auth.loadingMsg)

  const dispatch = useDispatch()

  const loginHandler = e => {
    e.preventDefault()
    dispatch(authActions.setLoadingMessage('Logging in...'))
    setTimeout(() => {
      dispatch(authActions.setLoadingMessage(null))
      dispatch(authActions.loggedIn({username}))
    }, 1000)
  }

  return (
    <main className={classes.auth}>
      <section>
        {loadingMsg ? (
          <div>{loadingMsg}</div>
        ) : (
          <form onSubmit={loginHandler}>
            <div className={classes.control}>
              <label htmlFor="username">Username</label>
              <input type="text"
                     id="username"
                     name="username"
                     value={username}
                     onChange={e => setUsername(e.target.value)}
                     placeholder="Username"
                     autoComplete="username"
              />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input type="password"
                     id="password"
                     name="password"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     placeholder="Password"
                     autoComplete="current-password"
              />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        )}
      </section>
    </main>
  )
}
