import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import styled, {injectGlobal} from 'styled-components'
import { Provider, Consumer } from './CTX'

//eslint-disable-next-line
injectGlobal`
body {
font-family: sans-serif;
background: #f7f7f7;
}
`
// styled components
const Wrapper = styled.div`
margin: 100px;
`


const Nav = () => <LoginForm />

class LoginForm extends Component {
  state = {}
  render() {
    return <Consumer>
      {(value) => {
        const { viewer } = value.state
        const { logIn, logOut } = value.actions
          return viewer ? (
<React.Fragment>
     <h3>Logged in as: {viewer}</h3>
     <button onClick={logOut}>Log Out</button>
</React.Fragment>
   ) : (
<React.Fragment>
    <input placeholder="Log in" ref={r => this.inputRef = r} />
    <button type="submit" onClick={() => {
      logIn(this.inputRef.value)
    } }>Log in</button>
</React.Fragment>
   )
    }}
</Consumer>
    
  }
}


// main ("ROOT") component 
export default class Root extends Component {

// MAIN COMPONENT RENDER
render() {

// MAIN COMPONENT RETURN
return (
  <Provider>
    <Wrapper>
      
      <Consumer>
        {({ state: { viewer } }) => (
          <h1>{viewer ? `Welcome ${viewer}!` : 'Please Log in'}</h1>
        )}
      </Consumer>

      <Nav />
      
    </Wrapper>
  </Provider>
)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
