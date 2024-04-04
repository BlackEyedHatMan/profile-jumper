import * as faIcons from 'react-icons/fa'
import * as siIcons from 'react-icons/si'

export const DEFAULT_ICON_NAME = 'FaLink'

export const IconLibraries = new Map()

// seeking icon will be found in defined order
IconLibraries.set('si', siIcons)
IconLibraries.set('fa', faIcons)

export const IconAliases = new Map(Object.entries({
    'analytics': 'FaChartLine',
    'automata': 'FaPushed',
    'bank': 'FaPiggyBank',
    'booking': 'FaHotel',
    'broker': 'FaHandshake',
    'chrome webstore' : 'FaChrome',
    'code': 'FaLaptopCode',
    'company': 'FaBuilding',
    'credit': 'FaFileInvoiceDollar',
    'crypto': 'FaBtc',
    'derivatives': 'FaFileContract',
    'email': 'FaEnvelope',
    'finance': 'FaChartBar',
    'gov': 'FaArchway',
    'news': 'FaNewspaper',
    'study': 'FaGraduationCap',
    'tfl': 'SiTransportforlondon',
    'vpn': 'FaUserShield'
}))
