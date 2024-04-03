import * as faIcons from 'react-icons/fa'
import * as siIcons from 'react-icons/si'

export const DEFAULT_ICON_NAME = 'FaLink'

export const IconLibraries = new Map()

// seeking icon will be found in defined order
IconLibraries.set('si', siIcons)
IconLibraries.set('fa', faIcons)

export const IconAliases = new Map(Object.entries({
    'analytics': 'ChartLine',
    'bank': 'PiggyBank',
    'booking': 'Hotel',
    'broker': 'Handshake',
    'chrome webstore' : 'Chrome',
    'code': 'LaptopCode',
    'credit': 'FileInvoiceDollar',
    'crypto': 'Btc',
    'derivatives': 'FileContract',
    'email': 'Envelope',
    'finance': 'ChartBar',
    'gov': 'Archway',
    'news': 'Newspaper',
    'study': 'GraduationCap',
    'vpn': 'UserShield'
}))
