export const initialState = {
  currentSelectedItem: null,
  isModal: false
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
    default:
      throw new Error();
  }
  
}
