import {updateObjectInArray} from "../utils/helper"

export const initialState = {
  currentSelectedItem: null,
  isModal            : false,
  urlText            : "",
  urlsList           : []
}
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_SELECT":
      return {
        ...state,
        urlText            : "",
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
      const obj = {text: state.urlText};
      const urlObj = updateObjectInArray(state.urlsList, state.currentSelectedItem, obj);
      return {
        ...state,
        urlsList: [...urlObj],
        urlText : ""
      }
    default:
      throw new Error();
  }
  
}
