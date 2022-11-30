import React from 'react'

import './MainBenefits.sass'

function MainBenefits() {
  const data = [
    {
      title: 'Уникальная продукция',
      text: 'Анализаторы ChemWell и StatFax в наличии и под заказ',
      class: 'fa fa-cubes',
    },
    {
      title: 'Собственное производство',
      text: 'Скидки торгующим организациям и оптовым покупателям',
      class: 'fa-solid fa-tags',
    },
    {
      title: 'Доставка',
      text: 'Доставка по России в течение 7 - 14 дней',
      class: 'fa fa-space-shuttle',
    },
    {
      title: 'Сопровождение',
      text: 'Пуско-наладочные работы и обучение персонала',
      class: 'fa-solid fa-gears',
    },
  ]

  return (
    <section className='MainBenefits' id='cooperation'>
      <div className='container'>
        {/*<h2 className='MainBenefits__title'>Преимущества работы с нами</h2>*/}
        <div className='row'>
          {data.map((name, id) => (
            <div className='col-md-6 MainBenefits__item-wrapper' key={id}>
              <div className='MainBenefits__item'>
                <i
                  className={`${name.class} MainBenefits__item-icon`}
                  aria-hidden='true'
                ></i>
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
