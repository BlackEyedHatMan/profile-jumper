import * as faIcons from 'react-icons/fa'
import * as siIcons from 'react-icons/si'

export const DEFAULT_ICON_NAME = 'FaLink'

export const IconLibraries = new Map()

// seeking icon will be found in defined order
IconLibraries.set('si', siIcons)
IconLibraries.set('fa', faIcons)
