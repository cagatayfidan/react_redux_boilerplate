import { toast } from "react-toastify"

export default function Toast({
  message,
  toastId,
  closeTime = 3000,
  hideProgressBar = true,
}) {
  return toast(message, {
    toastId: toastId,
    autoClose: closeTime,
    hideProgressBar: hideProgressBar,
    closeOnClick: true,
    draggable: false,
    pauseOnHover: false,
  })
}
