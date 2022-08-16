import { all } from 'redux-saga/effects'
import homeSaga from './Home/saga'
import loginSaga from "./Login/saga"

export default function* rootSaga() {
  yield all([
    homeSaga(),
    loginSaga()
  ])
}