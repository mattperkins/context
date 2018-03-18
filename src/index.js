import React, {Component, CreateContext} from 'react'
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

const AppContext = createContext()

const { Provider, Consumer } = AppContext

const initialState = {
  users: [ 'Fred', 'Sandy', 'Bob' ]
}


// main ("ROOT") component 
export default class Root extends Component {

// MAIN COMPONENT RENDER
render() {

// MAIN COMPONENT RETURN
return (
 <Wrapper>

Hello
 </Wrapper>

)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
