import * as React from 'react'
import { useLocation } from 'react-router-dom'

import TypePagesItems from '../../Models/TypePagesItems'

import './MenuListItems.sass'
import { NavLink } from 'react-router-dom'

type MenuListItemsProps = {
  items?: TypePagesItems[]
  breadcrumbs: TypePagesItems[]
}

function MenuListItems({ items, breadcrumbs }: MenuListItemsProps) {
  const { pathname } = useLocation()
  const isOpen = (link: string) =>
    breadcrumbs.findIndex((el) => el.link === link) > -1
  const isThisPage = (link: string) => pathname === link

  return (
    <div className='MenuListItems'>
      {!!items?.length &&
        items.map((el) => (
          <div className='MenuListItems__wrapper' key={el.title}>
            <NavLink to={el.link} className='MenuListItems__el'>
              {el.title}
              {!!el.children?.length && !isThisPage(el.link) && (
                <i
                  className={`fas fa-caret-${
                    isOpen(el.link) ? 'down' : 'right'
                  }`}
                ></i>
              )}
            </NavLink>
            {!isThisPage(el.link) && isOpen(el.link) && (
              <div className='MenuListItems__children'>
                <MenuListItems breadcrumbs={breadcrumbs} items={el.children} />
              </div>
            )}
          </div>
        ))}
    </div>
  )
}

export default MenuListItems
