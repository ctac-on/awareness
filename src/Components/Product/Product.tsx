import * as React from 'react'
import { useEffect, useState } from 'react'
import { fetchProductType, startFetchingProduct } from '../../Store/reducers'
import { useAppSelector } from '../../Hooks/redux'
import TypeQueries from '../../Models/TypeRequest'
import TypeDataProduct from '../../Models/TypeDataProduct'
import { useDispatch } from 'react-redux'

import Breadcrumbs from '../Breadcrumbs'
import Loader from '../Loader/Loader'

import './Product.sass'

type ProductProps = {
  title: string
  id: string
  type?: string
}

const Product: React.FC<ProductProps> = ({ title, id, type }) => {
  const [indexVariant, setIndexVariant] = useState(0)

  const dispatch = useDispatch()
  const productData = useAppSelector(
    (state) => state.requests.queries?.[fetchProductType],
  ) as TypeQueries<TypeDataProduct>
  const content = productData?.data?.commerceProductById

  useEffect(() => {
    dispatch(startFetchingProduct({ id, type }))
    window.scrollTo(0, 0)
  }, [id])
  return (
    <div className='container'>
      <Breadcrumbs />
      <h1 className='Product__title'>{title}</h1>
      {!productData?.pending ? (
        <main>
          <section className='Product__main'>
            <div className='Product__main-img'>
              <img
                src={
                  content?.variations?.[indexVariant].entity.fieldImgs[0].entity
                    .thumbnail.derivative.url
                }
                alt={title}
              />
            </div>
            <div className='Product__main-description'>
              <h2 className='Product__main-description-title'>Описание</h2>
              <p className='Product__main-description-intro'>
                {content?.fieldIntrotext}
              </p>
              <ul className='Product__main-description-list'>
                {content?.fieldIntroprops?.map((el) => (
                  <li className='Product__main-description-list-li' key={el}>
                    {el}
                  </li>
                ))}
              </ul>
              <h2 className='Product__main-description-title'>Варианты</h2>
              <div className='Product__main-description-variants'>
                {content?.variations?.map((el, index) => (
                  <div
                    className={`Product__main-description-variants-item ${
                      indexVariant === index &&
                      'Product__main-description-variants-item_active'
                    }`}
                    onClick={() => setIndexVariant(index)}
                  >
                    {el.entity.entityLabel}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <h3 className='Product__subTitle'>СПЕЦИФИКАЦИИ</h3>
          <div className='Product__table'>
            {Object.entries(
              content?.variations?.[indexVariant]?.entity?.fieldTable?.value ??
                {},
            ).map(
              ([key, value]) =>
                Array.isArray(value) && (
                  <>
                    <div className='Product__table-row-title'>{value[0]}</div>
                    <div className='Product__table-row-text'>{value[1]}</div>
                  </>
                ),
            )}
          </div>
        </main>
      ) : (
        <Loader height={500} />
      )}
    </div>
  )
}

export default Product
