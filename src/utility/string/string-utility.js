
export const capitalize = (value) => {
  const [first, ...tail] = value
  return first.toUpperCase() + (tail ? tail.join('').toLowerCase() : tail.join(''))
}

