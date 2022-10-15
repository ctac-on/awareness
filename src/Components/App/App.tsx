import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from '../Header'
import Main from '../Main'
import ModalRules from '../ModalRules'
import Footer from '../Footer'

import store from '../../Store'

import './App.sass'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store} key='provider'>
        <Header />
        <Routes>
          <Route path={'/'}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
        <Footer />
        <ModalRules />
      </Provider>
    </BrowserRouter>
  )
}

export default App
