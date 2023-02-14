import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../Hooks/redux'

import InputField from '../InputField'

import { setOpenModalRules } from '../../Store/reducers'

import './MainTop.sass'
import FormButton from '../FormButton'
import TypeQueries from '../../Models/TypeRequest'
import { TypeDataForm } from '../../Models/TypeDataForm'
import {
  fetchingFormAction,
  fetchingFormType,
  postFormAction,
  postFormType,
} from '../../Store/reducers/form'
import Loader from '../Loader/Loader'

const LIST_ITEMS = [
  <>
    <span>Stat Fax</span> и <span>ChemWell</span> биохимические анализаторы
  </>,
  <>
    <span>Stat Fax</span> и <span>ChemWell</span> иммуноферментные анализаторы
  </>,
  <>
    <span>Парма Диагностика</span> биохимические реактивы
  </>,
  <>
    Гарантийное, сервисное и методическое <span>сопровождение</span>
  </>,
]

function MainTop() {
  const formName = 'price'
  const [formValues, setFormValues] = useState<Record<string, string>>({
    webform_id: formName,
  })
  const dispatch = useAppDispatch()
  const dataResponse: TypeQueries<TypeDataForm[]> | undefined = useAppSelector(
    (state) => state.requests.queries?.[fetchingFormType + formName],
  )
  const dataMutation: TypeQueries<unknown> | undefined = useAppSelector(
    (state) => state.requests.mutations?.[postFormType + formName],
  )

  const isButtonDisabled = dataResponse?.data?.every(
    (item) => formValues[item.id],
  )

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

  function handleClickButtonRules() {
    dispatch(setOpenModalRules())
  }

  useEffect(() => {
    dispatch(fetchingFormAction(formName))
  }, [])

  return (
    <section className='MainTop'>
      <h1 className='MainTop__title'>Awareness Technology</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <ul className='MainTop__list'>
              {LIST_ITEMS.map((el, index) => (
                <li className='MainTop__list-item' key={index}>
                  <i className='fas fa-check MainTop__list-item-icon'></i>
                  <div>{el}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-md-5 offset-md-1'>
            <div className='MainTop__form'>
              <div className='MainTop__form-title'>
                Заполните форму и получите <span>прайс-лист</span>{' '}
                {new Date().getFullYear()}г.
              </div>
              {dataMutation?.pending !== 0 ? (
                <div className='MainTop__form-block'>
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
                  <FormButton
                    onClick={onClickSendButton}
                    disabled={!isButtonDisabled}
                  >
                    Получить прайс-лист
                  </FormButton>
                  <button
                    className='MainTop__form-rules'
                    onClick={handleClickButtonRules}
                  >
                    Нажимая кнопку, вы даете согласие на{' '}
                    <span>обработку персональных данных</span>
                  </button>
                </div>
              ) : (
                <div className='MainTop__form-title'>
                  Ваша заявка отправлена
                </div>
              )}
              {!!dataMutation?.pending && (
                <div className='ModalBackRing__layout'>
                  <Loader />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainTop
