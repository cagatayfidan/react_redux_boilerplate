import React from "react"
import { useDispatch } from "react-redux"
import { setSearchText } from "./actions"

import styles from "./home.module.scss"
import { Link } from "react-router-dom"

function Home() {
  const dispatch = useDispatch()
  return (
    <div className={styles.home}>
      <Link to={"/login"}>go</Link>
      <input onChange={(e) => dispatch(setSearchText(e.target.value))} />
    </div>
  )
}

export default Home
