const Validator = require('validator')
const { isEmpty } = require('./is-empty')
module.exports = function validateProfileInput(data) {
  let errors = {}

  data.handle = !isEmpty(data.handle) ? data.handle : ''
  data.website = !isEmpty(data.website) ? data.website : ''
  
  
  
  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle must be between 2 and 40 characters'
  }
  
  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Handle field is required'
  }

  if (Validator.isEmpty(data.website)) {
    errors.website = 'Website field is required'
  }

  if (!Validator.isURL(data.website)) {
    errors.website = 'Not a valid url'
  }
  


  return {
    errors,
    isValid: isEmpty(errors)
  }
}