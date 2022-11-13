export type TypeDataTreeAPIRef = {
  targetId: string
  entity: {
    entityBundle: string
    __typename: string
  }
}

export default interface TypeDataTreeAPI {
  nodeById: {
    queryFieldRef: {
      entities: {
        entityId: string
        entityLabel: string
        fieldRef: TypeDataTreeAPIRef[]
        fieldRefProduct: TypeDataTreeAPIRef[]
        path: {
          alias: string
        }
      }[]
    }
  }
}
