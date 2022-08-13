import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth'

export default function TopNav () {
  const [loadingMsg, setLoadingMsg] = useState(null)
  const username = useSelector(state => state.auth.username)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    setLoadingMsg('Logging out...')
    setTimeout(() => {
      setLoadingMsg(null)
      dispatch(authActions.loggedOut())
    }, 1000)
  }

  if (loadingMsg) {
    return <div>{loadingMsg}</div>
  }

  return (
    <div>
      Hello, {username}!
      <button onClick={logoutHandler}>Log Out</button>
    </div>
  )
}
