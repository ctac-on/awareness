export default interface TypeDataProduct {
  commerceProductById: {
    entityLabel: string
    fieldIntrotext: string
    fieldIntroprops: string[]
    fieldVetdescription: string
    variations: {
      entity: {
        entityLabel: string
        fieldTable: {
          value: Record<number, string[]> & {
            caption: ''
          }
        }
        price: {
          number: string
          currencyCode: 'EUR' | 'RUB' | 'USD'
        }
        fieldImgs: {
          entity: {
            thumbnail: {
              derivative: {
                url: string
              }
            }
          }
        }[]
      }
    }[]
    fieldBrands: {
      entity: {
        entityLabel: string
        fieldCountry: string
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
    entityUrl: {
      breadcrumb: {
        text: string
        url: {
          path: string
        }
      }[]
    }
  }
}
