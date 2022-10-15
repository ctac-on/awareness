export type TypeDataRecommendedFields = {
  entity: {
    entityId: string
    productId: {
      entity: {
        __typename: string
      }
    }
    __typename: string
  }
}

export default interface TypeDataRecommended {
  nodeById: {
    fieldTovar: TypeDataRecommendedFields[]
  }
}
