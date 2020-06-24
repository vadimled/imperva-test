export const initialState = {
  currentSelectedItem: null,
  isModal: false,
  urlText: ""
}
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_SELECT":
      return {
        ...state,
        currentSelectedItem: action.payload
      }
    case 'SET_MODAL_STATUS':
      return {
        ...state,
        isModal: !state.isModal
      }
    case 'SET_URL_TEXT':
      return {
        ...state,
        urlText: action.payload
      }
   case 'ADD_NEW_URL':
      return {
        ...state
      }
    default:
      throw new Error();
  }
  
}
