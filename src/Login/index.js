import { Field, Form, Formik } from "formik"
import React from "react"

import { login } from "./actions"

import styles from "./style.module.scss"
import { useTranslation } from "react-i18next"

function Login({ onLogin }) {
  const { t } = useTranslation()
  return (
    <div className={styles.login}>
      hello
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => login(values)}
      >
        {({ errors }) => (
          <Form>
            <Field name="email" />
            <Field name="password" type="password" />
            <button type="submit">{t("button.click")}</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
