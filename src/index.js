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
        viewer: this.state.viewer,
        logIn: this.logIn,
        logOut: this.logOut
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
    return this.state.viewer ? (
<React.Fragment>
     <h3>Logged in as: {this.state.viewer}</h3>
     <button onClick={this.logOut}>Log Out</button>
</React.Fragment>
   ) : (
<React.Fragment>
    <input placeholder="Log in" ref={r => this.inputRef = r} />
    <button type="submit" onClick={() => {
      this.logIn(this.inputRef.value)
    } }>Log in</button>
</React.Fragment>
   )
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
      <Nav />
    </Wrapper>
  </Provider>
)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
