export type Language = 'en' | 'ru';

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    courses: 'Courses',
    prices: 'Prices',
    contacts: 'Contacts',
    getStarted: 'Get Started',
    login: 'Login',
    register: 'Register',
    
    // Hero Section
    heroTitle: 'Master Professional Trading',
    heroSubtitle: 'Join Momentum Trading Pro and learn from expert traders with proven strategies and comprehensive education',
    heroButton: 'Start Your Journey',
    
    // Features
    features: 'Features',
    expertTraining: 'Expert Training',
    expertTrainingDesc: 'Learn from professional traders with years of market experience',
    practicalApproach: 'Practical Approach',
    practicalApproachDesc: 'Hands-on learning with real market scenarios and live trading sessions',
    certification: 'Certification',
    certificationDesc: 'Get certified upon completion with industry-recognized credentials',
    
    // About
    aboutTitle: 'About Momentum Trading Pro',
    aboutDescription: 'We are a leading trading education platform dedicated to transforming aspiring traders into profitable professionals through comprehensive courses and expert mentorship.',
    
    // Courses
    coursesTitle: 'Our Courses',
    beginner: 'Beginner',
    intermediate: 'Intermediate', 
    advanced: 'Advanced',
    
    // Pricing
    pricingTitle: 'Choose Your Plan',
    basic: 'Basic',
    premium: 'Premium',
    vip: 'VIP',
    
    // Contact
    contactTitle: 'Contact Us',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    
    // Dashboard
    dashboard: 'Dashboard',
    profile: 'Profile',
    homework: 'Homework',
    progress: 'Progress',
    exams: 'Exams',
    certificates: 'Certificates',
    
    // User Roles
    student: 'Student',
    teacher: 'Teacher',
    curator: 'Curator',
    admin: 'Admin',
    
    // Common
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    view: 'View',
    upload: 'Upload',
    download: 'Download',
    grade: 'Grade',
    approve: 'Approve',
    reject: 'Reject',
  },
  ru: {
    // Navigation
    home: 'Главная',
    about: 'О нас',
    courses: 'Курсы',
    prices: 'Цены',
    contacts: 'Контакты',
    getStarted: 'Начать',
    login: 'Войти',
    register: 'Регистрация',
    
    // Hero Section
    heroTitle: 'Мастерство профессиональной торговли',
    heroSubtitle: 'Присоединяйтесь к Momentum Trading Pro и учитесь у экспертов с проверенными стратегиями и комплексным образованием',
    heroButton: 'Начать обучение',
    
    // Features
    features: 'Возможности',
    expertTraining: 'Экспертное обучение',
    expertTrainingDesc: 'Учитесь у профессиональных трейдеров с многолетним опытом работы на рынке',
    practicalApproach: 'Практический подход',
    practicalApproachDesc: 'Практическое обучение с реальными рыночными сценариями и живыми торговыми сессиями',
    certification: 'Сертификация',
    certificationDesc: 'Получите сертификат по завершении с признанными в отрасли квалификациями',
    
    // About
    aboutTitle: 'О Momentum Trading Pro',
    aboutDescription: 'Мы - ведущая образовательная платформа по торговле, посвященная превращению начинающих трейдеров в прибыльных профессионалов через комплексные курсы и экспертное наставничество.',
    
    // Courses
    coursesTitle: 'Наши курсы',
    beginner: 'Начинающий',
    intermediate: 'Средний',
    advanced: 'Продвинутый',
    
    // Pricing
    pricingTitle: 'Выберите план',
    basic: 'Базовый',
    premium: 'Премиум',
    vip: 'VIP',
    
    // Contact
    contactTitle: 'Связаться с нами',
    email: 'Электронная почта',
    phone: 'Телефон',
    address: 'Адрес',
    
    // Dashboard
    dashboard: 'Панель управления',
    profile: 'Профиль',
    homework: 'Домашние задания',
    progress: 'Прогресс',
    exams: 'Экзамены',
    certificates: 'Сертификаты',
    
    // User Roles
    student: 'Студент',
    teacher: 'Преподаватель',
    curator: 'Куратор',
    admin: 'Администратор',
    
    // Common
    submit: 'Отправить',
    cancel: 'Отмена',
    save: 'Сохранить',
    edit: 'Редактировать',
    delete: 'Удалить',
    view: 'Просмотр',
    upload: 'Загрузить',
    download: 'Скачать',
    grade: 'Оценить',
    approve: 'Одобрить',
    reject: 'Отклонить',
  }
};

export const getTranslation = (key: keyof typeof translations.en, language: Language): string => {
  return translations[language][key] || translations.en[key] || key;
};