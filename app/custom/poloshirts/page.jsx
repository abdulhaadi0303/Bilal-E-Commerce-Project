'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappConfig } from '@/lib/data/navigation';
import StatsGrid from '../../../components/customPageComponents/StatsGrid';

export default function PoloShirtsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Carousel images with dynamic titles
  const carouselImages = [
    {
      src: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1920&q=80',
      alt: 'Cotton Polo Shirts',
      title: '100% Cotton Polo Shirts',
      icon: '👕',
    },
    {
      src: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=1920&q=80',
      alt: 'Dry Fit Polo Shirts',
      title: 'Dry Fit Polo Shirts',
      icon: '⚡',
    },
    {
      src: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1920&q=80',
      alt: 'Full Sleeve Polos',
      title: 'Full Sleeve Polo Shirts',
      icon: '🧥',
    },
    {
      src: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=1920&q=80',
      alt: 'Half Sleeve Polos',
      title: 'Half Sleeve Polo Shirts',
      icon: '👔',
    },
    {
      src: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1920&q=80',
      alt: 'Tipped Collar Polos',
      title: 'Tipped Collar Polo Shirts',
      icon: '✨',
    },
    {
      src: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=1920&q=80',
      alt: 'Zipper Polos',
      title: 'Zipper Polo Shirts',
      icon: '🔷',
    },
    {
      src: 'https://images.unsplash.com/photo-1622519407650-3df9883f76e5?w=1920&q=80',
      alt: 'Sublimation Printed Polos',
      title: 'Sublimation Printed Polos',
      icon: '🎨',
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // PRODUCTS
  const products = [
    {
      id: 1,
      name: '100% Cotton Polo Shirts',
      description: 'Classic cotton polo shirts for everyday comfort',
      items: ['Pure Cotton', 'Breathable', 'Soft Fabric', 'Multiple Colors'],
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600',
      basePrice: 'From Rs. 800',
      showPrice: false,
    },
    {
      id: 2,
      name: 'Dry Fit Polo Shirts',
      description: 'Performance dry-fit polos for active wear and sports',
      items: ['Moisture-Wicking', 'Quick Dry', 'Lightweight', 'Athletic Fit'],
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600',
      basePrice: 'From Rs. 900',
      showPrice: false,
    },
    {
      id: 3,
      name: 'Full Sleeve Polo Shirts',
      description: 'Long sleeve polo shirts for professional and casual wear',
      items: ['Full Sleeves', 'Year-Round Wear', 'Professional Look', 'All Fabrics'],
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600',
      basePrice: 'From Rs. 950',
      showPrice: false,
    },
    {
      id: 4,
      name: 'Half Sleeve Polo Shirts',
      description: 'Classic short sleeve polos for warm weather',
      items: ['Short Sleeves', 'Summer Comfort', 'Versatile Style', 'Casual & Formal'],
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600',
      basePrice: 'From Rs. 800',
      showPrice: false,
    },
    {
      id: 5,
      name: 'Tipped Collar Polo Shirts',
      description: 'Stylish polos with contrast tipped collars',
      items: ['Tipped Collar', 'Contrast Colors', 'Modern Design', 'Premium Look'],
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600',
      basePrice: 'From Rs. 850',
      showPrice: false,
    },
    {
      id: 6,
      name: 'Zipper Polo Shirts',
      description: 'Contemporary zipper-front polo shirts',
      items: ['Zipper Front', 'Modern Style', 'Easy Wear', 'Sporty Look'],
      image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600',
      basePrice: 'From Rs. 900',
      showPrice: false,
    },
    {
      id: 7,
      name: 'Pocket Polo Shirts',
      description: 'Practical polo shirts with chest pockets',
      items: ['Chest Pocket', 'Utility Design', 'Professional', 'Logo Ready'],
      image: 'https://images.unsplash.com/photo-1598032895397-69d8b0e08454?w=600',
      basePrice: 'From Rs. 850',
      showPrice: false,
    },
    {
      id: 8,
      name: 'Plain Polo Shirts',
      description: 'Classic solid color polo shirts',
      items: ['Solid Colors', 'Timeless Design', 'All Occasions', 'Easy to Brand'],
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600',
      basePrice: 'From Rs. 750',
      showPrice: false,
    },
    {
      id: 9,
      name: 'Striped Polo Shirts',
      description: 'Stylish striped pattern polo shirts',
      items: ['Stripe Patterns', 'Multiple Designs', 'Casual Style', 'Modern Look'],
      image: 'https://images.unsplash.com/photo-1598032895397-69d8b0e08454?w=600',
      basePrice: 'From Rs. 850',
      showPrice: false,
    },
    {
      id: 10,
      name: 'Sublimation Printed Polos',
      description: 'Full-color sublimation printed polo shirts',
      items: ['All-Over Print', 'Vibrant Colors', 'Custom Designs', 'No Fading'],
      image: 'https://images.unsplash.com/photo-1622519407650-3df9883f76e5?w=600',
      basePrice: 'From Rs. 1,200',
      showPrice: false,
    },
    {
      id: 11,
      name: 'Embroidered Logo Polos',
      description: 'Premium embroidered company logo polo shirts',
      items: ['Quality Embroidery', 'Company Logos', 'Professional Finish', 'Durable'],
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600',
      basePrice: 'From Rs. 900',
      showPrice: false,
    },
    {
      id: 12,
      name: 'Company/Sports Team Polos',
      description: 'Custom polo shirts for companies and sports teams',
      items: ['Team Branding', 'Bulk Orders', 'Custom Colors', 'Logo Options'],
      image: 'https://images.unsplash.com/photo-1602810316693-3667d6f96b35?w=600',
      basePrice: 'From Rs. 800',
      showPrice: false,
    },
  ];

  // USES - COMPACT
  const uses = [
    { name: 'Corporate Uniforms', icon: '💼' },
    { name: 'Sports Teams', icon: '⚽' },
    { name: 'Events & Promotions', icon: '🎪' },
    { name: 'Retail Staff', icon: '🏪' },
    { name: 'Schools & Colleges', icon: '🎓' },
    { name: 'Casual Wear', icon: '👕' },
  ];

  const getWhatsAppMessage = (productName = null) => {
    if (productName) {
      return `Hi FIAZ Uniform, I'm interested in ${productName}. Can you provide more details?`;
    }
    return `Hi FIAZ Uniform, I'm interested in Polo Shirts. Can you provide more details and pricing?`;
  };

  const handleWhatsAppClick = (productName = null) => {
    const message = getWhatsAppMessage(productName);
    const url = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION WITH CAROUSEL */}
      <section className="relative h-[85vh] overflow-hidden">
        {/* Carousel Images */}
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Lighter overlay for better image visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-purple-800/30 to-indigo-900/40"></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-white/90 mb-8 drop-shadow-lg">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/#custom" className="hover:text-white transition">Custom Uniforms</Link>
              <span>/</span>
              <span className="text-white font-medium">Polo Shirts</span>
            </div>
            
            {/* Current Image Title - Large Display */}
            <div className="mb-4 animate-fadeIn">
              <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full">
                <p className="text-lg font-semibold text-white drop-shadow-lg">
                  {carouselImages[currentImageIndex].title}
                </p>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Premium Polo Shirts Collection
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Cotton and dry-fit polo shirts for companies, sports teams, and casual wear - fully customizable with logo embroidery
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => handleWhatsAppClick()}
                className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-violet-50 text-slate-900 px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
              >
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Get Free Quote</span>
              </button>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentImageIndex
                      ? 'bg-white w-12 h-3 shadow-lg'
                      : 'bg-white/50 hover:bg-white/80 w-3 h-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USES - COMPACT */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-slate-600">Perfect for Every Organization</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {uses.map((use, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-lg">
                <span className="text-2xl">{use.icon}</span>
                <span className="text-slate-700 font-medium">{use.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION - SPREAD OUT WITH MORE DETAILS */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Complete Polo Shirts Collection
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cotton and dry-fit options for every need - complete customization available
            </p>
          </div>

          {/* Larger Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 100% Cotton Polo Shirts */}
            <div className="bg-gradient-to-br from-slate-50 to-violet-50 border-2 border-violet-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">👕</div>
                <h3 className="text-2xl font-bold text-slate-900">100% Cotton Polo Shirts</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Pure cotton fabric for maximum comfort</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Breathable and soft for all-day wear</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Available in multiple colors</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Perfect for corporate and casual use</p>
                </div>
              </div>
            </div>

            {/* Dry Fit Polo Shirts */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 border-2 border-purple-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">⚡</div>
                <h3 className="text-2xl font-bold text-slate-900">Dry Fit Polo Shirts</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Moisture-wicking performance fabric</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Quick-dry technology for active wear</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Lightweight and athletic fit</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Ideal for sports teams and outdoor use</p>
                </div>
              </div>
            </div>

            {/* Full Sleeve Polo Shirts */}
            <div className="bg-gradient-to-br from-slate-50 to-violet-50 border-2 border-violet-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🧥</div>
                <h3 className="text-2xl font-bold text-slate-900">Full Sleeve Polo Shirts</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Long sleeves for year-round wear</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Professional look for office settings</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Available in all fabric types</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Perfect for cooler weather</p>
                </div>
              </div>
            </div>

            {/* Half Sleeve Polo Shirts */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 border-2 border-purple-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">👔</div>
                <h3 className="text-2xl font-bold text-slate-900">Half Sleeve Polo Shirts</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Classic short sleeves for summer</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Maximum comfort in warm weather</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Versatile for casual and formal wear</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Most popular polo style</p>
                </div>
              </div>
            </div>

            {/* Tipped Collar Polo Shirts */}
            <div className="bg-gradient-to-br from-slate-50 to-violet-50 border-2 border-violet-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">✨</div>
                <h3 className="text-2xl font-bold text-slate-900">Tipped Collar Polo Shirts</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Stylish contrast tipped collar</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Modern design with premium look</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Multiple contrast color options</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Great for corporate branding</p>
                </div>
              </div>
            </div>

            {/* Zipper Polo Shirts */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 border-2 border-purple-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🔷</div>
                <h3 className="text-2xl font-bold text-slate-900">Zipper Polo Shirts</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Contemporary zipper-front design</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Modern style for active wear</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Easy to wear and remove</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Sporty look for teams</p>
                </div>
              </div>
            </div>

            {/* Pocket Polo Shirts */}
            <div className="bg-gradient-to-br from-slate-50 to-violet-50 border-2 border-violet-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">📋</div>
                <h3 className="text-2xl font-bold text-slate-900">Pocket Polo Shirts</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Practical chest pocket design</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Professional utility style</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Perfect for logo placement</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Ideal for corporate use</p>
                </div>
              </div>
            </div>

            {/* Plain Polo Shirts */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 border-2 border-purple-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🎯</div>
                <h3 className="text-2xl font-bold text-slate-900">Plain Polo Shirts</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Classic solid color designs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Timeless style for all occasions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Easy to customize with branding</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Most affordable option</p>
                </div>
              </div>
            </div>

            {/* Striped Polo Shirts */}
            <div className="bg-gradient-to-br from-slate-50 to-violet-50 border-2 border-violet-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">📐</div>
                <h3 className="text-2xl font-bold text-slate-900">Striped Polo Shirts</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Stylish striped pattern designs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Multiple stripe variations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Modern casual style</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Great for casual events</p>
                </div>
              </div>
            </div>

            {/* Sublimation Printed Polos */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 border-2 border-purple-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🎨</div>
                <h3 className="text-2xl font-bold text-slate-900">Sublimation Printed Polos</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Full-color all-over printing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Vibrant colors that don't fade</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Custom unique designs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Perfect for sports teams</p>
                </div>
              </div>
            </div>

            {/* Embroidered Logo Polos */}
            <div className="bg-gradient-to-br from-slate-50 to-violet-50 border-2 border-violet-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🏆</div>
                <h3 className="text-2xl font-bold text-slate-900">Embroidered Logo Polos</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Premium quality embroidery</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Professional company logos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Durable and long-lasting</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Executive finish quality</p>
                </div>
              </div>
            </div>

            {/* Company/Sports Team Polos */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 border-2 border-purple-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🏢</div>
                <h3 className="text-2xl font-bold text-slate-900">Company/Sports Team Polos</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Custom team branding options</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Bulk order discounts available</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Custom color combinations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Multiple logo placement options</p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <button
              onClick={() => handleWhatsAppClick()}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-xl"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Get Quote on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - COMPACT */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Why Choose Our Polo Shirts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Full Customization</h3>
              <p className="text-sm text-slate-600">Logo embroidery, screen printing & sublimation</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">🧵</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Quality Fabrics</h3>
              <p className="text-sm text-slate-600">Premium cotton and performance dry-fit materials</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Bulk Discounts</h3>
              <p className="text-sm text-slate-600">Special pricing for companies and teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - COMPACT */}
      <section className="py-16 bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pakistan's Leading Polo Shirt Manufacturer
          </h2>
          <p className="text-lg text-violet-100 mb-8">
            25+ years of experience in premium polo shirt manufacturing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsAppClick()}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-violet-50 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp Us</span>
            </button>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}