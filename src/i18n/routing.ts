import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt-BR', 'en'],
  defaultLocale: 'pt-BR',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/blog': '/blog',
    '/about': {
      en: '/about-us',
      "pt-BR": "/sobre-nos"
    },
    '/sign-in': {
      en: '/sign-in',
      "pt-BR": "/entrar"
    },
    '/sign-out': {
      en: '/sign-out',
      "pt-BR": "/sair"
    },
    '/sign-up': {
      en: '/sign-up',
      "pt-BR": "/inscrever-se"
    },
    '/careers': {
      en: '/careers',
      "pt-BR": "/carreira"
    },
    '/contact': {
      en: '/contact',
      "pt-BR": "/contatos"
    },
    '/faq': {
      en: '/faq',
      "pt-BR": "/ajuda"
    },
    '/privacy': {
      en: '/policy-of-privacy',
      "pt-BR": "/politica-de-privacidade"
    },
    '/terms': {
      en: '/terms-of-use',
      "pt-BR": "/termos-de-uso"
    },
    '/forget-password': {
      en: '/forget-password',
      "pt-BR": "/recuperar-senha"
    },
  }
});