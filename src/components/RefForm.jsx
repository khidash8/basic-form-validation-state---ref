import { useRef, useState } from "react"
import { validateEmail, validatePassword } from "../Errors"
import "./styles.css"

export function RefForm() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [emailError, setEmailError] = useState([])
  const [passwordError, setPasswordError] = useState([])
  const [afterFirstSubmit, setAfterFirstSubmit] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setAfterFirstSubmit(true)

    const newEmailError = validateEmail(emailRef.current.value)
    const newPasswordError = validatePassword(passwordRef.current.value)

    setEmailError(newEmailError)
    setPasswordError(newPasswordError)

    if (newEmailError.length === 0 && newPasswordError.length === 0) {
      alert("Form submitted")
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className={`form-group ${emailError.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          ref={emailRef}
          onChange={(e) => {
            afterFirstSubmit && setEmailError(validateEmail(e.target.value))
          }}
        />
        {emailError.length > 0 && (
          <div className="msg">{emailError.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passwordError.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          ref={passwordRef}
          onChange={(e) => {
            afterFirstSubmit &&
              setPasswordError(validatePassword(e.target.value))
          }}
        />

        {passwordError.length > 0 && (
          <div className="msg">{passwordError.join(", ")}</div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}
