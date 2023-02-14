import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'

import InputField from '../InputField'
import FormButton from '../FormButton'

import { useAppSelector, useAppDispatch } from '../../Hooks/redux'
import { setOpenModalRingModal, setOpenModalRules } from '../../Store/reducers'
import {
  fetchingFormAction,
  fetchingFormType,
  postFormAction,
  postFormType,
} from '../../Store/reducers/form'
import TypeQueries from '../../Models/TypeRequest'
import { TypeDataForm } from '../../Models/TypeDataForm'

import './ModalBackRing.sass'
import Loader from '../Loader/Loader'

function ModalBackRing() {
  const formName = 'backring'
  const [formValues, setFormValues] = useState<Record<string, string>>({
    webform_id: formName,
  })
  const dispatch = useAppDispatch()
  const { openModalBackRing } = useAppSelector((state) => state.app)
  const dataResponse: TypeQueries<TypeDataForm[]> | undefined = useAppSelector(
    (state) => state.requests.queries?.[fetchingFormType + formName],
  )
  const dataMutation: TypeQueries<unknown> | undefined = useAppSelector(
    (state) => state.requests.mutations?.[postFormType + formName],
  )

  const isButtonDisabled = dataResponse?.data?.every(
    (item) => formValues[item.id],
  )

  function onClose() {
    dispatch(setOpenModalRingModal(false))
  }

  function handleClickButtonRules() {
    dispatch(setOpenModalRules())
  }

  const setValueFromInput = (paramName: string) => {
    return (value: string) => {
      setFormValues((prevState) => ({
        ...prevState,
        [paramName]: value,
      }))
    }
  }

  const onClickSendButton = () => {
    if (isButtonDisabled) {
      dispatch(
        postFormAction({ formData: JSON.stringify(formValues), formName }),
      )
    }
  }

  useEffect(() => {
    dispatch(fetchingFormAction(formName))
  }, [])

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
        </div>
        {dataMutation?.pending !== 0 ? (
          <>
            <div className='ModalBackRing__main'>
              {dataResponse?.data?.map(({ type, id, title }) => (
                <InputField
                  type={type}
                  id={id}
                  name={id}
                  key={id}
                  onChange={setValueFromInput(id)}
                  value={formValues?.[id]}
                >
                  {title}
                </InputField>
              ))}
            </div>
            <div className='ModalBackRing__bottom'>
              <FormButton
                disabled={!isButtonDisabled}
                onClick={onClickSendButton}
              >
                Отправить
              </FormButton>
              <button
                className='MainTop__form-rules ModalBackRing__bottom-rule'
                onClick={handleClickButtonRules}
              >
                Нажимая кнопку, вы даете согласие на{' '}
                <span>обработку персональных данных</span>
              </button>
            </div>
          </>
        ) : (
          <div className='ModalBackRing__top-text ModalBackRing__top-text_def'>
            Форма отправлена. В ближайшее время с вами свяжется наш менеджер.
          </div>
        )}
        {!!dataMutation?.pending && (
          <div className='ModalBackRing__layout'>
            <Loader />
          </div>
        )}
      </div>
    </Popup>
  )
}

export default ModalBackRing
