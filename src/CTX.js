import React, {Component} from 'react'

const CTX = React.createContext()

export class Provider extends Component {
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

export const Consumer = CTX.Consumer