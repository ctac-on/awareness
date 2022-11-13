import * as React from 'react'
import { useAppSelector } from '../../Hooks/redux'
import { Link } from 'react-router-dom'

import Breadcrumbs from '../Breadcrumbs'
import MenuListItems from '../MenuListItems'

import TypePagesItems from '../../Models/TypePagesItems'

import './MainList.sass'

type MainListProps = {
  children?: React.ReactNode
  tree: TypePagesItems[]
}

function MainList({ children, tree }: MainListProps) {
  const { breadcrumbs } = useAppSelector((state) => state.app)
  const isThisEl = (link: string) => breadcrumbs[0]?.link === link

  return (
    <div className='container'>
      <Breadcrumbs />
      <section className='MainList'>
        <h1 className='MainList__title'>{breadcrumbs[0]?.title}</h1>
        <section className='MainList__main'>
          <div className='MainList__main-left'>
            <div className='MainList__menu'>
              {tree.map((el) => (
                <div className='MainList__menu-itemWrapper' key={el.title}>
                  <Link
                    to={el.link}
                    className={`MainList__menu-item ${
                      isThisEl(el.link) ? 'MainList__menu-item_active' : ''
                    }`}
                  >
                    {el.title}
                    <i
                      className={`fas fa-caret-${
                        isThisEl(el.link) && breadcrumbs.length > 1
                          ? 'down'
                          : 'right'
                      }`}
                    ></i>
                  </Link>
                  {isThisEl(el.link) && breadcrumbs.length > 1 && (
                    <MenuListItems
                      items={el.children}
                      breadcrumbs={breadcrumbs}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className='MainList__main-right'>{children}</div>
        </section>
      </section>
    </div>
  )
}

export default MainList
