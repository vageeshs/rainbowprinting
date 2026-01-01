export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  materials: string[];
  applications: string[];
  capabilities: string[];
  icon: string;
  color: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'uv-printing',
    name: 'Direct UV Printing',
    category: 'Flatbed Printing',
    description: 'High-quality direct UV printing on various rigid and flexible materials using advanced flatbed technology.',
    features: [
      'Direct printing on rigid materials',
      'White ink capability for transparent/dark substrates',
      'High-resolution output up to 1440 DPI',
      'Variable drop technology for smooth gradients',
      'Instant curing with UV LED technology'
    ],
    materials: [
      'Glass',
      'MDF (Medium-density fibreboard)',
      'ACP (Aluminum Composite Panel)',
      'PVC - UPVC',
      'Plywood',
      'Acrylic',
      'Sunboard',
      'All Metal Plates',
      'Granites'
    ],
    applications: [
      'Signage and displays',
      'Furniture decoration',
      'Architectural elements',
      'Point of sale materials',
      'Custom artwork reproduction'
    ],
    capabilities: [
      'Print area: 2.5m x 3.1m',
      'White ink printing',
      'Variable drop technology',
      'High-speed production',
      'Edge-to-edge printing'
    ],
    icon: 'Printer',
    color: 'var(--primary-600)',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'banner-printing',
    name: 'Banner Printing',
    category: 'Large Format',
    description: 'Professional large format banner printing for outdoor and indoor advertising with vibrant colors and weather resistance.',
    features: [
      'Roll-to-roll printing technology',
      'Weather-resistant inks',
      'High-resolution graphics',
      'Fast production turnaround',
      'Various banner materials available'
    ],
    materials: [
      'Vinyl banners',
      'Mesh banners',
      'Canvas banners',
      'Fabric banners',
      'Backlit film',
      'Transparent vinyl'
    ],
    applications: [
      'Outdoor advertising',
      'Event banners',
      'Trade show displays',
      'Retail signage',
      'Promotional materials'
    ],
    capabilities: [
      'Widths up to 1.5m',
      'Unlimited length',
      'UV-resistant inks',
      'Quick drying',
      'Easy installation'
    ],
    icon: 'Image',
    color: 'var(--accent-emerald)',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'laser-printing',
    name: 'Digital Laser Printing',
    category: 'Digital Printing',
    description: 'High-volume digital printing for documents, marketing materials, and custom products with professional quality.',
    features: [
      'High-speed digital printing',
      'Variable data printing',
      'Professional color matching',
      'Multiple paper sizes',
      'Finishing options available'
    ],
    materials: [
      'Standard paper',
      'Cardstock',
      'Photo paper',
      'Labels and stickers',
      'Transparencies',
      'Custom substrates'
    ],
    applications: [
      'Business cards',
      'Brochures and flyers',
      'Posters and signs',
      'Labels and packaging',
      'Custom apparel printing'
    ],
    capabilities: [
      'Up to 300 DPI resolution',
      'Color and black & white',
      'Duplex printing',
      'Variable data capability',
      'Professional finishing'
    ],
    icon: 'FileText',
    color: 'var(--accent-rose)',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'laser-cutting',
    name: 'Laser Cutting',
    category: 'Precision Cutting',
    description: 'Precision laser cutting services for various materials with clean edges and intricate designs.',
    features: [
      'High-precision cutting',
      'Clean, sealed edges',
      'Intricate design capability',
      'Multiple material support',
      'Computer-controlled accuracy'
    ],
    materials: [
      'Acrylic',
      'Wood',
      'Fabric',
      'Leather',
      'Paper and cardstock',
      'Foam board',
      'Metal (thin gauge)'
    ],
    applications: [
      'Custom signage',
      'Decorative elements',
      'Prototyping',
      'Art and crafts',
      'Industrial parts'
    ],
    capabilities: [
      'Cutting area: 1.3m x 0.9m',
      'Precision up to 0.1mm',
      'Vector and raster cutting',
      'Engraving capability',
      'Fast processing'
    ],
    icon: 'Scissors',
    color: 'var(--accent-gold)',
    image: '/api/placeholder/400/300'
  }
];

export const categories = [
  'All Services',
  'Flatbed Printing',
  'Large Format',
  'Digital Printing',
  'Precision Cutting'
];



