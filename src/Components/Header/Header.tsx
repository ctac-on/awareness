import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../Hooks/redux'
import { startFetchingMenu, fetchMenuType } from '../../Store/reducers'
import TypeQueries from '../../Models/TypeRequest'
import TypeDataMenu from '../../Models/TypeDataMenu'
import { HALF_OF_PATH } from '../../Store/constant'

import logo from '../../Assets/img/awareness.jpg'

import './Header.sass'

const Header = () => {
  const dispatch = useAppDispatch()
  const [openBar, setOpenBar] = useState(false)

  const dataMenu = useAppSelector(
    (state) => state.requests?.queries?.[fetchMenuType],
  ) as TypeQueries<TypeDataMenu> | undefined
  const itemsMenu = dataMenu?.data?.menuByName?.links

  function handleClickBar() {
    setOpenBar(!openBar)
  }

  useEffect(() => {
    dispatch(startFetchingMenu())
  }, [])

  return (
    <header>
      <div className='Header'>
        <div className='Header__top'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 Header__top-block'>
                <a
                  href='mailto:info@awarness-mg.ru'
                  className='Header__top-block-link'
                >
                  <i className='far fa-envelope'></i> info@awarness-mg.ru
                </a>
                <a href='tel:+78123242778' className='Header__top-block-link'>
                  <i className='fas fa-phone'></i> +7 812 324-27-78
                </a>
                <span className='Header__top-block-text'>
                  Пн-Пт 09:00-17:00(СПб)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='Header__bottom'>
          <div className='container'>
            <div className='row justify-content-between align-items-center'>
              <div className='col-5 col-md-3 header-bottom__logo-wrap'>
                <NavLink className='Header__bottom-logo' to='/'>
                  <img
                    alt='logo'
                    src={logo}
                    className='Header__bottom-logo-img'
                  />
                </NavLink>
              </div>
              <div className='col-6 Header__bottom-bar'>
                <i
                  className={`${openBar ? 'fas fa-times' : 'fas fa-bars'}`}
                  onClick={handleClickBar}
                ></i>
              </div>
              <div
                className={`col-12 col-lg-9 Header__bottom-nav${
                  openBar ? '-open' : ''
                }`}
              >
                <div className='row align-items-center'>
                  <div className='col-12 col-lg-9'>
                    {!!itemsMenu?.length &&
                      itemsMenu.map((el) => (
                        <li key={el.label} className='Header__bottom-nav-li'>
                          <a
                            className='Header__bottom-nav-link'
                            href={el?.url?.path?.replace(HALF_OF_PATH, '')}
                          >
                            {el.label}
                          </a>
                        </li>
                      ))}
                  </div>
                  <div className='col-12 col-lg-3 Header__bottom-call'>
                    <button className='o-button-fullColor Header__bottom-call-button'>
                      <i className='fas fa-phone-alt Header__bottom-call-icon'></i>
                      Обратный звонок
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
