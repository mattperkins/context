import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import styled, {injectGlobal} from 'styled-components'
import Family from './Family'


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

// make a new context
const myContext = React.createContext()

// create a provider component 
class MyProvider extends Component {
  state = {
  name: 'Fred',
  age: 34,
  city: 'LA'
 }
  render() {
  return (
   
  )
 }
}


// main ("ROOT") component 
export default class Root extends Component {

// MAIN COMPONENT RENDER
render() {

// MAIN COMPONENT RETURN
return (

<Wrapper>

<Family name={this.state.name}/>

</Wrapper>

)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
