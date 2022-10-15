export default interface TypeDataRecommendedItem {
  commerceProductVariationById: {
    entityLabel: string
    attributeValyuta: {
      entity: {
        entityLabel: string
      }
    }
    fieldSpeccena: null | string
    fieldImgs: {
      entity: {
        thumbnail: {
          derivative: {
            url: string
          }
        }
      }
    }[]
    productId: {
      entity: {
        entityLabel: string
        fieldIntrotext: string
        path: {
          alias: string
        }
      }
    }
  }
}
