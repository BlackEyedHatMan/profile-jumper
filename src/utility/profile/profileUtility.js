export const profiles = {
  ads: 'Ads',
  apple: 'Apple',
  amazon: 'Amazon',
  analytics: 'Analytics',
  aws: 'Amazon Web Services',
  booking: 'Booking',
  bitcoin: 'Bitcoin',
  broker: 'Broker',
  code: 'Code',
  codepen: 'Codepen',
  coffee: 'Coffee',
  coins: 'Coins',
  chrome: 'Chrome',
  chromewebstoredeveloper: 'Chrome Web Store Developer',
  credit: 'Credit',
  derivatives: 'Derivatives',
  dev: 'DEV',
  digitalocean: 'Digital Ocean',
  dropbox: 'Dropbox',
  ebay: 'Ebay',
  email: 'Email',
  facebook: 'FaceBook',
  fire: 'Fire',
  finance: 'Finance',
  flickr: 'Flickr',
  github: 'Github',
  googleextension: 'Google Drive',
  googledrive: 'Google Drive',
  gov: 'Government',
  news: 'News',
  hackernews: 'Hacker News',
  icloud: 'Apple iCloud',
  indiehackers: 'Indie Hackers',
  instagram: 'Instagram',
  linkedin: 'Linkedin',
  medium: 'Medium',
  meetup: 'Meetup',
  network: 'Network',
  pinterest: 'Pinterest',
  producthunt: 'Product Hunt',
  quora: 'Quora',
  reddit: 'Reddit',
  server: 'Server',
  soundcloud: 'SOUNDCLOUD',
  stripe: 'Stripe',
  study: 'Study',
  telegram: 'Telegram',
  timebomb: 'Timebomb Today',
  tripadvisor: 'Tripadvisor',
  tumblr: 'Tumblr',
  twitter: 'Twitter',
  vpn: 'VPN',
  wordpress: 'WordPress',
  yandex: 'Yandex',
  yahoo: 'Yahoo!',
  youtube: 'Youtube'
};

export const profileTitleFromUrl = url => {
  const urlLower = url.toLowerCase()
  for (let key of Object.keys(profiles)) {
    if(urlLower.includes(key)) return profiles[key]
  }
  return ''
}

export const profileKeyFromValue = value => {
  const valueLower = value.toLowerCase()
  for (let key of Object.keys(profiles)) {
    const profileDescription = profiles[key]
    if(profileDescription.toLowerCase().includes(valueLower)) return key
  }
  return ''
}

export const sortProfilesById = function(a, b) {
  return a.id - b.id
}
