// Navigation data for FIAZ Uniform website

// WhatsApp configuration
export const whatsappConfig = {
  phoneNumber: '923001234567', // Replace with actual WhatsApp number
  message: 'Hi FIAZ Uniform, I would like to inquire about your uniforms.',
};

// Main navigation links
export const navigationLinks = [
  {
    id: 'home',
    name: 'Home',
    href: '/',
  },
  {
    id: 'about',
    name: 'About Us',
    href: '/about-us',
  },
  {
    id: 'contact',
    name: 'Contact',
    href: '/contact-us',
  },
];

// Available Schools (for dropdown navigation)
export const availableSchools = [
  {
    id: 'aga-khan',
    name: 'Aga Khan Higher Secondary School',
    slug: 'aga-khan-school',
    href: '/schools/aga-khan-school',
    location: 'Skardu',
  },
  {
    id: 'kiu',
    name: 'Karakoram International University',
    slug: 'kiu',
    href: '/schools/kiu',
    location: 'Gilgit',
  },
  {
    id: 'army-public',
    name: 'Army Public School',
    slug: 'army-public-school',
    href: '/schools/army-public-school',
    location: 'Skardu',
  },
  // Add more schools as needed
];

// Custom uniform categories (9 categories based on catalog)
// Custom uniform categories (11 categories - added Educational, Tracksuits, Polo Shirts)
export const customCategories = [
  {
    id: 'corporate',
    name: 'Corporate & Office',
    slug: 'corporate',
    href: '/custom/corporate',
    icon: '💼',
    description: 'Professional office wear and corporate uniforms',
  },
  {
    id: 'medical',
    name: 'Medical & Healthcare',
    slug: 'medical',
    href: '/custom/medical',
    icon: '🏥',
    description: 'Professional medical uniforms for healthcare workers',
  },
  {
    id: 'security',
    name: 'Security & Safety',
    slug: 'security',
    href: '/custom/security',
    icon: '🛡️',
    description: 'Durable uniforms for security and safety personnel',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Restaurant',
    slug: 'hospitality',
    href: '/custom/hospitality',
    icon: '👨‍🍳',
    description: 'Stylish uniforms for food service and hospitality',
  },
  {
    id: 'retail',
    name: 'Retail & Shop',
    slug: 'retail',
    href: '/custom/retail',
    icon: '🏪',
    description: 'Professional uniforms for retail and shop staff',
  },
  {
    id: 'educational',
    name: 'Educational Uniforms',
    slug: 'educational',
    href: '/custom/educational',
    icon: '🎓',
    description: 'School, college, and university uniforms',
  },
  {
    id: 'travel',
    name: 'Travel & Service',
    slug: 'travel',
    href: '/custom/travel',
    icon: '✈️',
    description: 'Premium uniforms for travel and service industry',
  },
  {
    id: 'sports',
    name: 'Sports & Athletic',
    slug: 'sports',
    href: '/custom/sports',
    icon: '⚽',
    description: 'Custom sportswear and athletic uniforms',
  },
  {
    id: 'tracksuits',
    name: 'Track Suits',
    slug: 'tracksuits',
    href: '/custom/tracksuits',
    icon: '🏃',
    description: 'Complete range of track suits for all occasions',
  },
  {
    id: 'polo-shirts',
    name: 'Polo Shirts',
    slug: 'polo-shirts',
    href: '/custom/polo-shirts',
    icon: '👕',
    description: 'Cotton and dry-fit polo shirts with customization',
  },
  {
    id: 'accessories',
    name: 'Accessories & Add-ons',
    slug: 'accessories',
    href: '/custom/accessories',
    icon: '🎒',
    description: 'Complete your uniform with essential accessories',
  },
];

// Quick links for footer (exported directly, not nested)
export const quickLinks = [
  { id: 'home', name: 'Home', href: '/' },
  { id: 'about', name: 'About Us', href: '/about-us' },
  { id: 'schools', name: 'Available Schools', href: '/schools' },
  { id: 'custom', name: 'Custom Uniforms', href: '/custom/corporate' },
  { id: 'contact', name: 'Contact Us', href: '/contact-us' },
];

// Social media links (exported directly, not nested)
export const socialLinks = [
  {
    id: 'facebook',
    name: 'Facebook',
    href: 'https://facebook.com/fiazuniform',
    icon: 'facebook',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://instagram.com/fiazuniform',
    icon: 'instagram',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    href: `https://wa.me/${whatsappConfig.phoneNumber}`,
    icon: 'whatsapp',
    isWhatsApp: true,
  },
];

// Footer navigation sections (for reference, but not directly imported)
export const footerNavigation = {
  quickLinks: quickLinks,
  customCategories: [
    { name: 'Corporate', href: '/custom/corporate' },
    { name: 'Medical', href: '/custom/medical' },
    { name: 'Security', href: '/custom/security' },
    { name: 'Hospitality', href: '/custom/hospitality' },
    { name: 'Industrial', href: '/custom/industrial' },
    { name: 'Sports', href: '/custom/sports' },
  ],
  support: [
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns Policy', href: '/returns' },
    { name: 'FAQ', href: '/faq' },
  ],
};

// Social media links (legacy export for compatibility)
export const socialMedia = socialLinks;

// Customization options (used across custom category pages)
export const customizationOptions = [
  {
    id: 'embroidery',
    name: 'Embroidery',
    description: 'High-quality logo and name embroidery',
    icon: '🧵',
  },
  {
    id: 'printing',
    name: 'Printing',
    description: 'Screen print, sublimation, heat transfer',
    icon: '🖨️',
  },
  {
    id: 'colors',
    name: 'Custom Colors',
    description: 'Match your brand theme colors',
    icon: '🎨',
  },
  {
    id: 'fabric',
    name: 'Fabric Choice',
    description: 'Summer/winter fabric options',
    icon: '🧶',
  },
  {
    id: 'safety',
    name: 'Safety Features',
    description: 'Reflective strips and safety gear',
    icon: '⚠️',
  },
  {
    id: 'bulk',
    name: 'Bulk Discounts',
    description: 'Special pricing for large orders',
    icon: '💰',
  },
];