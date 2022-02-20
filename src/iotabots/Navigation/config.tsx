export const PROFILE = {
  label: 'Profile',
  href: '/profile'
}
export const BOTS = {
  label: 'Bots',
  href: '/bots',
  active: true
}
export const PROJECTS = {
  label: 'Projects',
  href: '/projects'
}
export const FAQ = {
  label: 'FAQ',
  href: '/faq'
}

export const MENU = [BOTS, PROJECTS, FAQ]

export const MOBILE_MENU = [PROFILE, ...MENU]
