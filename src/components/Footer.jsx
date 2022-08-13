import classes from './Footer.module.css'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Footer() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <footer className={classes.footer}>
      <p>&copy; Plamen M.</p>
      {isLoggedIn && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
          </ul>
        </nav>
      )}
    </footer>
  )
}
