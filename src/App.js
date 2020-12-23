import './App.css';
import React from 'react'
import GlobalStyle from 'styles'
import { Provider } from 'react-redux'
import store from 'store'
import Routes from './routes'
import './App.css';


const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
  
)

export default App

