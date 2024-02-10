export function validateEmail(email) {
  let errors = []

  if (!email) {
    errors.push("Email cannot be empty")
  } else if (!email.endsWith("@webdevsimplified.com")) {
    errors.push("Must end in @webdevsimplified.com")
  }
  return errors
}

export function validatePassword(password) {
  let errors = []

  if (password.length < 10) {
    errors.push("Password must be at least 10 characters")
  }
  if (!password.match(/\d/)) {
    errors.push("Password must contain a number")
  }
  if (!password.match(/[a-z]/)) {
    errors.push("Password must contain a lowercase letter")
  }
  if (!password.match(/[A-Z]/)) {
    errors.push("Password must contain an uppercase letter")
  }

  return errors
}
