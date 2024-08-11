import { defineConfig, resolveUserConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lang: "ru-RU",
  title: "VovaVPN",
  description: "Обойди блокировки!",
  head: [['link', { rel: 'icon', href: '/logo2minimax.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      {
        text: 'Подключиться',
        items: [
          { text: 'Для компьютера', link: '/computer/hiddify' },
          { text: 'Для IPhone', link: '/iphone/streisand' },
          { text: 'Для Android', link: '/android/hiddify' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Для компьютера',
        items: [
          { text: 'Hiddify', link: '/computer/hiddify'},
          { text: 'NekoRay', link: '/computer/nekoray'}
        ]
      },
      {
        text: 'Для IPhone',
        items: [
          { text: 'Straisand', link: '/iphone/streisand'}
        ]
      },
      {
        text: 'Для Android',
        items: [
          { text: 'Hiddify', link: '/android/hiddify'}
        ]
      }
    ],

    outline: false,

    logo: '/logo2minimax.png',

    socialLinks: [
      {
        icon: {
        svg: '<img src="/vk4.svg" height="24px" width="24px" />'
        },
        link: 'https://vk.com/vova3141592',
        ariaLabel: 'Я ВКонтакте'
      },
      {
        icon: {
        svg: '<img src="/telegram.svg" height="24px" width="24px" />'
        },
        link: 'https://t.me/vova3141592',
        ariaLabel: 'Я в Телеграм'
      }
    ],

    //footer: {
    //  message: '<a href="https://vk.com/vova3141592">Вова Воложанинов</a>, 2024'
    //},

    //Перевод надписей на русский

    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',

    docFooter: {
      prev: 'Назад',
      next: 'Дальше'
    },

    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему'

  }
})