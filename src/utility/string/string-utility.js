
export const capitalize = (value) => {
  if(!value) return value
  const [first, ...tail] = value
  return first.toUpperCase() + (tail ? tail.join('').toLowerCase() : tail.join(''))
}

