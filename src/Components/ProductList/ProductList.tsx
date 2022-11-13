import * as React from 'react'

import TypePagesItems from '../../Models/TypePagesItems'

import './ProductList.sass'
import { Link } from 'react-router-dom'

type ProductListProps = {
  title: string
  items?: TypePagesItems[]
}

function ProductList({ title, items }: ProductListProps) {
  return (
    <div className='ProductList'>
      <h2 className='ProductList__title'>{title}</h2>
      <div className='ProductList__main'>
        {!!items?.length &&
          items.map((el) => (
            <div className='ProductList__main-item' key={el.title}>
              <div className='ProductList__main-item-top'>
                <div className='ProductList__main-item-img'>
                  <img src={el.productOptions?.img} alt={el.title} />
                </div>
                <div className='ProductList__main-item-title'>{el.title}</div>
              </div>
              <div className='ProductList__main-item-bottom'>
                <Link
                  to={el.link}
                  className='o-button-fullColor ProductList__main-item-btn'
                >
                  подробнее
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProductList
