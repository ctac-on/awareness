import {
  takeLatest,
  putResolve,
  select,
  fork,
  put,
  call,
} from 'redux-saga/effects'
import {
  requestTree,
  startFetchingTree,
  setTree,
  requestTreeProduct,
} from '../../reducers'
import { RootState } from '../../index'
import TypeDataTreeAPI from '../../../Models/TypeDataTreeAPI'
import TypePagesItems from '../../../Models/TypePagesItems'
import TypeDataTreeProductAPI from '../../../Models/TypeDataTreeProductAPI'

function* resolveTreeSaga(dataTree: TypePagesItems[]): any {
  for (let i = 0; i < dataTree.length; i++) {
    if (dataTree[i].type === 'categoryList') {
      const { data }: { data: TypeDataTreeAPI } = yield putResolve(
        requestTree(dataTree[i].id, dataTree[i].nodeType),
      )

      const elData = data?.nodeById?.queryFieldRef?.entities

      if (elData?.length) {
        const children: TypePagesItems[] = []

        elData.forEach((el) => {
          const type = el.fieldRef?.length ? 'categoryList' : 'productList'

          children.push({
            title: el.entityLabel,
            id: el.entityId,
            type: type,
            link: el.path.alias,
            nodeType: 'categoryList',
            tid: dataTree[i].tid,
            entityBundle: el.fieldRefProduct?.[0].entity.entityBundle,
          })
        })

        dataTree[i] = {
          ...dataTree[i],
          children: children,
        }

        yield fork(resolveTreeSaga, dataTree[i].children ?? [])
      }
    } else if (dataTree[i].type === 'productList') {
      const { data }: { data: TypeDataTreeProductAPI } = yield putResolve(
        requestTreeProduct(
          dataTree[i].id,
          dataTree[i].tid,
          dataTree[i].entityBundle,
        ),
      )

      const elData = data?.nodeById?.queryFieldRefProduct?.entities

      if (elData?.length) {
        const children: TypePagesItems[] = []

        elData.forEach((el) => {
          children.push({
            title: el.entityLabel,
            id: el.entityId,
            type: 'product',
            link: el.path.alias,
            nodeType: 'categoryList',
            tid: dataTree[i].tid,
            productOptions: {
              img: el.fieldImg[0].entity.thumbnail.derivative.url,
            },
          })
        })

        dataTree[i] = {
          ...dataTree[i],
          children: children,
        }
      }
    }
  }
}

function* loadTreeSaga() {
  const { treePage }: RootState['app'] = yield select(
    (state: RootState) => state.app,
  )
  const copyTree = treePage.concat() as TypePagesItems[]

  yield call(resolveTreeSaga, copyTree)

  yield put(setTree(copyTree))
}

export default function* rootSagaTree() {
  yield takeLatest(startFetchingTree, loadTreeSaga)
}
