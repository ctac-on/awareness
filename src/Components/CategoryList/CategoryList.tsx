import * as React from 'react'

import TypePagesItems from '../../Models/TypePagesItems'

import './CategoryList.sass'
import { Link } from 'react-router-dom'

type CategoryListProps = {
  items?: TypePagesItems[]
}

function CategoryList({ items }: CategoryListProps) {
  return (
    <div className='CategoryList'>
      {!!items?.length &&
        items.map((el) => (
          <Link to={el.link} key={el.title} className='CategoryList__item'>
            {el.title}
          </Link>
        ))}
    </div>
  )
}

export default CategoryList
