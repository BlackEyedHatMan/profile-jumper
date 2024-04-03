export const capitalize = (value) => {
    if (!value) return value
    const [first, ...tail] = value
    return first.toUpperCase() + (tail ? tail.join('').toLowerCase() : tail.join(''))
}

export const isSame = (value, sought) => {
    return normValueForCompare(value) === normValueForCompare(sought)
}

const normValueForCompare = (value) => {
    if(!hasValue(value)) return value
    return value.toLowerCase().trim()
}

export const hasValue = (value) => {
    if(!value) return false
    return value.trim().length !== 0;
}
