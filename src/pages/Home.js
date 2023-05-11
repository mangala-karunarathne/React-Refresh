import React, { useContext } from 'react';
import { AppContext } from '../App';


const Home = (props) => {
  const {username} = useContext(AppContext)
  return (
    <div>
      <h1>This is the Home Page and user is: {props.username} </h1>
    </div>
  )
}

export default Home
