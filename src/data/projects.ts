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
    title: 'Hero Sections',
    category: 'UI Components',
    description: 'Dynamic hero designs with parallax effects, gradient overlays, and compelling call-to-actions',
    tags: ['Web Design', 'Animation', 'Typography'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#1a73e8'
  },
  {
    id: '2',
    title: 'Navigation Systems',
    category: 'UI Components',
    description: 'Minimal, responsive navigation bars with smooth transitions and intuitive user flows',
    tags: ['Web Design', 'UX', 'Interactive'],
    image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#2d3748'
  },
  {
    id: '3',
    title: 'Card Layouts',
    category: 'Design Patterns',
    description: 'Elegant card designs with glassmorphism effects, hover states, and clean typography',
    tags: ['Web Design', 'Layout', 'Visual'],
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#c62828'
  },
  {
    id: '4',
    title: 'Form Elements',
    category: 'UI Components',
    description: 'Beautiful, accessible form designs with validation states and micro-interactions',
    tags: ['Web Design', 'Forms', 'UX'],
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#f59e0b'
  },
  {
    id: '5',
    title: 'Typography Systems',
    category: 'Design Elements',
    description: 'Hierarchical type scales, custom fonts, and text treatments for digital platforms',
    tags: ['Typography', 'Design', 'Branding'],
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#10b981'
  },
  {
    id: '6',
    title: 'Color Palettes',
    category: 'Design System',
    description: 'Sophisticated color systems with accessibility considerations and brand consistency',
    tags: ['Design', 'Branding', 'Visual'],
    image: 'https://images.pexels.com/photos/1428171/pexels-photo-1428171.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: '#000000'
  }
];
