import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loggedOut } from '../features/auth/authSlice'

export default function TopNav () {
  const [loadingMsg, setLoadingMsg] = useState(null)
  const username = useSelector(state => state.auth.username)
  const dispatch = useDispatch()

  const handleLogout = () => {
    setLoadingMsg('Logging out...')
    setTimeout(() => {
      setLoadingMsg(null)
      dispatch(loggedOut())
    }, 1000)
  }

  if (loadingMsg) {
    return <div>{loadingMsg}</div>
  }

  return (
    <div>
      Hello, {username}!
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}
