import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://difusoraromas.com/',
  base: '/',
  title: 'Difusores de Aromas',
  description:
    'Descubre una experiencia sensorial única con nuestros difusores de aromas. Diseño elegante, bienestar y relajación en cada espacio.',
  author: 'Difusor Aromas Team',
  lang: 'es',
  ogLocale: 'es_ES',
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/blog',
      title: 'Blog Aromas',
      displayMode: 'alwaysText',
      text: 'Blog',
    },
    {
      path: '/productos',
      title: 'Productos',
      displayMode: 'alwaysText',
      text: 'Productos',
    },
    {
      path: '/ofertas',
      title: 'Ofertas',
      displayMode: 'alwaysText',
      text: 'Ofertas',
    },
  ],
  socialLinks: [
    {
      link: 'https://www.instagram.com/difusoraromas',
      title: 'Instagram Difusor Aromas',
      displayMode: 'alwaysIcon',
      icon: 'i-ri-instagram-line',
    },
    {
      link: 'https://www.facebook.com/difusoraromas',
      title: 'Facebook Difusor Aromas',
      displayMode: 'alwaysIcon',
      icon: 'i-ri-facebook-fill',
    },
  ],
  navBarLayout: {
    left: ['internalNavs'],
    right: [
      'socialLinks',
      'searchButton',
      'themeButton',
    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [
    { title: 'Destacados', path: '/destacados' },
    { title: 'Aromaterapia', path: '/aromaterapia' },
    { title: 'Reseñas', path: '/reseñas' },
  ],
  groupView: {
    maxGroupColumns: 3,
    showGroupItemColorOnHover: true,
  },
  githubView: {
    monorepos: [],
    mainLogoOverrides: [],
    subLogoMatches: [],
  },
  externalLink: {
    newTab: true,
    cursorType: 'pointer',
    showNewTabIcon: true,
  },
}

export const FEATURES: Features = {
  share: [
    true,
    {
      whatsapp: true,
      twitter: false,
      bluesky: false,
      mastodon: false,
      facebook: false,
      linkedin: true,
      pinterest: false,
      reddit: false,
    },
  ],

  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'left',
      displayMode: 'hover',
    },
  ],
  ogImage: [
    true,
    {
      authorOrBrand: 'Difusores de Aromas',
      fallbackTitle: 'Descubre una experiencia sensorial inolvidable',
      fallbackBgType: 'plum', // Ajuste aquí
    },
  ],
  slideEnterAnim: [true, { enterStep: 70 }],
}
