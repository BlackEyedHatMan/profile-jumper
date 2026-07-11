import * as faIcons from 'react-icons/fa'
import * as fa6Icons from 'react-icons/fa6'
import * as siIcons from 'react-icons/si'

export const DEFAULT_ICON_NAME = 'FaLink'

// fa6 extends fa with physical objects missing from fa5 (e.g. FaGun, FaHouse);
// fa5 wins name collisions so icon names already stored in profiles keep resolving unchanged
const faCombinedIcons = { ...fa6Icons, ...faIcons }

export const IconLibraries = new Map()

// seeking icon will be found in defined order
IconLibraries.set('si', siIcons)
IconLibraries.set('fa', faCombinedIcons)

// also maps physical-object words that a brand icon name would otherwise shadow
// (e.g. 'plane' matches the SiPlane brand before the FaPlane object icon)
export const IconAliases = new Map(Object.entries({
    'analytics': 'FaChartLine',
    'automata': 'FaPushed',
    'bank': 'FaPiggyBank',
    'bike': 'FaBicycle',
    'boat': 'FaSailboat',
    'booking': 'FaHotel',
    'broker': 'FaHandshake',
    'chrome webstore' : 'FaChrome',
    'code': 'FaLaptopCode',
    'company': 'FaBuilding',
    'credit': 'FaFileInvoiceDollar',
    'crypto': 'FaBtc',
    'cup': 'FaMugHot',
    'derivatives': 'FaFileContract',
    'email': 'FaEnvelope',
    'finance': 'FaChartBar',
    'gov': 'FaArchway',
    'money': 'FaMoneyBillWave',
    'monitor': 'FaDesktop',
    'news': 'FaNewspaper',
    'plane': 'FaPlane',
    'rocket': 'FaRocket',
    'study': 'FaGraduationCap',
    'tfl': 'SiTransportforlondon',
    'vpn': 'FaUserShield',
    'wine': 'FaWineGlass'
}))
