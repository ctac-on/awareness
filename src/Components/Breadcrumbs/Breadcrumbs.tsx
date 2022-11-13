import * as React from 'react'
import { useAppSelector, useAppDispatch } from '../../Hooks/redux'
import { useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'

import { setBreadcrumbs } from '../../Store/reducers'
import addBreadcrumbs from '../../Utils/addBreadcrumbs'

import './Breadcrumbs.sass'

const Breadcrumbs = () => {
  const dispatch = useAppDispatch()
  const { treePage, breadcrumbs } = useAppSelector((state) => state.app)
  const { pathname } = useLocation()
  const lastIndex = pathname.lastIndexOf('/')
  const editPathname =
    lastIndex === pathname.length - 1 ? pathname.slice(0, lastIndex) : pathname

  function upperFirstSymbol(str: string) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
  }

  useEffect(() => {
    dispatch(setBreadcrumbs(addBreadcrumbs(treePage, editPathname).reverse()))
  }, [treePage, editPathname])

  return (
    <div className='Breadcrumbs'>
      {breadcrumbs.map((el) => (
        <div className='Breadcrumbs__itemWrapper' key={el.title}>
          {el.link.toLowerCase() === editPathname.toLowerCase() ? (
            <div className='Breadcrumbs__item'>
              {upperFirstSymbol(el.title)}
            </div>
          ) : (
            <>
              <Link to={el.link} className='Breadcrumbs__item'>
                {upperFirstSymbol(el.title)}
              </Link>
              <span> / </span>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default Breadcrumbs
