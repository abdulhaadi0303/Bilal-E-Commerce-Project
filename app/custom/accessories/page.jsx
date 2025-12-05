'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappConfig } from '@/lib/data/navigation';
import StatsGrid from '../../../components/customPageComponents/StatsGrid';

export default function AccessoriesEquipmentPage() {
  const [isVisible, setIsVisible] = useState(false);
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

  // CATEGORY DATA
  const categoryData = {
    name: 'Accessories & Equipment',
    tagline: 'Complete Uniform Accessories',
    description: 'All essential accessories and equipment to complement your uniforms - from caps and shoes to safety gear and graduation items.',
    icon: '🎒',
    breadcrumb: 'Accessories & Equipment',
  };

  // PRODUCTS
  const products = [
    {
      id: 1,
      name: 'Caps, Belts & Ties',
      description: 'Complete uniform accessories for professional appearance',
      items: ['Uniform Caps', 'Leather Belts', 'Ties & Bow Ties', 'Scarves'],
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600',
      basePrice: 'From Rs. 300',
      showPrice: false,
    },
    {
      id: 2,
      name: 'Professional Shoes',
      description: 'Quality shoes for school, medical, safety, and sports use',
      items: ['School Shoes', 'Medical Clogs', 'Safety Boots', 'Sports Shoes'],
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600',
      basePrice: 'From Rs. 1,500',
      showPrice: false,
    },
    {
      id: 3,
      name: 'ID Cards & Lanyards',
      description: 'Custom ID cards, badges, lanyards, and name tags',
      items: ['ID Card Printing', 'Custom Lanyards', 'Badge Holders', 'Name Tags'],
      image: 'https://images.unsplash.com/photo-1594833453874-f684a59d7d08?w=600',
      basePrice: 'From Rs. 150',
      showPrice: false,
    },
    {
      id: 4,
      name: 'Bags & Backpacks',
      description: 'Durable bags for school, sports, gym, and office use',
      items: ['School Bags', 'Sports Bags', 'Gym Bags', 'Office Briefcases'],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',
      basePrice: 'From Rs. 800',
      showPrice: false,
    },
    {
      id: 5,
      name: 'Medical PPE & Safety',
      description: 'Essential hygiene and safety equipment',
      items: ['Hair Nets', 'Face Masks', 'Medical Gloves', 'Disposable Items'],
      image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=600',
      basePrice: 'From Rs. 100',
      showPrice: false,
    },
    {
      id: 6,
      name: 'Safety Equipment',
      description: 'Professional safety gear for industrial and construction use',
      items: ['Safety Helmets', 'Reflective Vests', 'Safety Goggles', 'Protective Gear'],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600',
      basePrice: 'From Rs. 500',
      showPrice: false,
    },
    {
      id: 7,
      name: 'Sports Gear',
      description: 'Athletic accessories for sports and fitness',
      items: ['Shin Guards', 'Headbands', 'Wristbands', 'Sports Gloves'],
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600',
      basePrice: 'From Rs. 300',
      showPrice: false,
    },
    {
      id: 8,
      name: 'Graduation Accessories',
      description: 'Complete graduation ceremony accessories',
      items: ['Graduation Caps', 'Tassels', 'Honor Cords', 'Diploma Covers'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600',
      basePrice: 'From Rs. 800',
      showPrice: false,
    },
  ];

  // CATEGORIES
  const categories = [
    { name: 'School Accessories', icon: '🎓' },
    { name: 'Safety Equipment', icon: '🦺' },
    { name: 'Medical PPE', icon: '😷' },
    { name: 'Sports Gear', icon: '⚽' },
    { name: 'Office Items', icon: '💼' },
    { name: 'Graduation Items', icon: '🎓' },
  ];

  // FEATURES
  const features = [
    {
      icon: '🎨',
      title: 'Custom Branding',
      description: 'Logo printing and embroidery on bags, caps, and accessories',
    },
    {
      icon: '✨',
      title: 'Quality Materials',
      description: 'Durable, long-lasting accessories from trusted suppliers',
    },
    {
      icon: '🛡️',
      title: 'Safety Certified',
      description: 'All safety equipment meets international standards',
    },
    {
      icon: '💰',
      title: 'Bulk Discounts',
      description: 'Special pricing for schools, companies, and institutions',
    },
    {
      icon: '📦',
      title: 'Complete Solutions',
      description: 'One-stop shop for all uniform accessories and equipment',
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Quick dispatch across Pakistan',
    },
  ];

  const getWhatsAppMessage = (productName = null) => {
    if (productName) {
      return `Hi FIAZ Uniform, I'm interested in ${productName}. Can you provide more details?`;
    }
    return `Hi FIAZ Uniform, I'm interested in Accessories & Equipment. Can you provide more details and pricing?`;
  };

  const handleWhatsAppClick = (productName = null) => {
    const message = getWhatsAppMessage(productName);
    const url = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1920&q=80"
            alt="Accessories & Equipment Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/85 via-pink-800/80 to-fuchsia-900/85"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/20 via-transparent to-fuchsia-600/20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center py-20">
          <div className="flex items-center justify-center gap-2 text-sm text-rose-200 mb-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/#custom" className="hover:text-white transition">Custom Uniforms</Link>
            <span>/</span>
            <span className="text-white font-medium">{categoryData.breadcrumb}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {categoryData.tagline}
          </h1>
          
          <p className="text-xl md:text-2xl text-rose-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            {categoryData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => handleWhatsAppClick()}
              className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-rose-50 text-slate-900 px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            >
              <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Get Free Quote</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Us</span>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-3xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6">
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">25+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-rose-200 leading-tight">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6">
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">500+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-rose-200 leading-tight">Product Types</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6">
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">1000+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-rose-200 leading-tight">Happy Clients</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-slate-600">Complete Accessory Solutions for Every Need</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-lg">
                <span className="text-2xl">{category.icon}</span>
                <span className="text-slate-700 font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section ref={sectionRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Accessories & Equipment Range
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to complete your uniforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'animate-fadeIn' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-rose-600">In Stock</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 text-sm line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-xs font-semibold text-slate-700 mb-2">Includes:</div>
                    <div className="flex flex-wrap gap-1">
                      {product.items.slice(0, 3).map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {product.showPrice && product.basePrice && (
                    <div className="mb-4 pb-4 border-b border-slate-200">
                      <div className="text-2xl font-bold text-rose-600">
                        {product.basePrice}
                      </div>
                      <div className="text-sm text-slate-500">Bulk discounts available</div>
                    </div>
                  )}

                  <button
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Our Accessories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Quality products for complete uniform solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-rose-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-br from-rose-900 via-pink-800 to-fuchsia-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Complete Uniform Solutions
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">One-Stop Shop</h3>
                    <p className="text-rose-100">Everything you need for complete uniform solutions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                    <p className="text-rose-100">Durable accessories from trusted manufacturers</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Custom Branding</h3>
                    <p className="text-rose-100">Logo printing available on bags, caps, and more</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Bulk Pricing</h3>
                    <p className="text-rose-100">Special discounts for schools and companies</p>
                  </div>
                </div>
              </div>
            </div>

            <StatsGrid 
              stats={[
                { value: '500+', label: 'Products' },
                { value: '1000+', label: 'Clients' },
                { value: '4.9★', label: 'Rating' },
                { value: '24/7', label: 'Support' }
              ]}
              primaryColor="rose-300"
              secondaryColor="pink-300"
              textColor="rose-100"
            />

            
          </div>
        </div>
      </section>

    </main>
  );
}