import React from 'react'
import { useAppDispatch } from '../../Hooks/redux'
import MaskedInput from 'react-maskedinput'

import { setOpenModalRules } from '../../Store/reducers'

import './MainTop.sass'

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
  const dispatch = useAppDispatch()

  function handleClickButtonRules() {
    dispatch(setOpenModalRules())
  }

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
              <div className='MainTop__form-block'>
                <div className='MainTop__form-block-el'>
                  <label
                    className='MainTop__form-block-label'
                    htmlFor='mainCompanyName'
                  >
                    КОМПАНИЯ
                  </label>
                  <input
                    type='text'
                    required
                    className='MainTop__form-block-input'
                    id={'mainCompanyName'}
                  />
                </div>
                <div className='MainTop__form-block-el'>
                  <label
                    className='MainTop__form-block-label'
                    htmlFor='mainCompanyPhone'
                  >
                    НОМЕР ТЕЛЕФОНА
                  </label>
                  <MaskedInput
                    id='mainCompanyPhone'
                    mask='+7 (111) 111-11-11'
                    name='mainCompanyPhone'
                    type='tel'
                    className='MainTop__form-block-input'
                    required
                  />
                </div>
                <div className='MainTop__form-block-el'>
                  <label
                    className='MainTop__form-block-label'
                    htmlFor='mainCompanyEmail'
                  >
                    ЭЛЕКТРОННАЯ ПОЧТА
                  </label>
                  <input
                    type='email'
                    required
                    className='MainTop__form-block-input'
                    id={'mainCompanyEmail'}
                  />
                </div>
                <button className='o-button-fullColor MainTop__form-button'>
                  Получить прайс-лист
                </button>
                <button
                  className='MainTop__form-rules'
                  onClick={handleClickButtonRules}
                >
                  Нажимая кнопку, вы даете согласие на{' '}
                  <span>обработку персональных данных</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainTop
