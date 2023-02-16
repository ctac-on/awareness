import React from 'react'
import { NavLink } from 'react-router-dom'

import pagesItems from '../../Store/pagesItems'

import './MainProduction.sass'

import statfax from '../../Assets/img/statfax-4500.png'
import chemwell from '../../Assets/img/chemwell2.png'
import parma from '../../Assets/img/parma0616.png'

function MainProduction() {
  const img = [statfax, chemwell, parma]

  return (
    <section className='MainProduction' id='prod'>
      <div className='container'>
        <h2 className='MainProduction__title'>Продукция</h2>
        <div className='row'>
          {pagesItems.map((el, index) => (
            <div className='col-lg-4' key={el.title}>
              <div className='MainProduction__el'>
                <div className='MainProduction__el-img'>
                  <img src={img[index]} alt='statfax' />
                </div>
                <NavLink to={el.link} className='MainProduction__el-link'>
                  {el.title}
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainProduction
