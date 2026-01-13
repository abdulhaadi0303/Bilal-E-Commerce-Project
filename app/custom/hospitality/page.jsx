'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappConfig } from '@/lib/data/navigation';

export default function RestaurantHospitalityPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images with dynamic icons
  const carouselImages = [
    {
      src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1920&q=80',
      alt: 'Chef Uniforms',
      title: 'Chef Coats & Jackets',
      icon: '👨‍🍳',
    },
    {
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80',
      alt: 'Waiter Uniforms',
      title: 'Waiter & Waitress Uniforms',
      icon: '🍽️',
    },
    {
      src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80',
      alt: 'Reception Uniforms',
      title: 'Hotel Reception Uniforms',
      icon: '🏨',
    },
    {
      src: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=1920&q=80',
      alt: 'Barista Uniforms',
      title: 'Barista Uniforms',
      icon: '☕',
    },
    {
      src: 'https://images.unsplash.com/photo-1585937421612-70e008356f7b?w=1920&q=80',
      alt: 'Fast Food Uniforms',
      title: 'Fast Food Chain Uniforms',
      icon: '🍔',
    },
    {
      src: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=1920&q=80',
      alt: 'Kitchen Staff',
      title: 'Kitchen Staff Uniforms',
      icon: '🔪',
    },
    {
      src: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=1920&q=80',
      alt: 'Bakery Staff',
      title: 'Bakery & Catering Staff',
      icon: '🥐',
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const getWhatsAppMessage = () => {
    return `Hi FIAZ Uniform, I'm interested in Restaurant & Hospitality uniforms. Can you provide more details and pricing?`;
  };

  const handleWhatsAppClick = () => {
    const message = getWhatsAppMessage();
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
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-orange-800/30 to-red-900/40"></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-white/90 mb-8 drop-shadow-lg">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/custom" className="hover:text-white transition">Custom Uniforms</Link>
              <span>/</span>
              <span className="text-white font-medium">Restaurant & Hospitality</span>
            </div>
            
            {/* Current Image Title */}
            <div className="mb-4 animate-fadeIn">
              <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full">
                <p className="text-lg font-semibold text-white drop-shadow-lg">
                  {carouselImages[currentImageIndex].title}
                </p>
              </div>
            </div>
            
            <div 
              key={`icon-${currentImageIndex}`}
              className="text-6xl mb-6 animate-fadeIn"
            >
              {carouselImages[currentImageIndex].icon}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Premium Hospitality Uniforms
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Stylish and functional uniforms for restaurants, hotels, cafes, and food service professionals
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleWhatsAppClick}
                className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-amber-50 text-slate-900 px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
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

      {/* CONTENT SECTION - SPREAD OUT WITH MORE DETAILS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Restaurant & Hospitality Uniforms
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complete uniform solutions for every role in the food service and hospitality industry
            </p>
          </div>

          {/* Larger Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Chef Coats & Jackets */}
            <div className="bg-gradient-to-br from-slate-50 to-amber-50 border-2 border-amber-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">👨‍🍳</div>
                <h3 className="text-2xl font-bold text-slate-900">Chef Coats & Jackets</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Premium cotton chef coats</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Double-breasted design</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Custom logo embroidery</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Heat-resistant fabrics</p>
                </div>
              </div>
            </div>

            {/* Waiter/Waitress Uniforms */}
            <div className="bg-gradient-to-br from-slate-50 to-orange-50 border-2 border-orange-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🍽️</div>
                <h3 className="text-2xl font-bold text-slate-900">Waiter & Waitress Uniforms</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Elegant formal shirts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Vests and bow ties</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Professional aprons</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Custom branding options</p>
                </div>
              </div>
            </div>

            {/* Reception & Front Desk */}
            <div className="bg-gradient-to-br from-slate-50 to-amber-50 border-2 border-amber-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🏨</div>
                <h3 className="text-2xl font-bold text-slate-900">Hotel Reception Uniforms</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Professional blazers and suits</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Formal dresses</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Matching scarves and accessories</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Custom name badges</p>
                </div>
              </div>
            </div>

            {/* Barista Uniforms */}
            <div className="bg-gradient-to-br from-slate-50 to-orange-50 border-2 border-orange-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">☕</div>
                <h3 className="text-2xl font-bold text-slate-900">Barista Uniforms</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Branded aprons with logo</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Comfortable polo shirts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Casual work pants</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Caps and headwear</p>
                </div>
              </div>
            </div>

            {/* Fast Food Chain Uniforms */}
            <div className="bg-gradient-to-br from-slate-50 to-amber-50 border-2 border-amber-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🍔</div>
                <h3 className="text-2xl font-bold text-slate-900">Fast Food Chain Uniforms</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Branded polo shirts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Custom printed caps</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Protective aprons</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Name tags included</p>
                </div>
              </div>
            </div>

            {/* Kitchen Staff Uniforms */}
            <div className="bg-gradient-to-br from-slate-50 to-orange-50 border-2 border-orange-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🔪</div>
                <h3 className="text-2xl font-bold text-slate-900">Kitchen Staff Uniforms</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Durable kitchen aprons</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Chef hats and caps</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Stain-resistant fabrics</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Large utility pockets</p>
                </div>
              </div>
            </div>

            {/* Bakery & Catering Staff */}
            <div className="bg-gradient-to-br from-slate-50 to-amber-50 border-2 border-amber-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🥐</div>
                <h3 className="text-2xl font-bold text-slate-900">Bakery & Catering Staff</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Hygienic chef coats</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Protective aprons</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Hair nets and caps</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-slate-700 text-lg">Food-safe fabrics</p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-xl"
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
              Why Choose FIAZ Uniform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Custom Branding</h3>
              <p className="text-sm text-slate-600">Logo embroidery on all uniforms</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Premium Quality</h3>
              <p className="text-sm text-slate-600">Comfortable & durable fabrics</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Bulk Discounts</h3>
              <p className="text-sm text-slate-600">Special restaurant pricing</p>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}