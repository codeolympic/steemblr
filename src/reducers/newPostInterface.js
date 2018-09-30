import {
  NEW_POST_MODAL,
  NEW_POST_FORM,
  NEW_POST_IS_ERROR,
  NEW_POST_ERROR_MSG,
  EDITING_EXISTING_POST
} from "../actions/types";

const initialState = {
  modal: false,
  isForm: false,
  isError: false,
  errorMsg: "",
  editingExistingPost: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_POST_MODAL:
      return {
        ...state,
        modal: action.payload
      };
    case NEW_POST_FORM:
      return {
        ...state,
        isForm: action.payload
      };
    case NEW_POST_IS_ERROR:
      return {
        ...state,
        isError: action.payload
      };
    case NEW_POST_ERROR_MSG:
      return {
        ...state,
        errorMsg: action.payload
      };
    case EDITING_EXISTING_POST:
      return {
        ...state,
        editingExistingPost: action.payload
      };
    default:
      return {
        ...state
      };
  }
}
