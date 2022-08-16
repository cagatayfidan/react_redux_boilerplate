import { SET_SEARCH_TEXT } from "./constants";

export function setSearchText(payload) {
    return {
        type: SET_SEARCH_TEXT,
        payload: payload
    }
}