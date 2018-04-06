import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import styled, {injectGlobal} from 'styled-components'

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

const CTX = React.createContext()
class Provider extends Component {
  state = {
  viewer: null
  }

  logIn = (name) => {
    this.setState({viewer: name})
  }

  logOut = () => {
    this.setState({
      viewer: null
    })
  }
  render() {
    return (
      <CTX.Provider value={{
        
        state: this.state,
        actions: {
          logIn: this.logIn,
          logOut: this.logOut
        }
        
      }}>
        {this.props.children}
      </CTX.Provider>
    )
  }
}

const Nav = () => <LoginForm />

class LoginForm extends Component {
  state = {}
  render() {
    return <CTX.Consumer>
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
</CTX.Consumer>
    
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
      
      <CTX.Consumer>
        {({ state: { viewer } }) => (
          <h1>{viewer ? `Welcome ${viewer}!` : 'Please Log in'}</h1>
        )}
      </CTX.Consumer>

      <Nav />
      
    </Wrapper>
  </Provider>
)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
