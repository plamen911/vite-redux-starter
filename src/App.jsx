import { useSelector } from 'react-redux'
import './App.css'
import Login from './components/Login'
import TopNav from './components/TopNav'

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <div className="App">
      {isLoggedIn ? <TopNav/> : <Login/>}
    </div>
  )
}

export default App
