import React from 'react'

import './MainCollaboration.sass'
import { useAppDispatch } from '../../Hooks/redux'
import { setOpenModalRules } from '../../Store/reducers'

function MainCollaboration() {
  const dispatch = useAppDispatch()

  function handleClickButtonRules() {
    dispatch(setOpenModalRules())
  }
  return (
    <section className='MainCollaboration'>
      <div className='container'>
        <div className='MainCollaboration__title'>
          Получите коммерческое предложение
        </div>
        {/*<div className='MainCollaboration__subTitle'>*/}
        {/*  Совместная работа обеспечивает{' '}*/}
        {/*  <span className='MainCollaboration__subTitle-span'>*/}
        {/*    уверенность в будущем*/}
        {/*  </span>*/}
        {/*  <br /> Компания Мед.Гарант всегда с вами*/}
        {/*</div>*/}
        {/*<div className='MainCollaboration__formTitle'>*/}
        {/*  Получите коммерческое предложение*/}
        {/*</div>*/}
        <div className='MainCollaboration__form'>
          <input
            type='text'
            required
            className='MainCollaboration__form-input'
            placeholder={'Компания'}
          />
          <input
            type='email'
            required
            className='MainCollaboration__form-input'
            placeholder={'Электронная почта'}
          />
          <button className='o-button-fullColor MainCollaboration__form-button'>
            Получить прайс-лист
          </button>
        </div>
        <button
          className='MainCollaboration__rules'
          onClick={handleClickButtonRules}
        >
          Нажимая кнопку, вы даете согласие на{' '}
          <span>обработку персональных данных</span>
        </button>
      </div>
    </section>
  )
}

export default MainCollaboration
