import { useState, useEffect, useRef, type ReactNode } from 'react'

// ─── Translations ─────────────────────────────────────────────────────────────

const T = {
  uz: {
    lang: 'RU',
    nav: {
      about: 'Biz haqimizda',
      services: 'Xizmatlar',
      pricing: "Narxlar",
      contact: 'Aloqa',
    },
    cta: 'Bog\'lanish',
    hero: {
      badge: '4+ yillik tajriba',
      title: "Biznesingiz uchun\nishonchli moliyaviy\nhimoya",
      sub: "Orbita — buxgalteriya va konsalting xizmatlari. Sizning moliyaviy muammolaringizni professional yechimlar bilan hal qilamiz.",
      cta: 'Bepul konsultatsiya',
      cta2: 'Xizmatlar',
    },
    about: {
      title: "Raqamlar bilan gapiramiz",
      sub: "Orbita 2022-yildan beri o'zbek biznesiga buxgalteriya va moliyaviy maslahat xizmatlarini ko'rsatib keladi.",
      stats: [
        { value: '4+', label: 'Yillik tajriba' },
        { value: '20+', label: 'Faol mijozlar' },
        { value: '100%', label: 'Maxfiylik' },
        { value: '0', label: 'Jarimalar' },
      ],
    },
    services: {
      title: 'Xizmatlarimiz',
      sub: 'Har bir biznes uchun kompleks moliyaviy yechimlar',
      items: [
        {
          icon: 'coins',
          title: 'Buxgalteriya hisobi',
          desc: "Birlamchi hujjatlar, soliq hisobotlari, ish haqi hisob-kitobi va to'liq moliyaviy boshqaruv.",
        },
        {
          icon: 'laptop',
          title: 'Moliyaviy konsalting',
          desc: "Biznes-rejalashtirish, moliyaviy tahlil, investitsiyalarni optimallashtirish bo'yicha ekspert maslahatlari.",
        },
        {
          icon: 'chart',
          title: 'Soliq optimallashtirish',
          desc: "Qonuniy soliq yuklarini kamaytirish, imtiyozlardan foydalanish va soliq risklarini boshqarish.",
        },
      ],
    },
    pricing: {
      title: 'Tariflar',
      sub: "Biznesingiz hajmiga mos qulay tariflar",
      basic: {
        name: 'Basic',
        badge: 'Eng mashhur',
        price: '3 000 000',
        period: 'oyda / sumdan',
        desc: 'Kichik va o\'rta biznes uchun ideal',
        features: [
          'Birlamchi buxgalteriya hisobi',
          "Oylik soliq hisoboti",
          'Ish haqi hisob-kitobi (20 tagacha xodim)',
          "Raqamli hujjat aylanmasi",
          'Elektron pochta orqali maslahat',
          "Choraklik moliyaviy hisobot",
        ],
        cta: 'Boshlash',
      },
      corp: {
        name: 'Corporate',
        badge: 'Katta biznes',
        priceLabel: 'Individual hisob-kitob',
        desc: 'Yillik aylanmasi 1 mlrd. sumdan ortiq kompaniyalar uchun',
        features: [
          "To'liq buxgalteriya auditiga kirish",
          "VIP konsalting (24/7)",
          "Maxsus moliyaviy strategiya",
          "Soliq optimallashtirish rejasi",
          'Qonuniy yordam (hamkor orqali)',
          "Har oylik CFO hisoboti",
        ],
        cta: 'Shartlarni muhokama qilish',
      },
    },
    contact: {
      title: 'Biz bilan bog\'laning',
      sub: "Savol yoki taklifingiz bormi? Biz doim yordamga tayyormiz.",
      phone: '+998 88 487 75 30',
      telegram: '@Oybek_98765',
      form: {
        name: 'Ismingiz',
        phone: 'Telefon raqamingiz',
        message: 'Xabar',
        submit: 'Yuborish',
        placeholder_name: 'Ismoil Karimov',
        placeholder_phone: '+998 90 000 00 00',
        placeholder_msg: "Savolingizni yozing...",
      },
    },
    footer: {
      copy: '© 2026 Orbita. Barcha huquqlar himoyalangan.',
      links: ['Maxfiylik siyosati', 'Shartlar'],
    },
  },
  ru: {
    lang: 'UZ',
    nav: {
      about: 'О нас',
      services: 'Услуги',
      pricing: 'Тарифы',
      contact: 'Контакты',
    },
    cta: 'Связаться',
    hero: {
      badge: '4+ лет опыта',
      title: "Надёжная финансовая\nзащита вашего\nбизнеса",
      sub: "Orbita — бухгалтерские и консалтинговые услуги. Решаем финансовые задачи вашего бизнеса профессионально.",
      cta: 'Бесплатная консультация',
      cta2: 'Услуги',
    },
    about: {
      title: 'Говорим цифрами',
      sub: "Orbita с 2020 года оказывает бухгалтерские и финансовые консалтинговые услуги узбекскому бизнесу.",
      stats: [
        { value: '4+', label: 'Лет опыта' },
        { value: '20+', label: 'Активных клиентов' },
        { value: '100%', label: 'Конфиденциальность' },
        { value: '0', label: 'Штрафов' },
      ],
    },
    services: {
      title: 'Наши услуги',
      sub: 'Комплексные финансовые решения для каждого бизнеса',
      items: [
        {
          icon: 'coins',
          title: 'Бухгалтерский учёт',
          desc: "Первичная документация, налоговая отчётность, расчёт зарплат и полное финансовое управление.",
        },
        {
          icon: 'laptop',
          title: 'Финансовый консалтинг',
          desc: "Бизнес-планирование, финансовый анализ, экспертные советы по оптимизации инвестиций.",
        },
        {
          icon: 'chart',
          title: 'Налоговая оптимизация',
          desc: "Законное снижение налоговой нагрузки, использование льгот и управление налоговыми рисками.",
        },
      ],
    },
    pricing: {
      title: 'Тарифы',
      sub: 'Удобные тарифы, подходящие для масштаба вашего бизнеса',
      basic: {
        name: 'Basic',
        badge: 'Популярный',
        price: '3 000 000',
        period: 'в месяц / от сум',
        desc: 'Идеально для малого и среднего бизнеса',
        features: [
          'Первичный бухгалтерский учёт',
          'Ежемесячная налоговая отчётность',
          'Расчёт зарплат (до 20 сотрудников)',
          'Цифровой документооборот',
          'Консультации по электронной почте',
          'Квартальный финансовый отчёт',
        ],
        cta: 'Начать',
      },
      corp: {
        name: 'Corporate',
        badge: 'Крупный бизнес',
        priceLabel: 'Индивидуальный расчёт',
        desc: 'Для компаний с оборотом от 1 млрд сум в год',
        features: [
          'Полный доступ к бухгалтерскому аудиту',
          'VIP-консалтинг (24/7)',
          'Персональная финансовая стратегия',
          'План налоговой оптимизации',
          'Юридическая поддержка (через партнёра)',
          'Ежемесячный CFO-отчёт',
        ],
        cta: 'Обсудить условия',
      },
    },
    contact: {
      title: 'Свяжитесь с нами',
      sub: 'Есть вопросы или предложения? Мы всегда готовы помочь.',
      phone: '+998 88 487 75 30',
      telegram: '@Oybek_98765',
      form: {
        name: 'Ваше имя',
        phone: 'Ваш телефон',
        message: 'Сообщение',
        submit: 'Отправить',
        placeholder_name: 'Исмаил Каримов',
        placeholder_phone: '+998 90 000 00 00',
        placeholder_msg: 'Напишите ваш вопрос...',
      },
    },
    footer: {
      copy: '© 2026 Orbita. Все права защищены.',
      links: ['Политика конфиденциальности', 'Условия'],
    },
  },
}

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Reveal({ children, className = '', stagger = false }: { children: ReactNode; className?: string; stagger?: boolean }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`${stagger ? 'stagger-children' : 'reveal'} ${className}`}>
      {children}
    </div>
  )
}

