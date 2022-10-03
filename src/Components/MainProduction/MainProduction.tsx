import React from 'react'
import { NavLink } from 'react-router-dom'

import './MainProduction.sass'

import statfax from '../../Assets/img/statfax-4500.png'
import chemwell from '../../Assets/img/chemwell2.png'
import parma from '../../Assets/img/parma0616.png'

function MainProduction() {
  return (
    <section className='MainProduction'>
      <div className='container'>
        <h2 className='MainProduction__title'>Продукция</h2>
        <div className='row'>
          <div className='col-md-4'>
            <div className='MainProduction__el'>
              <div className='MainProduction__el-img'>
                <img src={statfax} alt='statfax' />
              </div>
              <NavLink to={'/'} className='MainProduction__el-link'>
                Биохимические анализаторы
              </NavLink>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='MainProduction__el'>
              <div className='MainProduction__el-img'>
                <img src={chemwell} alt='chemwell' />
              </div>
              <NavLink to={'/'} className='MainProduction__el-link'>
                Иммуноферментный анализ
              </NavLink>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='MainProduction__el'>
              <div className='MainProduction__el-img'>
                <img src={parma} alt='parma' />
              </div>
              <NavLink to={'/'} className='MainProduction__el-link'>
                Реактивы
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainProduction
