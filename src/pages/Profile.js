import React from 'react'
import ChangeProfile from '../components/ChangeProfile'

const Profile = (props) => {
  return (
    <div>
      <h1>This is the Profile Page, The User is : {props.username}</h1>
      <ChangeProfile setUsername={props.setUsername}/>
    </div>
  )
}

export default Profile
