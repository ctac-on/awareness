import React from 'react'

import './MainBenefits.sass'

function MainBenefits() {
  const data = [
    {
      title: 'Уникальная продукция',
      text: 'Аналтзаторы Awareness в наличии и поз заказ',
    },
    {
      title: 'Собственное производство',
      text: 'Скидки торгующим организациям и оптовым покупателям',
    },
    {
      title: 'Доставка',
      text: 'Доставка по России в течение 7 - 14 дней',
    },
    {
      title: 'Сопровождение',
      text: 'Пуско-наладочные работы и обучение персонала',
    },
  ]

  return (
    <section className='MainBenefits'>
      <div className='container'>
        {/*<h2 className='MainBenefits__title'>Преимущества работы с нами</h2>*/}
        <div className='row'>
          {data.map((name, id) => (
            <div className='col-md-6 MainBenefits__item-wrapper' key={id}>
              <div className='MainBenefits__item'>
                <p className='MainBenefits__item-text'>{name.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainBenefits
