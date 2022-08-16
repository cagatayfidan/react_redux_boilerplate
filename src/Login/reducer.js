import produce from "immer"
import { LOGIN } from "./constants"

export const initialState = {
  searchText: "",
}

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN:
        draft.searchText = action.payload
        break

      default:
        break
    }
  })

export default loginReducer
