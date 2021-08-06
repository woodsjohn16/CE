import { getFormContent } from '../../../service/api/api'
import { formConstants } from '../constants/formConstants'

export const readForms = (payload: any) => ({
  type: formConstants.READ_FORMS,
  payload: payload,
})

export const loadForms = () => ({
  type: formConstants.LOAD_FORMS,
})

export const formLoading = () => ({
  type: formConstants.LOAD_FORMS,
})

export const getForms = () => async (dispatch, getState) => {
  const { loading, forms } = getState()
  await dispatch(loadForms())
  try {
    const formContent = await getFormContent()
    formContent.data.sort(function (a, b) {
      return a.order - b.order
    })
    dispatch(readForms(formContent.data))
  } catch (err) {
    console.log(err)
  }
}
