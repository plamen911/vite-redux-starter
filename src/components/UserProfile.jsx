import classes from './UserProfile.module.css'
import { useSelector } from 'react-redux'

const UserProfile = () => {
  const username = useSelector(state => state.auth.username)

  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <div>
        Username: {username}
      </div>
    </main>
  )
}

export default UserProfile
