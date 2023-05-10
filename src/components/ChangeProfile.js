import React, { useState } from 'react'

const ChangeProfile = (props) => {
  const [newUsername, setNewUsername] = useState("")
  return (
    <div>
      <input onChange={(event)=>{setNewUsername(event.target.value)}}/>
    <button onClick={()=>{props.setUsername(newUsername)}}>Change Username</button>
    </div>
  )
}

export default ChangeProfile
