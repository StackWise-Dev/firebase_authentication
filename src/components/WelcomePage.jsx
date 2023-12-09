import { signOut } from 'firebase/auth'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../firebase'

function WelcomePage() {

    function clickHandler() {
        signOut(auth);
    }
  return (
    <div>
      Hello {auth.currentUser.email} - &nbsp;
      <NavLink to="/login" onClick={clickHandler}>Log Out</NavLink>
    </div>
  )
}

export default WelcomePage
