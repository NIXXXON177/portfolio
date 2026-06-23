/* ============================================================
   ISTHISNIXXXON — портфолио. Логика: i18n, анимации, меню.
   ============================================================ */
(() => {
  'use strict';

  /* ---------- Словарь переводов ---------- */
  const I18N = {
    ru: {
      'nav.about': 'Обо мне', 'nav.projects': 'Проекты', 'nav.stack': 'Стек', 'nav.contact': 'Контакты',
      'hero.eyebrow': 'Разработчик · 19 лет',
      'hero.hi': 'Привет, я',
      'hero.lead': 'Создаю приложения и веб-сервисы — от мобильных трекеров до информационных систем. Выпускник СПО, в коде с интересом к деталям и удобству.',
      'hero.ctaProjects': 'Смотреть проекты', 'hero.ctaContact': 'Связаться',
      'hero.stat1': 'проектов в портфолио', 'hero.stat2': 'лет', 'hero.stat3': 'желания учиться',
      'about.kicker': '01 — Обо мне', 'about.title': 'Немного о себе',
      'about.p1': 'Меня зовут Никола, мне 19 лет, в сети — ISTHISNIXXXON, для друзей просто Nick. Я закончил среднее профессиональное образование и развиваюсь как разработчик.',
      'about.p2': 'Мне нравится доводить продукт от идеи до рабочего релиза: проектировать логику, собирать интерфейс и доводить мелочи до ума. В портфолио — мобильное приложение и полноценная информационная система, которую я делал как дипломный проект.',
      'about.fact1k': 'Имя', 'about.fact2k': 'Псевдоним', 'about.fact3k': 'Возраст', 'about.fact3v': '19 лет',
      'about.fact4k': 'Образование', 'about.fact4v': 'СПО',
      'projects.kicker': '02 — Проекты', 'projects.title': 'Над чем я работал',
      'projects.mycycle.tag': 'Flutter · Мобильное',
      'projects.mycycle.desc': 'Мобильное приложение для отслеживания менструального цикла: календарь, прогноз дат, удобный и приватный интерфейс. Личный проект от идеи до сборки.',
      'projects.mycycle.t1': 'Календарь', 'projects.mycycle.t2': 'Прогнозы',
      'projects.mycycle.download': 'Скачать APK', 'projects.mycycle.note': '~60 МБ · Android',
      'projects.isnix.tag': 'Веб · Minecraft',
      'projects.isnix.desc': 'Официальный сайт моего сервера ISTHISNIXXXON — ванильный Minecraft без доната. Информация о сервере, правила и подключение. Свой проект и для себя, и для сообщества.',
      'projects.isnix.t1': 'Сайт', 'projects.isnix.live': 'Открыть сайт', 'projects.isnix.note': 'Живой проект',
      'projects.diploma.tag': 'Веб · Дипломный проект',
      'projects.diploma.desc': 'Информационная система автоматизированного планирования рекламного эфира и управления коммерческими зонами торгового центра. Соединяет администрацию и арендаторов: онлайн-подача заявок, согласование, планирование показа на экранах, платежи и аналитика.',
      'projects.diploma.live': 'Открыть сайт', 'projects.diploma.note': 'Живая версия проекта',
      'projects.mall.tag': 'Веб · Фронтенд', 'projects.mall.name': 'Сайт ТРЦ «Европейский»',
      'projects.mall.desc': 'Публичный сайт торгово-развлекательного центра: магазины, фудкорт и рестораны, навигация и информация для посетителей. Адаптивная вёрстка с нуля.',
      'projects.mall.live': 'Открыть сайт', 'projects.mall.note': 'Живой проект',
      'projects.tomato.tag': 'Веб · Приложение',
      'projects.tomato.desc': 'Веб-приложение по технике Pomodoro: рабочие интервалы и перерывы, звуковые уведомления, настройка длительностей и сохранение прогресса в localStorage.',
      'projects.tomato.t1': 'localStorage',
      'projects.bot.tag': 'Telegram-бот · Python', 'projects.bot.name': 'Бот мониторинга Donatov.net',
      'projects.bot.desc': 'Telegram-бот для мониторинга событий на Donatov.net и отправки уведомлений в чат. Развёртывается как systemd-сервис на сервере для работы 24/7.',
      'projects.bot.t1': 'Telegram API',
      'projects.code': 'Код на GitHub',
      'stack.kicker': '03 — Стек', 'stack.title': 'С чем я работаю',
      'contact.kicker': '04 — Контакты', 'contact.title': 'Давай на связи',
      'contact.lead': 'Открыт к проектам, стажировкам и интересным задачам. Напиши — отвечу.',
      'footer.made': 'Сделано вручную, без шаблонов'
    },
    en: {
      'nav.about': 'About', 'nav.projects': 'Projects', 'nav.stack': 'Stack', 'nav.contact': 'Contact',
      'hero.eyebrow': 'Developer · 19 y.o.',
      'hero.hi': "Hi, I'm",
      'hero.lead': 'I build apps and web services — from mobile trackers to information systems. A vocational-college graduate who cares about detail and usability.',
      'hero.ctaProjects': 'View projects', 'hero.ctaContact': 'Get in touch',
      'hero.stat1': 'projects in portfolio', 'hero.stat2': 'years old', 'hero.stat3': 'will to learn',
      'about.kicker': '01 — About', 'about.title': 'A bit about me',
      'about.p1': "My name is Nikola, I'm 19, online I go by ISTHISNIXXXON, or just Nick. I graduated from vocational college and keep growing as a developer.",
      'about.p2': 'I like taking a product from an idea to a working release: designing the logic, building the UI and polishing the small things. My portfolio includes a mobile app and a full information system I built as my graduation project.',
      'about.fact1k': 'Name', 'about.fact2k': 'Alias', 'about.fact3k': 'Age', 'about.fact3v': '19 y.o.',
      'about.fact4k': 'Education', 'about.fact4v': 'Vocational college',
      'projects.kicker': '02 — Projects', 'projects.title': 'What I worked on',
      'projects.mycycle.tag': 'Flutter · Mobile',
      'projects.mycycle.desc': 'A mobile app for tracking the menstrual cycle: calendar, date predictions, a clean and private interface. A personal project from idea to build.',
      'projects.mycycle.t1': 'Calendar', 'projects.mycycle.t2': 'Predictions',
      'projects.mycycle.download': 'Download APK', 'projects.mycycle.note': '~60 MB · Android',
      'projects.isnix.tag': 'Web · Minecraft',
      'projects.isnix.desc': 'The official site of my ISTHISNIXXXON server — a vanilla Minecraft server with no pay-to-win. Server info, rules and how to connect. A project for myself and the community.',
      'projects.isnix.t1': 'Website', 'projects.isnix.live': 'Open site', 'projects.isnix.note': 'Live project',
      'projects.diploma.tag': 'Web · Graduation project',
      'projects.diploma.desc': 'An information system for automated planning of advertising airtime and management of a mall’s commercial zones. It connects administration and tenants: online applications, approvals, scheduling on screens, payments and analytics.',
      'projects.diploma.live': 'Open site', 'projects.diploma.note': 'Live version of the project',
      'projects.mall.tag': 'Web · Frontend', 'projects.mall.name': 'Evropeyskiy Mall website',
      'projects.mall.desc': 'A public website for a shopping & entertainment mall: stores, food court and restaurants, navigation and visitor info. Responsive layout built from scratch.',
      'projects.mall.live': 'Open site', 'projects.mall.note': 'Live project',
      'projects.tomato.tag': 'Web · App',
      'projects.tomato.desc': 'A Pomodoro-technique web app: work intervals and breaks, sound notifications, configurable durations and progress saved in localStorage.',
      'projects.tomato.t1': 'localStorage',
      'projects.bot.tag': 'Telegram bot · Python', 'projects.bot.name': 'Donatov.net monitoring bot',
      'projects.bot.desc': 'A Telegram bot that monitors events on Donatov.net and sends notifications to a chat. Deployed as a systemd service for 24/7 uptime.',
      'projects.bot.t1': 'Telegram API',
      'projects.code': 'View on GitHub',
      'stack.kicker': '03 — Stack', 'stack.title': 'What I work with',
      'contact.kicker': '04 — Contact', 'contact.title': "Let's connect",
      'contact.lead': "Open to projects, internships and interesting challenges. Drop me a line — I'll reply.",
      'footer.made': 'Handcrafted, no templates'
    }
  };

  const LANG_NAMES = { ru: 'Никола', en: 'Nikola' };

  /* ---------- Применение языка ---------- */
  function applyLang(lang) {
    const dict = I18N[lang] || I18N.ru;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    // Имя в hero отдельно (не помечено data-i18n, чтобы не дублировать)
    const nameEl = document.querySelector('.hero__name');
    if (nameEl) nameEl.textContent = LANG_NAMES[lang];

    document.querySelectorAll('.lang-switch__opt').forEach(opt => {
      opt.classList.toggle('is-active', opt.dataset.lang === lang);
    });

    try { localStorage.setItem('nick-lang', lang); } catch (_) {}
  }

  /* ---------- Старт ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    // Год в подвале
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Язык: сохранённый → браузерный → ru
    let saved = null;
    try { saved = localStorage.getItem('nick-lang'); } catch (_) {}
    const browserEn = (navigator.language || '').toLowerCase().startsWith('en');
    const initial = saved || (browserEn ? 'en' : 'ru');
    applyLang(initial);

    // Переключатель языка
    const langSwitch = document.getElementById('langSwitch');
    langSwitch?.addEventListener('click', () => {
      const current = document.documentElement.lang === 'en' ? 'en' : 'ru';
      applyLang(current === 'ru' ? 'en' : 'ru');
    });

    // Шапка: фон при скролле
    const header = document.getElementById('header');
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Мобильное меню
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    burger?.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    nav?.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });

    // Reveal-анимации
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // лёгкий каскад внутри одной секции
            entry.target.style.transitionDelay = `${Math.min(i * 60, 240)}ms`;
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach(el => io.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('is-visible'));
    }

    // Прелоадер: убрать после полной загрузки
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
      setTimeout(() => preloader?.classList.add('is-hidden'), 350);
    });
  });
})();
