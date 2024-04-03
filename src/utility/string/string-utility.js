export const capitalize = (value) => {
    if (!value) return value
    const [first, ...tail] = value
    return first.toUpperCase() + (tail ? tail.join('').toLowerCase() : tail.join(''))
}

export const isSame = (value, sought) => {
    return normForCompare(value) === normForCompare(sought)
}

export const hasValue = (value) => {
    if(!value) return false
    return value.trim().length !== 0;
}

export const contains = (value, sought) => {
    if(!hasValue(value) || !hasValue(sought)) return false
    return normForCompare(value).includes(normForCompare(sought))
}

export const normForCompare = (value) => {
    if(!hasValue(value)) return value
    return value.toLowerCase().trim()
}
