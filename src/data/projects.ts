export type ProjectTranslation = {
  title: string;
  category: string;
  description: string;
  tags: string[];
};

export type Project = {
  id: string;
  image: string;
  color: string;
  translations: {
    en: ProjectTranslation;
    ru: ProjectTranslation;
    az: ProjectTranslation;
  };
};

export const projects: Project[] = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#1a73e8',
    translations: {
      en: {
        title: 'Flagship hero concepts',
        category: 'Experience design',
        description: 'Immersive hero areas with calibrated motion, layered typography, and decisive calls to action.',
        tags: ['Art direction', 'Motion', 'UX copy']
      },
      ru: {
        title: 'Флагманские hero-блоки',
        category: 'Дизайн опыта',
        description: 'Геро-секции с настроенной анимацией, выразительной типографикой и чёткими CTA.',
        tags: ['Арт-дирекция', 'Анимация', 'UX-копирайт']
      },
      az: {
        title: 'Flaqman hero konseptləri',
        category: 'Təcrübə dizaynı',
        description: 'Yüksək vizuallı hero sahələri: ölçülü animasiya, qat-qat tipografiya və dəqiq CTA.',
        tags: ['Art-direksiya', 'Animasiya', 'UX mətni']
      }
    }
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#2d3748',
    translations: {
      en: {
        title: 'Navigation systems',
        category: 'Interface patterns',
        description: 'Minimal, responsive navigation bars with smooth disclosure states and intuitive information scent.',
        tags: ['UX', 'Micro-interactions', 'Responsive']
      },
      ru: {
        title: 'Навигационные системы',
        category: 'Паттерны интерфейса',
        description: 'Минималистичные навигации с плавными раскрытиями и понятной логикой переходов.',
        tags: ['UX', 'Микровзаимодействия', 'Адаптив']
      },
      az: {
        title: 'Naviqasiya sistemləri',
        category: 'İnterfeys nümunələri',
        description: 'Minimal və responsiv menyular, hamar açılma vəziyyətləri və intuitiv istiqamətləndirmə.',
        tags: ['UX', 'Mikro-interaksiyalar', 'Responsiv']
      }
    }
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#c62828',
    translations: {
      en: {
        title: 'Editorial card layouts',
        category: 'Design systems',
        description: 'Glassmorphism cards with hover depth, structured hierarchy, and flexible content modules.',
        tags: ['Layout', 'Visual design', 'Components']
      },
      ru: {
        title: 'Редакционные карточки',
        category: 'Дизайн-системы',
        description: 'Карточки в стилистике glassmorphism с глубиной при наведении, иерархией и гибкими модулями.',
        tags: ['Компоненты', 'Визуал', 'Макет']
      },
      az: {
        title: 'Redaksiya kart maketləri',
        category: 'Dizayn sistemləri',
        description: 'Glassmorphism kartları: hover zamanı dərinlik, strukturlaşdırılmış iyerarxiya və çevik modullar.',
        tags: ['Komponentlər', 'Vizuallıq', 'Maketi']
      }
    }
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#f59e0b',
    translations: {
      en: {
        title: 'Conversion form flows',
        category: 'Product UI',
        description: 'Accessible forms with validation states, inline guidance, and micro-interactions that boost completion.',
        tags: ['Forms', 'Accessibility', 'Product']
      },
      ru: {
        title: 'Конверсионные формы',
        category: 'Продуктовый UI',
        description: 'Доступные формы с подсказками, валидацией и микровзаимодействиями, повышающими заполнение.',
        tags: ['Формы', 'Доступность', 'Продукт']
      },
      az: {
        title: 'Konversiya yönümlü formalar',
        category: 'Məhsul UI',
        description: 'Əlçatan formalar: validasiya mərhələləri, daxili bələdçi mətnləri və tamamlanmanı artıran mikro hərəkətlər.',
        tags: ['Formalar', 'Əlçatanlıq', 'Məhsul']
      }
    }
  },
  {
    id: '5',
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#10b981',
    translations: {
      en: {
        title: 'Typography systems',
        category: 'Design language',
        description: 'Hierarchical type scales, bespoke font pairing, and responsive text treatments for clarity.',
        tags: ['Typography', 'Brand', 'UI kit']
      },
      ru: {
        title: 'Типографические системы',
        category: 'Язык дизайна',
        description: 'Типовые шкалы, пары шрифтов и адаптивные текстовые стили для читабельности.',
        tags: ['Типографика', 'Бренд', 'UI kit']
      },
      az: {
        title: 'Tipografiya sistemləri',
        category: 'Dizayn dili',
        description: 'Oxunaqlılıq üçün iyerarxik ölçülər, xüsusi şrift cütləri və responsiv mətn üslubları.',
        tags: ['Tipografiya', 'Brend', 'UI kit']
      }
    }
  },
  {
    id: '6',
    image: 'https://images.pexels.com/photos/1428171/pexels-photo-1428171.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#000000',
    translations: {
      en: {
        title: 'Color choreography',
        category: 'Design systems',
        description: 'Accessible palettes with contrast checks, gradients, and brand-safe combinations for every surface.',
        tags: ['Color', 'Accessibility', 'Branding']
      },
      ru: {
        title: 'Цветовые системы',
        category: 'Дизайн-системы',
        description: 'Палитры с учётом контраста, градиентов и брендовых сочетаний для любых поверхностей.',
        tags: ['Цвет', 'Доступность', 'Брендинг']
      },
      az: {
        title: 'Rəng xoreoqrafiyası',
        category: 'Dizayn sistemləri',
        description: 'Hər səth üçün kontrast yoxlamalı, brendə uyğun və gradientli əlçatan palitralar.',
        tags: ['Rəng', 'Əlçatanlıq', 'Brendinq']
      }
    }
  }
];
