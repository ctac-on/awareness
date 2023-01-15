import * as React from 'react'

import { useAppDispatch, useAppSelector } from '../../Hooks/redux'
import { useEffect } from 'react'

import { startFetchingTree } from '../../Store/reducers'

import Header from '../Header'
import AddRoutes from '../AddRoutes'
import Footer from '../Footer'
import ModalRules from '../ModalRules'
import Loader from '../Loader/Loader'
import ModalBackRing from '../ModalBackRing'

import './Wrapper.sass'

import logoWhite from '../../Assets/img/logoWhite.webp'

function Wrapper() {
  const dispatch = useAppDispatch()
  const isFetching = useAppSelector((state) => state.app.isFetching)

  useEffect(() => {
    dispatch(startFetchingTree())
  }, [])

  return (
    <>
      {!isFetching ? (
        <>
          <Header />
          <AddRoutes />
          <Footer />
          <ModalRules />
          <ModalBackRing />
        </>
      ) : (
        <div className='Wrapper'>
          <img src={logoWhite} alt={'logoWhite'} />
          <Loader height={300} />
        </div>
      )}
    </>
  )
}

export default Wrapper
