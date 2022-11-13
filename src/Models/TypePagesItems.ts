export default interface TypePagesItems {
  id: string
  nodeType: string
  link: string
  title: string
  type: 'categoryList' | 'productList' | 'product'
  children?: TypePagesItems[]
  entityBundle?: string
  tid: string
  productOptions?: {
    img: string
  }
}
