import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import classes from './Login.module.css'
import { authActions } from '../store/auth'

export default function Login () {
  const [loadingMsg, setLoadingMsg] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const loginHandler = e => {
    e.preventDefault()
    setLoadingMsg('Logging in...')
    setTimeout(() => {
      setLoadingMsg(null)
      dispatch(authActions.loggedIn({username}))
    }, 1000)
  }

  if (loadingMsg) {
    return <div>{loadingMsg}</div>
  }

  return (
    <main className={classes.auth}>
      <section>
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
      </section>
    </main>
  )
}
