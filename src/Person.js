import React from 'react'

export default ({name}) => (
  <MyContext.Consumer>
    {(context) => (
    <p>{context.state.age}</p>
  )}
  </MyContext.Consumer>
)
