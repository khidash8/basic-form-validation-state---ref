import { useState } from "react"
import { validateEmail, validatePassword } from "../Errors"
import "./styles.css"

export const StateForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [afterFirstSubmit, setAfterFirstSubmit] = useState(false)

  const emailError = afterFirstSubmit ? validateEmail(email) : []
  const passwordError = afterFirstSubmit ? validatePassword(password) : []

  const handleSubmit = (event) => {
    event.preventDefault()
    setAfterFirstSubmit(true)

    if (emailError.length === 0 && passwordError.length === 0) {
      alert("Form submitted")
      console.log("calling")
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
