import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { gql } from '@redux-requests/graphql'

export const startFetchingMenu = createAction('app/startFetchingMenu')

export const fetchMenuType = 'app/fetchMenuType'

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
