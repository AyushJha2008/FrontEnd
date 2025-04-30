import React from 'react'

const childA = (props) => {
    console.log("child comp re render again");
  return (
    <div>
        <button onClick={props.handleClick}>{props.buttonName}</button>
    </div>
  )
}

export default childA