// ─── 3D Icons ─────────────────────────────────────────────────────────────────

function IconCoins({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="coinGrad1" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFE97A" />
          <stop offset="60%" stopColor="#F5C518" />
          <stop offset="100%" stopColor="#C8960A" />
        </radialGradient>
        <radialGradient id="coinGrad2" cx="35%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#FFF0A0" />
          <stop offset="55%" stopColor="#F0B90B" />
          <stop offset="100%" stopColor="#A87400" />
        </radialGradient>
        <radialGradient id="coinGrad3" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#FFFBE8" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        <filter id="coinShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#C8960A" floodOpacity="0.3" />
        </filter>
        <linearGradient id="shine1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.45" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Back coin */}
      <ellipse cx="47" cy="52" rx="18" ry="5" fill="#A87400" opacity="0.3" />
      <circle cx="48" cy="42" r="18" fill="url(#coinGrad1)" filter="url(#coinShadow)" />
      <circle cx="48" cy="42" r="18" fill="url(#shine1)" />
      <text x="48" y="47" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#8B6400" fontFamily="Arial">$</text>
      {/* Middle coin */}
      <ellipse cx="40" cy="44" rx="17" ry="4.5" fill="#A87400" opacity="0.25" />
      <circle cx="40" cy="34" r="17" fill="url(#coinGrad2)" filter="url(#coinShadow)" />
      <circle cx="40" cy="34" r="17" fill="url(#shine1)" />
      <text x="40" y="39" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#7A5800" fontFamily="Arial">$</text>
      {/* Front coin */}
      <ellipse cx="32" cy="38" rx="16" ry="4" fill="#A87400" opacity="0.2" />
      <circle cx="32" cy="28" r="16" fill="url(#coinGrad3)" filter="url(#coinShadow)" />
      <circle cx="32" cy="28" r="16" fill="url(#shine1)" />
      <text x="32" y="33" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#6B4E00" fontFamily="Arial">$</text>
    </svg>
  )
}

