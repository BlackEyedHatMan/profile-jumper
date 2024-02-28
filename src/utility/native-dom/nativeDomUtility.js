export const insertBefore = (element, insertElement) => {
  element.parentNode.insertBefore(insertElement, element)
}

export const insertAfter = (element, insertElement) => {
  element.parentNode.insertBefore(insertElement, element.nextSibling)
}

export const obtainNearestParentForClassName = (nativeDomElement, seekNodeClass) => {
  if(nativeDomElement === undefined || nativeDomElement === null) return null
  if(nativeDomElement && nativeDomElement.className === seekNodeClass) return nativeDomElement
  return obtainNearestParentForClassName(nativeDomElement.parentNode, seekNodeClass)
}
