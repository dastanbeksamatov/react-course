import React from 'react'

const Notification = ({message, type}) =>{

  const template = {
      background: 'lightgrey',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      align: 'center'
  }
  const style = type ? {...template, color:'green'}:{...template, color:'red'}

  if (message===null){
    return null
  }
  return(
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification;