function IconLaptop({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lapBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6EE7FF" />
          <stop offset="50%" stopColor="#3B9EFF" />
          <stop offset="100%" stopColor="#1A6FD4" />
        </linearGradient>
        <linearGradient id="lapScreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0F4FF" />
          <stop offset="100%" stopColor="#B8DFFF" />
        </linearGradient>
        <linearGradient id="lapBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7EC8FF" />
          <stop offset="100%" stopColor="#2980D4" />
        </linearGradient>
        <linearGradient id="lapShine" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <filter id="lapShadow">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#1A6FD4" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Screen body */}
      <rect x="12" y="12" width="48" height="34" rx="5" fill="url(#lapBody)" filter="url(#lapShadow)" />
      <rect x="14" y="14" width="44" height="30" rx="3" fill="url(#lapScreen)" />
      {/* Screen content (mini chart) */}
      <polyline points="20,36 26,30 32,33 38,24 44,27 50,20" stroke="#3B9EFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="20" r="2" fill="#00E87A" />
      {/* Base */}
      <rect x="8" y="46" width="56" height="7" rx="3.5" fill="url(#lapBase)" />
      <rect x="28" y="53" width="16" height="3" rx="1.5" fill="#1A6FD4" />
      {/* Shine */}
      <rect x="12" y="12" width="48" height="34" rx="5" fill="url(#lapShine)" />
    </svg>
  )
}

