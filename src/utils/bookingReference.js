// Letters and digits that are easy to read: no 0/O or 1/I, which look alike
const CHARACTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function createReference() {
  let code = ''

  for (let i = 0; i < 6; i++) {
    code += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
  }

  return `CV-${code}`
}

// Creates a reference such as "CV-7K3P9Q", trying again in the rare case it's already taken
export function generateBookingReference(existingReferences) {
  let reference = createReference()

  while (existingReferences.includes(reference)) {
    reference = createReference()
  }

  return reference
}
