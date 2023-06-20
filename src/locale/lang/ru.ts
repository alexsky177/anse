import type { language } from '..'

export const ru = {
  name: 'ru',
  desc: 'Русский',
  locales: {
    settings: {
      title: 'Настройки',
      save: 'Сохранить',
      general: {
        title: 'Основные',
        requestWithBackend: 'Запрос с бэкэндом',
        locale: 'Изменить язык',
      },
      openai: {
        title: 'OpenAI',
        key: '',
      },
      replicate: {},
    },
    conversations: {
      title: 'Чаты',
      add: 'Новый',
      recent: 'Недавние',
      noRecent: 'Нет недавних',
      untitled: 'Без названия',
      confirm: {
        title: 'Удалить все сообщения чата',
        desc: 'Эта операция не может быть отменена.',
        message: 'Удалить запись',
        btn: 'подтверждение',
        cancel: 'отмена',
      },
      share: {
        title: 'Поделиться чатом',
        link: {
          title: 'Поделиться ссылкой',
          copy: 'Копировать ссылку',
          create: 'Создать ссылку',
        },
        save: 'Сохранить',
        copy: 'Копировать беседу',
        messages: {
          title: 'Выбрать сообщение',
          selected: 'Выбранные сообщения',
          selectAll: 'Выбрать все',
        },
        tabs: {
          context: 'Поделиться беседой',
          image: 'Поделиться изображением',
        },
        image: {
          btn: 'Создать изображение',
          open: 'Открыть в новой вкладке',
          loading: 'Создается ...',
          copy: 'Копировать изображение',
        },
      },
    },
    empty: 'Нет данных',
    send: {
      placeholder: 'Спросите что-нибудь ...',
      button: 'Отправлено',
    },
    copyed: 'Скопировано!',
  },
} as language
