import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Wrapper from '../Wrapper'

import store from '../../Store'

import './App.sass'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store} key='provider'>
        <Wrapper />
      </Provider>
    </BrowserRouter>
  )
}

export default App
