import { createAction } from '@reduxjs/toolkit'
import withPayloadType from '../../../Utils/withPayloadType'
import { gql } from '@redux-requests/graphql'
import TypeDataFormAPI from '../../../Models/TypeDataForm'

export const fetchingFormAction = createAction(
  'app/fetchingFormAction',
  withPayloadType<string>(),
)
export const postFormAction = createAction(
  'app/postFormAction',
  withPayloadType<{ formData: string; formName: string }>(),
)

export const fetchingFormType = 'app/fetchingFormType'
export const postFormType = 'app/postFormType'

function changeTypeInput(type: string) {
  switch (type) {
    case 'textarea':
      return 'textarea'
    case 'tel':
      return 'tel'
    default:
      return 'text'
  }
}

export const fetchingForm = (formName: string) => ({
  type: fetchingFormType,
  request: {
    query: gql`
      {
        webformById(webform_id: "${formName}") {
                    elements {
                        ... on WebformElement {
                            id
                            type
                        }
                        ... on WebformElementTextField {
                            title
                            required {
                              message
                            }
                            prefix
                            suffix
                            placeholder
                            description
                        }
                        ... on WebformElementEmail {
                            title
                            required {
                                message
                            }
                            placeholder
                            prefix
                        }
                        ... on WebformElementHidden {
                            defaultValue
                        }
                        ... on WebformElementActions {
                            submitLabel
                        }
                    }
                }
      }
    `,
  },
  meta: {
    requestKey: formName,
    onSuccess: (response: { data: TypeDataFormAPI }) => {
      return {
        ...response,
        data: response.data?.webformById?.elements
          ?.filter((item) => item.type !== 'webform_actions')
          .map((item) => ({
            ...item,
            type: changeTypeInput(item.description ?? item.type),
          })),
      }
    },
  },
})

export const postForm = (formData: string, formName: string) => ({
  type: postFormType,
  request: {
    query: gql`
      mutation submit($value: String!) {
        submitForm(values: $value) {
          errors
          submission {
            id
          }
        }
      }
    `,
    variables: { value: formData },
  },
  meta: {
    requestKey: formName,
  },
})
