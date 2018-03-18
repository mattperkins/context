import React from 'react'

export default ({name}) => (
  <MyContext.Consumer>
    {(context) => (
    <p>{name}</p>
  )}
  </MyContext.Consumer>
)
