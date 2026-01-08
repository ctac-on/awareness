import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { useAppDispatch, useAppSelector } from '../../Hooks/redux'
import { NavLink } from 'react-router-dom'

import {
  startFetchingRecommended,
  fetchRecommendedItemType,
} from '../../Store/reducers'

import './MainRecommended.sass'
import TypeRequest from '../../Models/TypeRequest'
import TypeDataRecommendedItem from '../../Models/TypeDataRecommendedItem'
import numberFormat from '../../Utils/number-format'
import getCurrencyIcon from '../../Utils/get-currency-icon'

function MainRecommended() {
  const dispatch = useAppDispatch()
  const dataApi = useAppSelector(
    (state) => state.requests?.queries?.[fetchRecommendedItemType],
  ) as TypeRequest<TypeDataRecommendedItem[]>

  useEffect(() => {
    dispatch(startFetchingRecommended())
  }, [])

  return (
    <section className='MainRecommended'>
      <div className='container'>
        <h2 className='MainRecommended__title'> Рекомендуем</h2>
      </div>
      <div>
        <Slider
          dots
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          className='MainRecommended__slider'
        >
          {!!dataApi?.data?.length &&
            dataApi.data.map((el) => (
              <div
                className='MainRecommended__item-wrap'
                key={el.commerceProductVariationById.entityLabel}
              >
                <div className='MainRecommended__item'>
                  <div className='MainRecommended__item-block'>
                    <div className='MainRecommended__item-block-left'>
                      <NavLink
                        className='MainRecommended__item-link'
                        to={
                          el.commerceProductVariationById.productId.entity.path
                            .alias
                        }
                      >
                        <h4 className='MainRecommended__item-title'>
                          {
                            el.commerceProductVariationById.productId.entity
                              .entityLabel
                          }
                        </h4>
                      </NavLink>
                      <p className='MainRecommended__item-text'>
                        {
                          el.commerceProductVariationById.productId.entity
                            .fieldIntrotext
                        }
                        <br />
                        <span className='MainRecommended__item-text_s'>
                          Вариант: {el.commerceProductVariationById.entityLabel}
                        </span>
                      </p>
                      <ins className='MainRecommended__item-price'>
                        {numberFormat(
                          el.commerceProductVariationById.price.number,
                        )}{' '}
                        {getCurrencyIcon({
                          alphaCodeISOCurrency:
                            el.commerceProductVariationById.price.currencyCode,
                        })}
                      </ins>
                      <div className='MainRecommended__item-smallText'></div>
                    </div>
                    <div className='MainRecommended__item-imgWrap'>
                      <img
                        className='MainRecommended__item-img'
                        src={
                          el.commerceProductVariationById.fieldImgs[0].entity
                            .thumbnail.derivative.url
                        }
                        alt={
                          el.commerceProductVariationById.productId.entity
                            .entityLabel
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  )
}

export default MainRecommended
