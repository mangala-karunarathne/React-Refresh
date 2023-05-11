import React, { useContext } from 'react'
import ChangeProfile from '../components/ChangeProfile'
import { AppContext } from '../App'

const Profile = (props) => {
  const {username} = useContext(AppContext)

  return (
    <div>
      <h1>This is the Profile Page, The User is : {username}</h1>
      <ChangeProfile/>
    </div>
  )
}

export default Profile
