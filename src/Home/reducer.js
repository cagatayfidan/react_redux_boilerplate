import produce from "immer";
import { SET_SEARCH_TEXT, SET_SEARCH_TEXT_SUCCESS } from "./constants";

export const initialState = {
    searchText: "",
    success:"",
    carriers: {
        data: []
    }
};

const homeReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case SET_SEARCH_TEXT:
                draft.searchText = action.payload
                break;
                case SET_SEARCH_TEXT_SUCCESS:
                    draft.searchText = "LE LELE BULDUM ONU YOLUN SONUNDA "
                    break;
                
            default:
                break;

        }
    });

export default homeReducer;