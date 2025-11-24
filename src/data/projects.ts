export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Azercell Digital',
    category: 'E-commerce & Branding',
    description: 'Complete digital transformation for Azerbaijan\'s leading telecom provider',
    tags: ['Web Design', 'E-commerce', 'Branding'],
    image: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#1a73e8'
  },
  {
    id: '2',
    title: 'Caspian Properties',
    category: 'Real Estate Platform',
    description: 'Premium real estate marketplace with advanced search and 3D tours',
    tags: ['Web Design', 'Development', 'Strategy'],
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#2d3748'
  },
  {
    id: '3',
    title: 'Baku Fine Dining',
    category: 'Restaurant & Hospitality',
    description: 'Elegant website for high-end restaurant group showcasing culinary excellence',
    tags: ['Web Design', 'Branding'],
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#c62828'
  },
  {
    id: '4',
    title: 'Silk Road Heritage',
    category: 'Cultural Platform',
    description: 'Interactive digital experience celebrating Azerbaijan\'s rich cultural heritage',
    tags: ['Web Design', 'Development', 'Interactive'],
    image: 'https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#f59e0b'
  },
  {
    id: '5',
    title: 'Energy Solutions',
    category: 'Corporate Website',
    description: 'Modern corporate identity for renewable energy innovator',
    tags: ['Web Design', 'Branding', 'Strategy'],
    image: 'https://images.pexels.com/photos/414807/pexels-photo-414807.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#10b981'
  },
  {
    id: '6',
    title: 'Fashion Boutique',
    category: 'E-commerce',
    description: 'Sophisticated online store for luxury fashion retailer',
    tags: ['E-commerce', 'Development'],
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#000000'
  }
];
