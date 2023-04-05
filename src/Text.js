import React, { useEffect, useState } from 'react';

const Text = (props) => {
    const [text, setText] = useState("");

    useEffect(() => {
      console.log("Component Mounted");
    
      return () => {
        console.log("Component Unmounted");
      }
     
    },[props.setShowText])
    
  return (
    <div>
        <input
        onChange={(event)=>{
            setText(event.target.value);
        }}/>

        <h1>{text}</h1>
    </div>
  )
}

export default Text