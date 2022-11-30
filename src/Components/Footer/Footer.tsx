import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

import './Footer.sass'

function Footer() {
  return (
    <footer className='Footer' id='contact'>
      <div className='container Footer'>
        <div className='row align-items-center'>
          <div className='col-md-4'>
            <div className='Footer__companyName'>Awareness Technology</div>
            <p className='Footer__adress'>
              194044, г. Санкт-Петербург, Выборгская наб., 29
              <span className='Footer__adress-item'>
                Телефон: +7 (812) 324-27-78
              </span>
              <span className='Footer__adress-item'>
                Почта: info@awareness-mg.ru
              </span>
            </p>
          </div>
          <div className='col-md-7 offset-md-1 Footer__map'>
            <YMaps>
              <Map
                width={'100%'}
                height={'350px'}
                defaultState={{ center: [59.968147, 30.337995], zoom: 16 }}
              >
                <Placemark geometry={[59.968147, 30.337995]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
