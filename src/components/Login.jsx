import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
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
    <div>
      <form onSubmit={loginHandler}>
        <div>
          <input type="text"
                 name="username"
                 value={username}
                 onChange={e => setUsername(e.target.value)}
                 placeholder="Username"
                 autoComplete="username"
          />
        </div>
        <div>
          <input type="password"
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
    </div>
  )
}
