// Data structure for LegatoSchool

export interface LessonType {
  id: string;
  name: string;
  instrument: 'piano' | 'cello';
  age: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  features: string[];
}

export interface ProgramType {
  id: string;
  name: string;
  instrument: 'piano' | 'cello';
  age: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  features: string[];
}

export interface EducationType {
  time: string;
  title: string;
  organization: string;
  description: string;
}

export interface ExperienceType {
  company: string;
  position: string;
  time: string;
  description: string;
  logo: string;
}

export const siteInfo = {
  name: 'Legato School',
  tagline: 'By Rim',
  email: 'info@legatoschool.com',
  phone: '71026139',
  countryCode: '+961',
  whatsappLink: 'https://wa.me/96171026139',
  instagram: 'https://www.instagram.com/legatoschool.music',
  youtube: 'https://youtube.com/@rimfarhat1967',
  calendlyUrl: 'https://calendly.com/legatoschool-info/30min',
};

export const hero = {
  title: 'Unleash Your Musical Potential',
  subtitle: 'Personalized piano and cello lessons for all ages. Master technique, harmony, and expression in a supportive environment.',
};

export const lessons: LessonType[] = [
  {
    id: 'piano-in-person',
    name: 'In-Person Piano Lessons',
    instrument: 'piano',
    age: 'Age 5+',
    description: 'Experience the joy of playing the piano with our personalized in-person private lessons. Perfect for students of all ages and skill levels.',
    price: '$15',
    duration: '1 hour per session',
    icon: '🎹',
    features: [
      'One-on-one instruction',
      'Customized curriculum',
      'Performance opportunities',
      'Music theory integration',
    ],
  },
  {
    id: 'piano-online',
    name: 'Online Piano Lessons',
    instrument: 'piano',
    age: 'Age 11+',
    description: 'Discover the joy of playing the piano from the comfort of your own home with our personalized online private lessons.',
    price: '$15',
    duration: '1 hour per session',
    icon: '💻',
    features: [
      'Interactive video sessions',
      'Flexible scheduling',
      'Digital resources included',
      'Progress tracking',
    ],
  },
  {
    id: 'cello-in-person',
    name: 'In-Person Cello Lessons',
    instrument: 'cello',
    age: 'Age 7+',
    description: 'Explore the rich, warm tones of the cello with expert guidance. Our in-person lessons focus on technique, posture, and musical expression.',
    price: '$15',
    duration: '1 hour per session',
    icon: '🎻',
    features: [
      'Proper bow technique',
      'Posture and positioning',
      'Classical repertoire',
      'Ensemble preparation',
    ],
  },
  {
    id: 'cello-online',
    name: 'Online Cello Lessons',
    instrument: 'cello',
    age: 'Age 11+',
    description: 'Learn cello from anywhere with our comprehensive online lessons. Perfect for continuing students or those starting their cello journey.',
    price: '$15',
    duration: '1 hour per session',
    icon: '🌐',
    features: [
      'HD video instruction',
      'Technique demonstrations',
      'Practice guidance',
      'Repertoire selection',
    ],
  },
];

export const programs: ProgramType[] = [
  {
    id: 'melody-star-piano',
    name: 'Melody Star',
    instrument: 'piano',
    age: 'Age 5 to 7',
    description: 'Master the keys from Do to Si across one octave, gaining proficiency in playing with both hands. Perfect for young beginners!',
    price: '$100',
    duration: '8 sessions, once per week',
    icon: '⭐',
    features: [
      'Basic note reading',
      'Both hands coordination',
      'Simple melodies',
      'Fun, age-appropriate songs',
    ],
  },
  {
    id: 'harmony-hero-piano',
    name: 'Harmony Hero',
    instrument: 'piano',
    age: 'Age 7 to 11',
    description: 'Learn to read and play notes on bass and treble clefs, and progress to playing chords. Apply these skills to short, enjoyable songs.',
    price: '$100',
    duration: '8 sessions, once per week',
    icon: '🦸',
    features: [
      'Bass and treble clef reading',
      'Basic chord progressions',
      'Rhythm fundamentals',
      'Popular song arrangements',
    ],
  },
  {
    id: 'tempo-master-piano',
    name: 'Tempo Master',
    instrument: 'piano',
    age: 'Age 11 to 15',
    description: 'Read and play notes over two octaves, understand rhythm basics, and play songs with chord accompaniment in your left hand.',
    price: '$120',
    duration: '8 sessions, once per week',
    icon: '🎼',
    features: [
      'Extended range (2 octaves)',
      'Rhythm and timing',
      'Left-hand accompaniment',
      'Music theory basics',
    ],
  },
  {
    id: 'sonata-virtuoso-piano',
    name: 'Sonata Virtuoso',
    instrument: 'piano',
    age: 'Age 15+',
    description: 'Master notes across two octaves, rhythm fundamentals, and play songs with joyful harmony, including classic pieces.',
    price: '$120',
    duration: '8 sessions, once per week',
    icon: '🎵',
    features: [
      'Classical repertoire',
      'Advanced harmony',
      'Performance techniques',
      'Musical interpretation',
    ],
  },
];

export const education: EducationType[] = [
  {
    time: '2015 - 2023',
    title: 'Bachelor in Piano',
    organization: 'Lebanese National Higher Conservatory of Music',
    description: 'Developed advanced performance skills and musicality through intensive training, masterclasses, and solo and ensemble opportunities.',
  },
  {
    time: '2019 - 2022',
    title: 'License in Music Education',
    organization: 'Lebanese University',
    description: 'Comprehensive studies in music theory, history, pedagogy, and professional development for music educators.',
  },
];

export const experience: ExperienceType[] = [
  {
    company: 'Private Lessons',
    position: 'Private Piano & Cello Teacher',
    time: '2017 - Present',
    description: 'Delivering expert piano and cello lessons, integrating theory, harmony, and technique for learners of all ages.',
    logo: '/piano_logo.png',
  },
  {
    company: 'Russian Cultural Center',
    position: 'Piano Teacher',
    time: '2023 - 2024',
    description: 'Teaching piano lessons at a cultural center, emphasizing foundational skills, musicality, and performance in a vibrant environment.',
    logo: '/russian_center.png',
  },
  {
    company: 'Safir High School',
    position: 'Music Teacher',
    time: '2017 - 2018',
    description: 'Conducted engaging music classes for all ages, providing comprehensive instruction in piano fundamentals, music theory, and ensemble playing.',
    logo: '/safir_logo.png',
  },
];
