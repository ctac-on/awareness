import React from 'react'

import './MainWork.sass'

function MainWork() {
  return (
    <section className='MainWork'>
      <h2 className='MainWork__title'>Как мы работаем</h2>
      <div className='container'>
        <div className='MainWork__block'>
          <div className='MainWork__block-el MainWork__block-el_left'>
            Вы оставляете заявку на сайте, по телефону или электронной почте
            <div className='MainWork__block-el-bull MainWork__block-el-bull_right'>
              <i className='fa-solid fa-check'></i>
            </div>
          </div>
          <div className='MainWork__block-line MainWork__block-line_top'></div>
          <div className='MainWork__block-hidEl'></div>
        </div>
        <div className='MainWork__block'>
          <div className='MainWork__block-hidEl'></div>
          <div className='MainWork__block-line'></div>
          <div className='MainWork__block-el MainWork__block-el_right'>
            Менеджер связывается с вами и отправляет вам каталог и условия
            сотрудничества
            <div className='MainWork__block-el-bull MainWork__block-el-bull_left'>
              <i className='fa-solid fa-check'></i>
            </div>
          </div>
        </div>
        <div className='MainWork__block'>
          <div className='MainWork__block-el MainWork__block-el_left'>
            Вы выбираете подходящие приборы и оплачиваете заказ
            <div className='MainWork__block-el-bull MainWork__block-el-bull_right'>
              <i className='fa-solid fa-check'></i>
            </div>
          </div>
          <div className='MainWork__block-line'></div>
          <div className='MainWork__block-hidEl'></div>
        </div>
        <div className='MainWork__block'>
          <div className='MainWork__block-hidEl'></div>
          <div className='MainWork__block-line MainWork__block-line_bottm'></div>
          <div className='MainWork__block-el MainWork__block-el_right'>
            Мы отправляем ваш заказ через ТК или вы забираете его самостоятельно
            <div className='MainWork__block-el-bull MainWork__block-el-bull_left'>
              <i className='fa-solid fa-check'></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainWork
