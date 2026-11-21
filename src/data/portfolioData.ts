// ============================================================================
// PANDUAN GANTI FOTO SENDIRI:
// Ganti 3 URL di bawah ini dengan link foto kamu (atau file di folder /public)
// ============================================================================
export const HERO_PHOTO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAgETTPjGu3MfNHKD3kWASRTDoG-1OQGOiqsXGByLbx_GbDtQUDKuO-x9pq8Av4FvfB4zT1u6Tg8KcPzbD_nX7wCc8iR4Tsgps-KdAxlRl06tpZO9gsO3Y7583odWYiRKxB_cRdacWfapnuYOwpXm4epH6JtJtLQtsQiQ8Gb9vHuRR4WVcDHcs9OB8_mrP4q4tk3MlamM6qswdtwqJfdKKzLbiEgW2yuv4WFVpi56s1hUpslwu37Bcy';

export const ABOUT_PHOTO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAgETTPjGu3MfNHKD3kWASRTDoG-1OQGOiqsXGByLbx_GbDtQUDKuO-x9pq8Av4FvfB4zT1u6Tg8KcPzbD_nX7wCc8iR4Tsgps-KdAxlRl06tpZO9gsO3Y7583odWYiRKxB_cRdacWfapnuYOwpXm4epH6JtJtLQtsQiQ8Gb9vHuRR4WVcDHcs9OB8_mrP4q4tk3MlamM6qswdtwqJfdKKzLbiEgW2yuv4WFVpi56s1hUpslwu37Bcy';

export const CONTENT_STYLE_PHOTO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAgETTPjGu3MfNHKD3kWASRTDoG-1OQGOiqsXGByLbx_GbDtQUDKuO-x9pq8Av4FvfB4zT1u6Tg8KcPzbD_nX7wCc8iR4Tsgps-KdAxlRl06tpZO9gsO3Y7583odWYiRKxB_cRdacWfapnuYOwpXm4epH6JtJtLQtsQiQ8Gb9vHuRR4WVcDHcs9OB8_mrP4q4tk3MlamM6qswdtwqJfdKKzLbiEgW2yuv4WFVpi56s1hUpslwu37Bcy';

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
}

export interface ToolItem {
  code: string;
  name: string;
  accentClass: string;
  note: string;
}

export interface AchievementItem {
  title: string;
  year: string;
  issuer: string;
  category: 'literacy' | 'science';
}

export interface FocusArea {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export interface HighlightMetric {
  value: string;
  caption: string;
}

export interface ReviewItem {
  initials: string;
  author: string;
  role: string;
  quote: string;
}

export interface ServicePackage {
  id: string;
  number: string;
  badge: string;
  badgeStyle: 'burgundy' | 'blue';
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
}

export const NAV_LINKS = [
  { label: 'About Me', href: '#about', id: 'about' },
  { label: 'My Work', href: '#content-style', id: 'content-style' },
  { label: 'Review', href: '#reviews', id: 'reviews' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Contacts', href: '#contacts', id: 'contacts' },
] as const;

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    period: '2023 – 2025',
    role: 'Sekretaris Organisasi',
    organization: 'English Club SMA Islam Plus Al Fatih',
  },
  {
    period: '2024 – 2025',
    role: 'Divisi Kreativitas',
    organization: 'OSIS SMA Islam Plus Al Fatih',
  },
  {
    period: '2023 – 2024',
    role: 'Anggota Aktif',
    organization: 'Palang Merah Remaja (PMR) & Tarung Derajat',
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    period: '2026 – Sekarang',
    degree: 'S1 Teknik Informatika',
    institution: 'Institut Teknologi PLN (IT PLN)',
  },
  {
    period: '2023 – 2026',
    degree: 'Jurusan IPA',
    institution: 'SMA Islam Plus Al Fatih',
  },
];

export const CORE_SKILLS: string[] = [
  'Content Strategy',
  'Problem Solving',
  'Analytical Thinking',
  'Public Speaking',
  'Creative Storytelling',
];

export const TOOLS_LIST: ToolItem[] = [
  {
    code: 'Cn',
    name: 'Canva',
    accentClass: 'text-sky-700',
    note: 'Visual branding, carousels, and editorial feeds',
  },
  {
    code: 'Cp',
    name: 'CapCut',
    accentClass: 'text-neutral-900',
    note: 'Short-form pacing, captions, and visual hooks',
  },
  {
    code: 'W',
    name: 'Word',
    accentClass: 'text-blue-700',
    note: 'Structured scripts, reports, and documentation',
  },
  {
    code: 'Xl',
    name: 'Excel',
    accentClass: 'text-emerald-700',
    note: 'Campaign calendars and analytical tracking',
  },
  {
    code: 'Pt',
    name: 'PPT',
    accentClass: 'text-amber-700',
    note: 'Interactive decks for talks and webinars',
  },
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    title: 'Juara 5 Lomba Konten Literasi',
    year: '2024',
    issuer: 'Festival Literasi Sumatera Utara — Balai Bahasa Provinsi Sumatera Utara',
    category: 'literacy',
  },
  {
    title: 'Top 200 Nilai Tertinggi',
    year: '2024',
    issuer: 'Dari 32.864 Peserta — Education Expo & Science Olympiad USU',
    category: 'science',
  },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'tech',
    index: 'Focus 01',
    title: 'Technology & Code',
    tagline: 'Translating informatics logic into approachable visual narratives',
    description:
      'Grounded in S1 Teknik Informatika at IT PLN, I break down technical concepts, productivity workflows, and digital tools into clear, digestible visual explainers for students and general audiences.',
    deliverables: [
      'Tech & campus study workflow carousels',
      'Analytical problem-solving breakdowns',
      'Clean slide decks for technical seminars',
    ],
    tools: ['Canva', 'PPT', 'Excel'],
  },
  {
    id: 'literacy',
    index: 'Focus 02',
    title: 'Literacy & Content',
    tagline: 'Meaningful educational campaigns built on thoughtful writing',
    description:
      'Recognized at Festival Literasi Sumatera Utara 2024 (Juara 5), I craft literacy-driven scripts and educational short-form content that encourage curiosity, reading culture, and clarity of thought.',
    deliverables: [
      'Literacy & book-reflection video essays',
      'Educational campaign copywriting',
      'Structured editorial content calendars',
    ],
    tools: ['Word', 'CapCut', 'Canva'],
  },
  {
    id: 'speaking',
    index: 'Focus 03',
    title: 'Public Speaking & MC',
    tagline: 'Confident, poised hosting for academic, youth, and creative forums',
    description:
      'With organizational leadership experience as Secretary of English Club and OSIS Creativity Division, I facilitate events, moderate webinars, and guide discussions with warm clarity.',
    deliverables: [
      'Bilingual & Indonesian MC scripts and hosting',
      'Webinar & panel moderation',
      'Event rundown & administrative coordination',
    ],
    tools: ['Word', 'PPT'],
  },
  {
    id: 'storytelling',
    index: 'Focus 04',
    title: 'Creative Storytelling',
    tagline: 'Warm editorial pacing that resonates with Gen-Z audiences',
    description:
      'Blending warm aesthetic framing with authentic voiceovers and tight short-form editing, I shape brand and community stories so every frame feels intentional and memorable.',
    deliverables: [
      'Reels & TikTok short-form storytelling',
      'Visual feed direction & moodboards',
      'Narrative hook & script architecture',
    ],
    tools: ['CapCut', 'Canva'],
  },
];

export const HIGHLIGHTS_METRICS: HighlightMetric[] = [
  {
    value: 'Top 200',
    caption: 'Dari 32.864 Peserta USU Science Olympiad 2024',
  },
  {
    value: 'Juara 5',
    caption: 'Festival Literasi Prov. Sumatera Utara 2024',
  },
  {
    value: '100%',
    caption: 'Komitmen pada Analytical Thinking & Problem Solving',
  },
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    initials: 'EC',
    author: 'English Club Mentor',
    role: 'SMA Islam Plus Al Fatih',
    quote:
      '"Syifa memiliki kemampuan luar biasa dalam merapikan struktur organisasi dan administrasi. Detail-oriented sekaligus sangat kreatif dalam membuat bahan visual!"',
  },
  {
    initials: 'BB',
    author: 'Dewan Juri Literasi',
    role: 'Balai Bahasa Sumatera Utara',
    quote:
      '"Konten literasi yang dikembangkan Syifa selalu mengalir natural dan punya pesan mendalam. Paham betul cara mengemas narasi yang relevan untuk audiens generasi muda."',
  },
  {
    initials: 'PL',
    author: 'Rekan Kolaborator',
    role: 'IT PLN Project Team',
    quote:
      '"Kombinasi pola pikir analitis mahasiswa teknik informatika dengan skill komunikasi yang tajam membuat kolaborasi dengan Syifa selalu efisien dan menyenangkan."',
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'package-01',
    number: 'PACKAGE 01',
    badge: 'Visual & Video',
    badgeStyle: 'burgundy',
    title: 'Content & Creative Strategy',
    description:
      'Cocok untuk organisasi, brand rintisan, atau campaign edukatif yang membutuhkan konten rapi dan berdaya tarik visual tinggi.',
    features: [
      'Canva Visual Branding & Feeds Design',
      'CapCut Short-Form Video Editing (Reels/TikTok)',
      'Content Planning & Storytelling Script',
      'Educational & Literacy-driven Copywriting',
    ],
    ctaLabel: 'ENQUIRE PACKAGE 01',
  },
  {
    id: 'package-02',
    number: 'PACKAGE 02',
    badge: 'Speaking & Hosting',
    badgeStyle: 'blue',
    title: 'Public Speaking & Event Host',
    description:
      'Solusi pemandu acara (MC), moderator webinar, presentasi interaktif, serta kolaborasi kegiatan kepemudaan & teknologi.',
    features: [
      'MC & Host Acara Formal / Non-Formal',
      'Moderator Diskusi Teknologi & Literasi',
      'Interactive Presentation Slides (PowerPoint)',
      'Event Coordination & Administrative Support',
    ],
    ctaLabel: 'ENQUIRE PACKAGE 02',
  },
];

export const CONTACT_INFO = {
  email: 'syifanadiyah870@gmail.com',
  instagramHandle: '@syfndy_',
  instagramHref: 'https://www.instagram.com/syfndy_/',
  location: 'Medan, Sumatera Utara  |  Jakarta (Institut Teknologi PLN)',
};
