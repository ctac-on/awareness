import * as React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import { useAppSelector } from '../../Hooks/redux'

import Main from '../Main'
import CategoryList from '../CategoryList'
import ProductList from '../ProductList'
import MainList from '../MainList'
import Product from '../Product'

import flatArray from '../../Utils/flatArray'

function AddRoutes() {
  const { treePage } = useAppSelector((state) => state.app)
  const tree = flatArray(treePage, 'children')
  const routes = useRoutes([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Main />,
        },
        ...tree.map((el) => ({
          path: el.link,
          element:
            el.type === 'product' ? (
              <Product />
            ) : el.type === 'categoryList' ? (
              <MainList tree={treePage}>
                <CategoryList items={el.children} />
              </MainList>
            ) : (
              <MainList tree={treePage}>
                <ProductList title={el.title} items={el.children} />
              </MainList>
            ),
        })),
      ],
    },
  ])

  return <>{routes}</>
}

export default AddRoutes
