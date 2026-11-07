import { useState } from 'react'
import { formatPrice } from '../utils/pricing.js'
import '../styles/PaymentForm.css'

// Demo only: the card details live in this component's state while the user types.
// They are never saved or sent anywhere, and they disappear when the page closes.
function PaymentForm({ total, onSubmit }) {
  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [securityCode, setSecurityCode] = useState('')
  const [errors, setErrors] = useState({})

  function validate() {
    const newErrors = {}

    if (name.trim() === '') {
      newErrors.name = 'Please enter the name on the card.'
    }

    // Spaces are allowed while typing, so they are removed before checking.
    // /^\d{16}$/ means "exactly 16 digits and nothing else".
    if (!/^\d{16}$/.test(cardNumber.replaceAll(' ', ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits.'
    }

    if (!/^\d{3,4}$/.test(securityCode)) {
      newErrors.securityCode = 'Security code must be 3 or 4 digits.'
    }

    return newErrors
  }

  function handleSubmit(event) {
    // Stops the browser from reloading the page, which is what forms do by default
    event.preventDefault()

    const newErrors = validate()
    setErrors(newErrors)
    onSubmit(Object.keys(newErrors).length === 0)
  }

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h3>Payment</h3>
      <p className="payment-form-notice">
        Demo only: no payment is taken. Don't enter real card details.
      </p>

      {/* autoComplete="off" asks the browser not to fill in real saved cards */}
      <div className="payment-form-field">
        <label htmlFor="card-name">Name on card</label>
        <input
          id="card-name"
          type="text"
          autoComplete="off"
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'card-name-error' : undefined}
        />
        {errors.name && (
          <p id="card-name-error" className="payment-form-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="payment-form-field">
        <label htmlFor="card-number">Card number</label>
        <input
          id="card-number"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          maxLength={19}
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
          aria-invalid={Boolean(errors.cardNumber)}
          aria-describedby={errors.cardNumber ? 'card-number-error' : undefined}
        />
        {errors.cardNumber && (
          <p id="card-number-error" className="payment-form-error">
            {errors.cardNumber}
          </p>
        )}
      </div>

      <div className="payment-form-field">
        <label htmlFor="card-code">Security code</label>
        <input
          id="card-code"
          className="payment-form-short"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          maxLength={4}
          placeholder="123"
          value={securityCode}
          onChange={(event) => setSecurityCode(event.target.value)}
          aria-invalid={Boolean(errors.securityCode)}
          aria-describedby={errors.securityCode ? 'card-code-error' : undefined}
        />
        {errors.securityCode && (
          <p id="card-code-error" className="payment-form-error">
            {errors.securityCode}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-primary payment-form-button">
        Pay {formatPrice(total)} & Confirm
      </button>
    </form>
  )
}

export default PaymentForm
