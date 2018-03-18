import React from 'react'

export default ({name}) => (
  <MyContext.Consumer>
    {(context) => (
    <React.Fragment>
     <p>{context.state.name}</p>
     <p>{context.state.age}</p>
    </React.Fragment>
  )}
  </MyContext.Consumer>
)
