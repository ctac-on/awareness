import React, { useEffect, useState } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

import './Footer.sass'
import { useAppDispatch, useAppSelector } from '../../Hooks/redux'
import TypeQueries from '../../Models/TypeRequest'
import { TypeDataForm } from '../../Models/TypeDataForm'
import {
  fetchingFormAction,
  fetchingFormType,
  postFormAction,
  postFormType,
} from '../../Store/reducers/form'
import InputField from '../InputField'
import FormButton from '../FormButton'
import Loader from '../Loader/Loader'

function Footer() {
  const formName = 'feedback'
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

  useEffect(() => {
    dispatch(fetchingFormAction(formName))
  }, [])

  return (
    <footer className='Footer' id='contact'>
      <div className='container Footer'>
        <div className='row align-items-center'>
          <div className='col-lg-4'>
            <div className='Footer__companyName'>Awareness Technology</div>
            <p className='Footer__adress'>
              196128, г. Санкт-Петербург, ул. Кузнецовская, 13
              <span className='Footer__adress-item'>
                Телефон: +7 (812) 324-27-78
              </span>
              <span className='Footer__adress-item'>
                Почта: info@awareness-mg.ru
              </span>
            </p>
            <div className='Footer__companyName'>ОСТАЛИСЬ ВОПРОСЫ?</div>
            <p className='Footer__adress'>Оставьте заявку на консультацию</p>
            <div className='Footer__form'>
              {dataMutation?.pending !== 0 ? (
                <>
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
                  <div className='Footer__form-button'>
                    <FormButton
                      disabled={!isButtonDisabled}
                      onClick={onClickSendButton}
                    >
                      Отправить
                    </FormButton>
                  </div>
                </>
              ) : (
                <div className='Footer__adress'>Ваша заявка отправлена</div>
              )}
              {!!dataMutation?.pending && (
                <div className='ModalBackRing__layout'>
                  <Loader />
                </div>
              )}
            </div>
          </div>
          <div className='col-lg-7 offset-lg-1 Footer__map'>
            <YMaps>
              <Map
                width={'100%'}
                height={'670px'}
                defaultState={{ center: [59.8714, 30.314557], zoom: 16 }}
              >
                <Placemark geometry={[59.8714, 30.314557]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
