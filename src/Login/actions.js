import { LOGIN } from "./constants"

export function login(payload) {
  return {
    type: LOGIN,
    payload: payload,
  }
}
