import { formConstants } from '../constants/formConstants'

const defaultState = {
  loading: false,
  error: null,
  forms: {},
}

export default function formReducer(
  state: any = defaultState,
  action: { type: string; payload: any },
) {
  switch (action.type) {
    case formConstants.LOAD_FORMS:
      console.log('forms loading...')
      return { ...state, loading: true }
    case formConstants.READ_FORMS:
      console.log('forms loaded')
      return { ...state, forms: action.payload, loading: false }
    default:
      return state
  }
}
