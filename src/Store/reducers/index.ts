import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { gql } from '@redux-requests/graphql'
import { TypeDataRecommendedFields } from '../../Models/TypeDataRecommended'
import TypePagesItems from '../../Models/TypePagesItems'
import pagesItems from '../pagesItems'

export const startFetchingMenu = createAction('app/startFetchingMenu')
export const startFetchingRecommended = createAction(
  'app/startFetchingRecommended',
)
export const startFetchingTree = createAction('app/startFetchingTree')

export const fetchMenuType = 'app/fetchMenuType'
export const fetchRecommendedType = 'app/fetchRecommendedType'
export const fetchRecommendedItemType = 'app/fetchRecommendedItemType'
export const fetchTreeType = 'app/fetchTree'

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

export const requestTree = (id: string, type: string) => ({
  type: fetchTreeType,
  request: {
    query: gql`
      {
        nodeById(id: "${id}") {
          ... on Node${type} {
              queryFieldRef (filter:{
                  conditions: [
                      {field: "field_direction", value: "1"}
                  ]
              }) {
                  entities {
                      ... on NodeCategory {
                          entityLabel
                          entityId
                          path {
                              alias
                          }
                          fieldRef {
                              targetId
                          }
                          fieldRefProduct {
                              targetId
                              entity {
                                  entityBundle
                              }
                          }
                      }
                  }
              }
          }
        }
      }
    `,
  },
  meta: {
    requestKey: id,
  },
})

export const requestTreeProduct = (
  id: string,
  tid: string,
  bundle?: string,
) => ({
  type: fetchTreeType,
  request: {
    query: gql`
       {
        nodeById(id: "${id}") {
          ... on NodeCategory {
              entityLabel
              fieldVetdescription
              entityUrl {
              ... on EntityCanonicalUrl {
                  breadcrumb {
                      text
                      url {
                        path
                      }
                    }
                  }
              }
              queryFieldRefProduct (filter:{
                  conditions: [
                      {field: "field_direction", value: "1"},
                      {field: "field_brands", value: "${tid}"}
                  ]
              }
              limit: 1000) {
                  entities {
                      ... on CommerceProduct${
                        bundle ? bundle[0].toUpperCase() + bundle.slice(1) : ''
                      } {
                          entityId
                          entityLabel
                          path {
                              alias
                          }
                          fieldImg {
                              entity {
                                  thumbnail {
                                      derivative(style: MEDIUM) {
                                        url
                                      }
                                  }
                              }
                          }
                          fieldBrands {
                            entity {
                              ... on TaxonomyTermBrands {
                                fieldLogo {
                                  entity {
                                    thumbnail {
                                      derivative(style: THUMBNAIL){
                                        url
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                      }
                  }
              }
          }
      }
}
    `,
  },
  meta: {
    requestKey: id,
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
  treePage: TypePagesItems[]
  breadcrumbs: TypePagesItems[]
  isFetching: boolean
}

const initialState: InitialState = {
  openModalRules: false,
  treePage: pagesItems,
  breadcrumbs: [],
  isFetching: true,
}

export const {
  reducer,
  actions: { setOpenModalRules, setTree, setBreadcrumbs },
} = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTree(state, action: PayloadAction<TypePagesItems[]>) {
      state.treePage = action.payload
      state.isFetching = false
    },
    setBreadcrumbs(state, action: PayloadAction<TypePagesItems[]>) {
      state.breadcrumbs = action.payload
    },
    setOpenModalRules(state) {
      state.openModalRules = !state.openModalRules
    },
  },
})

export default reducer
