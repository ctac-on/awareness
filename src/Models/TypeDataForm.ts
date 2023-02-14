export type TypeDataForm = {
  description: string | null
  id: string
  placeholder: string | null
  prefix: string | null
  suffix: string | null
  title: string
  type: string
}

export default interface TypeDataFormAPI {
  webformById: {
    elements: TypeDataForm[]
  }
}
