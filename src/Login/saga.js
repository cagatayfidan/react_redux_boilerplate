import { takeLatest } from "redux-saga/effects"
import ApiStore from "../request"
import { LOGIN } from "./constants"

function* login(action) {
  console.log(action)
  try {
    const response = yield ApiStore.auth.post("/Login", action.payload)
    console.log("login", response)
  } catch (e) {
    console.log("hata:", e, action)
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN, login)
}

export default loginSaga
