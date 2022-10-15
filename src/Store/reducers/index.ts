import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { gql } from '@redux-requests/graphql'
import { TypeDataRecommendedFields } from '../../Models/TypeDataRecommended'

export const startFetchingMenu = createAction('app/startFetchingMenu')
export const startFetchingRecommended = createAction(
  'app/startFetchingRecommended',
)

export const fetchMenuType = 'app/fetchMenuType'
export const fetchRecommendedType = 'app/fetchRecommendedType'
export const fetchRecommendedItemType = 'app/fetchRecommendedItemType'

export const requestMenu = () => ({
  type: fetchMenuType,
  request: {
    query: gql`
      {
        menuByName(name: "medvet") {
          links {
            label
            url {
              path
            }
          }
        }
      }
    `,
  },
})

export const requestRecommended = () => ({
  type: fetchRecommendedType,
  request: {
    query: gql`
      {
        nodeById(id: "29") {
          ... on NodeSpecialoffer {
            fieldTovar {
              entity {
                __typename
                entityId
                productId {
                  entity {
                    __typename
                  }
                }
              }
            }
          }
        }
      }
    `,
  },
})

export const requestRecommendedItem = (
  fields: TypeDataRecommendedFields[],
) => ({
  type: fetchRecommendedItemType,
  request: fields.map((el) => ({
    query: gql`
      {
        commerceProductVariationById(id: "${el.entity.entityId}") {
        ... on ${el.entity.__typename} {
          entityLabel
          attributeValyuta {
            entity {
                entityLabel
              }
          }
          fieldSpeccena
          fieldImgs {
            entity {
              thumbnail {
                derivative(style: BIG) {
                  url
                }
              }
            }
          }
          productId {
            entity {
              ... on ${el.entity.productId.entity.__typename} {
                entityLabel
                fieldIntrotext
                path {
                  alias
                }
              }
            }
          }
        }
      }
      }
    `,
  })),
})

interface InitialState {
  openModalRules: boolean
}

const initialState: InitialState = {
  openModalRules: false,
}

export const {
  reducer,
  actions: { setOpenModalRules },
} = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOpenModalRules(state) {
      state.openModalRules = !state.openModalRules
    },
  },
})

export default reducer
