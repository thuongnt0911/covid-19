import Joi from 'joi'

const schema = Joi.object({
  email: Joi.string()
    .required()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'string.empty':
            err.message = 'Email is required'
            break
          case 'string.pattern.base':
            err.message = 'Enter a valid email'
            break
          default:
            break
        }
      })
      return errors
    }),
  password: Joi.string()
    .required()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'string.empty':
            err.message = 'Password is required'
            break
          case 'string.pattern.base':
            err.message =
              'Please enter 8 to 20 characters including letters, numbers and uppercase letters.'
            break
          default:
            break
        }
      })
      return errors
    }),
}).options({ abortEarly: false })

export default schema
