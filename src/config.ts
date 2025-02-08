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
      'cartButton', // Agregado un botón de carrito si es necesario
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
      twitter: [true, '@difusoraromas'],
      instagram: [true, '@difusoraromas'],  // Adaptado a Instagram
      facebook: [true, 'DifusorAromasFB'],
      pinterest: true,
      whatsapp: true,
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
      fallbackBgType: 'pastel' as 'solid' | 'gradient' | 'pattern', // Ajuste aquí
    },
  ],
  slideEnterAnim: [true, { enterStep: 70 }],
}
