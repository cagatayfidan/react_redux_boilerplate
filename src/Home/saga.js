import {  takeLatest } from 'redux-saga/effects'
import ApiStore from '../request';
import { SET_SEARCH_TEXT } from './constants';



function* searchText(action) {
   try {
    const response = yield ApiStore.auth.post("/Login",{"email":"string","password":"string"})
    console.log("asdsad",response)
   } catch (e) {
    console.log("hata:",e,action)
   }
}

function* userSaga() {
   yield takeLatest(SET_SEARCH_TEXT, searchText);
}

export default userSaga;