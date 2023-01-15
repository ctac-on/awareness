import React from 'react'
import Popup from 'reactjs-popup'

import { useAppSelector, useAppDispatch } from '../../Hooks/redux'
import { setOpenModalRingModal, setOpenModalRules } from '../../Store/reducers'

import './ModalBackRing.sass'
import InputField from '../InputField'
import FormButton from '../FormButton'

function ModalBackRing() {
  const dispatch = useAppDispatch()
  const { openModalBackRing } = useAppSelector((state) => state.app)

  function onClose() {
    dispatch(setOpenModalRingModal(false))
  }

  function handleClickButtonRules() {
    dispatch(setOpenModalRules())
  }

  return (
    <Popup
      open={openModalBackRing}
      modal
      closeOnDocumentClick
      onClose={onClose}
    >
      <div className='ModalBackRing'>
        <div className='ModalBackRing__top'>
          <div className='ModalBackRing__top-text'>
            Заказать обратный звонок
          </div>
          <button className='ModalBackRing__top-close' onClick={onClose}>
            <></>
          </button>
        </div>{' '}
        <div className='ModalBackRing__main'>
          <InputField type={'text'} id={'ringName'} name={'name'}>
            Имя
          </InputField>
          <InputField type={'tel'} id={'ringTel'} name={'tel'}>
            Телефон
          </InputField>
          <InputField type={'text'} id={'ringTheme'} name={'theme'}>
            Тема
          </InputField>
        </div>
        <div className='ModalBackRing__bottom'>
          <FormButton>Отправить</FormButton>
          <button
            className='MainTop__form-rules ModalBackRing__bottom-rule'
            onClick={handleClickButtonRules}
          >
            Нажимая кнопку, вы даете согласие на{' '}
            <span>обработку персональных данных</span>
          </button>
        </div>
      </div>
    </Popup>
  )
}

export default ModalBackRing