function IconChart({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#EEF4FF" />
        </linearGradient>
        <linearGradient id="bar1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00E87A" />
          <stop offset="100%" stopColor="#00A855" />
        </linearGradient>
        <linearGradient id="bar2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3BAAFF" />
          <stop offset="100%" stopColor="#1A6FD4" />
        </linearGradient>
        <linearGradient id="bar3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD166" />
          <stop offset="100%" stopColor="#F0A500" />
        </linearGradient>
        <filter id="docShadow">
          <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#94A3B8" floodOpacity="0.25" />
        </filter>
        <linearGradient id="docShine" x1="0%" y1="0%" x2="60%" y2="80%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Document */}
      <rect x="10" y="8" width="48" height="60" rx="6" fill="url(#docGrad)" filter="url(#docShadow)" />
      {/* Fold corner */}
      <path d="M46 8 L58 20 L46 20 Z" fill="#CBD5E1" />
      <path d="M46 8 L58 20 L46 20 Z" fill="white" opacity="0.5" />
      {/* Grid lines */}
      <line x1="16" y1="44" x2="52" y2="44" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="16" y1="36" x2="52" y2="36" stroke="#E2E8F0" strokeWidth="1" />
      {/* Bars */}
      <rect x="18" y="32" width="8" height="12" rx="2" fill="url(#bar2)" />
      <rect x="30" y="24" width="8" height="20" rx="2" fill="url(#bar1)" />
      <rect x="42" y="28" width="8" height="16" rx="2" fill="url(#bar3)" />
      {/* Lines below */}
      <rect x="16" y="52" width="36" height="3" rx="1.5" fill="#E2E8F0" />
      <rect x="16" y="58" width="24" height="3" rx="1.5" fill="#E2E8F0" />
      {/* Shine */}
      <rect x="10" y="8" width="48" height="60" rx="6" fill="url(#docShine)" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5.99 5.99l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconTelegram() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function IconX() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        background: 'linear-gradient(135deg, #00E87A 0%, #00C468 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,232,122,0.4)',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" fill="white" />
          <line x1="12" y1="3" x2="12" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="12" x2="7" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="17" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: '#0f172a', letterSpacing: '-0.5px' }}>
        Orbita
      </span>
    </div>
  )
}

// ─── Hero 3D Floating Icon ─────────────────────────────────────────────────────

