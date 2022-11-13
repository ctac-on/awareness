export default interface TypeDataTreeProductAPI {
  nodeById: {
    entityLabel: string
    fieldVetdescription: string
    entityUrl: {
      breadcrumb: {
        text: string
        url: {
          path: string
        }
      }[]
    }
    queryFieldRefProduct: {
      entities: {
        entityId: string
        entityLabel: string
        path: {
          alias: string
        }
        fieldImg: {
          entity: {
            thumbnail: {
              derivative: {
                url: string
              }
            }
          }
        }[]
        fieldBrands: {
          entity: {
            fieldLogo: {
              entity: {
                thumbnail: {
                  derivative: {
                    url: string
                  }
                }
              }
            }
          }
        }
      }[]
    }
  }
}
