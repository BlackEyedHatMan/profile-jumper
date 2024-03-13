
export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
}

export const objectPropertyArrayOrDefault = (object, propertyName, defaultResult = []) => {
  return object.hasOwnProperty(propertyName) ? object[propertyName] : defaultResult
}