function FloatingCoins() {
  return (
    <div style={{ position: 'relative', width: 320, height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Glow backdrop */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(0,232,122,0.18) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />
      {/* Floating animation via keyframes in style tag */}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes floatY2 {
          0%, 100% { transform: translateY(-8px) rotate(5deg); }
          50% { transform: translateY(8px) rotate(-5deg); }
        }
        @keyframes floatY3 {
          0%, 100% { transform: translateY(4px) rotate(2deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(110px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
        }
        @keyframes orbit2 {
          0% { transform: rotate(180deg) translateX(110px) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(110px) rotate(-540deg); }
        }
        @keyframes pulseGreen {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
      `}</style>

      {/* Orbiting dots */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: 10, height: 10, marginLeft: -5, marginTop: -5,
        borderRadius: '50%', background: 'var(--color-accent)',
        animation: 'orbit 6s linear infinite',
        boxShadow: '0 0 12px rgba(0,232,122,0.8)',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: 6, height: 6, marginLeft: -3, marginTop: -3,
        borderRadius: '50%', background: '#FFD700',
        animation: 'orbit2 9s linear infinite',
        boxShadow: '0 0 10px rgba(255,215,0,0.7)',
      }} />

      {/* Ring */}
      <div style={{
        position: 'absolute', width: 220, height: 220,
        borderRadius: '50%',
        border: '1.5px dashed rgba(0,232,122,0.2)',
      }} />

      {/* Main coin stack */}
      <div style={{ animation: 'floatY 4s ease-in-out infinite', zIndex: 3 }}>
        <IconCoins size={160} />
      </div>

      {/* Small floating coins */}
      <div style={{
        position: 'absolute', top: 45, right: 40,
        animation: 'floatY2 3.5s ease-in-out infinite',
        opacity: 0.85,
      }}>
        <IconCoins size={60} />
      </div>
      <div style={{
        position: 'absolute', bottom: 50, left: 30,
        animation: 'floatY3 5s ease-in-out infinite',
        opacity: 0.7,
      }}>
        <IconCoins size={48} />
      </div>

      {/* Stat bubble */}
      <div style={{
        position: 'absolute', bottom: 30, right: 20,
        background: 'white',
        borderRadius: 14,
        padding: '8px 14px',
        boxShadow: '0 8px 24px rgba(15,23,42,0.12)',
        display: 'flex', alignItems: 'center', gap: 8,
        animation: 'floatY2 5s ease-in-out infinite',
        zIndex: 4,
      }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00E87A', boxShadow: '0 0 6px rgba(0,232,122,0.8)', animation: 'pulseGreen 2s ease-in-out infinite' }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: '#0f172a' }}>+20 клиентов</span>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<'uz' | 'ru'>('uz')
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = T[lang]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* ── Header ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(248,250,252,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(226,232,240,0.6)',
      }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo />

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="hidden-mobile">
            {(['about', 'services', 'pricing', 'contact'] as const).map(key => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14,
                  color: '#475569', padding: '8px 14px', borderRadius: 10,
                  transition: 'color 0.15s, background 0.15s',
                }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = '#0f172a'; (e.target as HTMLElement).style.background = 'rgba(15,23,42,0.05)' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = '#475569'; (e.target as HTMLElement).style.background = 'transparent' }}
              >
                {t.nav[key]}
              </button>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Lang switcher */}
            <button
              onClick={() => setLang(l => l === 'uz' ? 'ru' : 'uz')}
              style={{
                background: 'white', border: '1.5px solid #e2e8f0',
                borderRadius: 10, padding: '7px 14px',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
                color: '#475569', cursor: 'pointer',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = 'var(--color-accent)'; (e.target as HTMLElement).style.color = 'var(--color-accent-dim)' }}
              onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = '#e2e8f0'; (e.target as HTMLElement).style.color = '#475569' }}
            >
              {t.lang}
            </button>

            {/* CTA */}
            <button className="btn-accent hidden-mobile" onClick={() => scrollTo('contact')} style={{ padding: '10px 22px', fontSize: 14, borderRadius: 12 }}>
              {t.cta}
            </button>

            {/* Mobile burger */}
            <button
              className="show-mobile"
              onClick={() => setMobileOpen(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0f172a', padding: 6 }}
            >
              {mobileOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'white', borderBottom: '1px solid #e2e8f0',
            padding: '12px 24px 20px',
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            {(['about', 'services', 'pricing', 'contact'] as const).map(key => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15,
                  color: '#475569', padding: '12px 0', textAlign: 'left',
                  borderBottom: '1px solid #f1f5f9',
                }}
              >
                {t.nav[key]}
              </button>
            ))}
            <button className="btn-accent" onClick={() => scrollTo('contact')} style={{ marginTop: 12, justifyContent: 'center' }}>
              {t.cta}
            </button>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 1160, margin: '0 auto', padding: '80px 24px 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="hero-grid">
        <div>
          <Reveal>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,232,122,0.1)', border: '1px solid rgba(0,232,122,0.3)',
              borderRadius: 100, padding: '6px 14px', marginBottom: 28,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-accent)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: 'var(--color-accent-dim)' }}>
                {t.hero.badge}
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 58px)', lineHeight: 1.1,
              color: '#0f172a', letterSpacing: '-1.5px', whiteSpace: 'pre-line',
              marginBottom: 24,
            }}>
              {t.hero.title}
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: '#64748b', marginBottom: 40, maxWidth: 480 }}>
              {t.hero.sub}
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button className="btn-accent" onClick={() => scrollTo('contact')}>
                {t.hero.cta}
              </button>
              <button className="btn-outline" onClick={() => scrollTo('services')}>
                {t.hero.cta2}
              </button>
            </div>
          </Reveal>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FloatingCoins />
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" style={{ background: '#0f172a', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 46px)', color: 'white',
                letterSpacing: '-1px', marginBottom: 16,
              }}>
                {t.about.title}
              </h2>
              <p style={{ color: '#94a3b8', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>
                {t.about.sub}
              </p>
            </div>
          </Reveal>

          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="stats-grid">
              {t.about.stats.map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 20, padding: '36px 24px', textAlign: 'center',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,232,122,0.08)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,232,122,0.3)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)' }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: 'clamp(42px, 5vw, 64px)', color: 'var(--color-accent)',
                    lineHeight: 1, marginBottom: 10, letterSpacing: '-2px',
                  }}>
                    {s.value}
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: 15, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 46px)', color: '#0f172a',
                letterSpacing: '-1px', marginBottom: 16,
              }}>
                {t.services.title}
              </h2>
              <p style={{ color: '#64748b', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>
                {t.services.sub}
              </p>
            </div>
          </Reveal>

          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }} className="services-grid">
              {t.services.items.map((s, i) => (
                <div key={i} className="card-hover" style={{
                  background: 'white',
                  borderRadius: 24,
                  padding: '44px 36px',
                  boxShadow: '0 4px 24px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)',
                  border: '1px solid #f1f5f9',
                  cursor: 'default',
                }}>
                  <div style={{ marginBottom: 28 }}>
                    {s.icon === 'coins' && <IconCoins size={72} />}
                    {s.icon === 'laptop' && <IconLaptop size={72} />}
                    {s.icon === 'chart' && <IconChart size={72} />}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: 20, color: '#0f172a', marginBottom: 12,
                  }}>
                    {s.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.7 }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" style={{ background: '#f8fafc', padding: '100px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 46px)', color: '#0f172a',
                letterSpacing: '-1px', marginBottom: 16,
              }}>
                {t.pricing.title}
              </h2>
              <p style={{ color: '#64748b', fontSize: 17 }}>{t.pricing.sub}</p>
            </div>
          </Reveal>

          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }} className="pricing-grid">
              {/* Basic */}
              <div className="card-hover" style={{
                background: 'white', borderRadius: 28, padding: '44px 40px',
                boxShadow: '0 4px 32px rgba(15,23,42,0.08), 0 1px 4px rgba(15,23,42,0.04)',
                border: '1px solid #e2e8f0',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  display: 'inline-block', background: 'rgba(0,232,122,0.12)',
                  color: 'var(--color-accent-dim)', fontFamily: 'var(--font-display)',
                  fontWeight: 700, fontSize: 12, padding: '4px 12px', borderRadius: 100,
                  marginBottom: 20, letterSpacing: '0.5px', textTransform: 'uppercase',
                }}>
                  {t.pricing.basic.badge}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: '#0f172a', marginBottom: 6 }}>
                  {t.pricing.basic.name}
                </h3>
                <p style={{ color: '#64748b', fontSize: 14, marginBottom: 28 }}>{t.pricing.basic.desc}</p>
                <div style={{ marginBottom: 32 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, color: '#0f172a', letterSpacing: '-1px' }}>
                    {t.pricing.basic.price}
                  </span>
                  <span style={{ color: '#94a3b8', fontSize: 15, marginLeft: 6 }}>{t.pricing.basic.period}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
                  {t.pricing.basic.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(0,232,122,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--color-accent-dim)' }}>
                        <IconCheck />
                      </div>
                      <span style={{ color: '#475569', fontSize: 15 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-accent" onClick={() => scrollTo('contact')} style={{ width: '100%', justifyContent: 'center' }}>
                  {t.pricing.basic.cta}
                </button>
              </div>

              {/* Corporate */}
              <div className="card-hover" style={{
                background: '#0f172a', borderRadius: 28, padding: '44px 40px',
                boxShadow: '0 8px 48px rgba(15,23,42,0.2)',
                border: '1px solid rgba(255,255,255,0.06)',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Glow accent */}
                <div style={{
                  position: 'absolute', top: -60, right: -60,
                  width: 200, height: 200, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0,232,122,0.15) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  display: 'inline-block', background: 'rgba(0,232,122,0.15)',
                  color: 'var(--color-accent)', fontFamily: 'var(--font-display)',
                  fontWeight: 700, fontSize: 12, padding: '4px 12px', borderRadius: 100,
                  marginBottom: 20, letterSpacing: '0.5px', textTransform: 'uppercase',
                }}>
                  {t.pricing.corp.badge}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'white', marginBottom: 6 }}>
                  {t.pricing.corp.name}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: 14, marginBottom: 28 }}>{t.pricing.corp.desc}</p>
                <div style={{ marginBottom: 32 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--color-accent)' }}>
                    {t.pricing.corp.priceLabel}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
                  {t.pricing.corp.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(0,232,122,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--color-accent)' }}>
                        <IconCheck />
                      </div>
                      <span style={{ color: '#cbd5e1', fontSize: 15 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-accent" onClick={() => scrollTo('contact')} style={{ width: '100%', justifyContent: 'center' }}>
                  {t.pricing.corp.cta}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="contact-grid">
          <Reveal>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 46px)', color: '#0f172a',
                letterSpacing: '-1px', marginBottom: 16,
              }}>
                {t.contact.title}
              </h2>
              <p style={{ color: '#64748b', fontSize: 17, lineHeight: 1.7, marginBottom: 48 }}>
                {t.contact.sub}
              </p>

              {/* Phone */}
              <a
                href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '20px 24px', background: 'white',
                  borderRadius: 18, boxShadow: '0 2px 16px rgba(15,23,42,0.06)',
                  border: '1px solid #f1f5f9', marginBottom: 16,
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(15,23,42,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(15,23,42,0.06)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'linear-gradient(135deg, #00E87A 0%, #00C468 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(0,232,122,0.35)',
                }}>
                  <IconPhone />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500, marginBottom: 2 }}>
                    {lang === 'uz' ? 'Telefon' : 'Телефон'}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: '#0f172a', letterSpacing: '-0.5px' }}>
                    {t.contact.phone}
                  </div>
                </div>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/Oybek_98765"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '20px 24px', background: 'white',
                  borderRadius: 18, boxShadow: '0 2px 16px rgba(15,23,42,0.06)',
                  border: '1px solid #f1f5f9',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(15,23,42,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(15,23,42,0.06)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'linear-gradient(135deg, #2AABEE 0%, #1A8CD8 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(42,171,238,0.35)',
                }}>
                  <IconTelegram />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500, marginBottom: 2 }}>
                    Telegram
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: '#0f172a', letterSpacing: '-0.5px' }}>
                    {t.contact.telegram}
                  </div>
                </div>
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal>
            <ContactForm t={t} lang={lang} />
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#0f172a', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <Logo />
          <div style={{ color: '#64748b', fontSize: 14 }}>{t.footer.copy}</div>
          <div style={{ display: 'flex', gap: 20 }}>
            {t.footer.links.map((l, i) => (
              <a key={i} href="#" style={{ color: '#64748b', fontSize: 14, textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = '#94a3b8' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = '#64748b' }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:last-child { display: none !important; }
          .hero-grid .btn-accent, .hero-grid .btn-outline { width: 100%; justify-content: center; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </div>
  )
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm({ t, lang }: { t: typeof T['uz']; lang: string }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', phone: '', message: '' })
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px',
    border: '1.5px solid #e2e8f0', borderRadius: 14,
    fontFamily: 'var(--font-body)', fontSize: 15, color: '#0f172a',
    background: 'white', outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box' as const,
  }

  return (
    <form onSubmit={handleSubmit} style={{
      background: 'white', borderRadius: 28, padding: '44px 40px',
      boxShadow: '0 4px 32px rgba(15,23,42,0.07), 0 1px 4px rgba(15,23,42,0.04)',
      border: '1px solid #f1f5f9',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div>
          <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: '#475569', marginBottom: 8 }}>
            {t.contact.form.name}
          </label>
          <input
            style={inputStyle}
            placeholder={t.contact.form.placeholder_name}
            value={form.name}
            onChange={e => setForm(v => ({ ...v, name: e.target.value }))}
            onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,232,122,0.12)' }}
            onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none' }}
            required
          />
        </div>
        <div>
          <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: '#475569', marginBottom: 8 }}>
            {t.contact.form.phone}
          </label>
          <input
            style={inputStyle}
            placeholder={t.contact.form.placeholder_phone}
            value={form.phone}
            onChange={e => setForm(v => ({ ...v, phone: e.target.value }))}
            onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,232,122,0.12)' }}
            onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: '#475569', marginBottom: 8 }}>
            {t.contact.form.message}
          </label>
          <textarea
            style={{ ...inputStyle, height: 120, resize: 'none' }}
            placeholder={t.contact.form.placeholder_msg}
            value={form.message}
            onChange={e => setForm(v => ({ ...v, message: e.target.value }))}
            onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,232,122,0.12)' }}
            onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none' }}
            required
          />
        </div>
        <button type="submit" className="btn-accent" style={{ justifyContent: 'center' }}>
          {sent ? (lang === 'uz' ? 'Yuborildi ✓' : 'Отправлено ✓') : t.contact.form.submit}
        </button>
      </div>
    </form>
  )
}
