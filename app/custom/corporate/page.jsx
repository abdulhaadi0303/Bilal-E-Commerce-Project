'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappConfig } from '@/lib/data/navigation';

export default function CorporatePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images with dynamic icons
  const carouselImages = [
    {
      src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80',
      alt: 'Office Staff Uniforms',
      title: 'Office Staff Uniforms',
      icon: '💼',
    },
    {
      src: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80',
      alt: 'Delivery Rider Uniforms',
      title: 'Delivery Rider Uniforms',
      icon: '📦',
    },
    {
      src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80',
      alt: 'Warehouse Uniforms',
      title: 'Warehouse Uniforms',
      icon: '🏪',
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80',
      alt: 'Factory Uniforms',
      title: 'Factory Uniforms',
      icon: '🏭',
    },
    {
      src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=80',
      alt: 'Mechanics Uniforms',
      title: 'Mechanics Uniforms',
      icon: '🔧',
    },
    {
      src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1920&q=80',
      alt: 'Construction Worker Uniforms',
      title: 'Construction Worker Uniforms',
      icon: '🏗️',
    },
    {
      src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80',
      alt: 'Cleaning Staff Uniforms',
      title: 'Cleaning Staff Uniforms',
      icon: '🧹',
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const getWhatsAppMessage = () => {
    return `Hi FIAZ Uniform, I'm interested in Corporate & Industrial uniforms. Can you provide more details and pricing?`;
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
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40"></div>
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
              <span className="text-white font-medium">Corporate & Industrial</span>
            </div>
            
            {/* Current Image Title - Large Display */}
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
              Professional Uniforms for Every Industry
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              From office staff to industrial workers - complete uniform solutions tailored to your business
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleWhatsAppClick}
                className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-cyan-50 text-slate-900 px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
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

      {/* CONTENT SECTION - CONCISE */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Corporate & Industrial Uniforms
            </h2>
            <p className="text-lg text-slate-600">
              Professional uniforms for every role in your organization
            </p>
          </div>

          {/* Compact List */}
          <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Office Staff Uniforms:</span> Shirts, Trousers, Blazers with logo
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Delivery Rider Uniforms:</span> Branded polo shirts, Reflective jackets
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Warehouse Uniforms:</span> Reflective jackets, Overalls, High-visibility vests
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Factory Uniforms:</span> Industrial shirts, Work pants, Safety overalls
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Mechanics' Uniforms:</span> Overalls, Oil-resistant shirts, Work pants
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Construction Worker Uniforms:</span> High-visibility shirts, Durable pants, Safety vests
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Cleaning Staff Uniforms:</span> Cleaning tunics, Aprons, Branded T-shirts
                </p>
              </div>

            </div>

            {/* CTA Button */}
            <div className="mt-10 text-center">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Get Quote on WhatsApp</span>
              </button>
            </div>
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
              <div className="text-4xl mb-3">🧵</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Custom Branding</h3>
              <p className="text-sm text-slate-600">Logo embroidery & printing available</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Premium Quality</h3>
              <p className="text-sm text-slate-600">Durable fabrics for long-lasting wear</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Bulk Discounts</h3>
              <p className="text-sm text-slate-600">Special pricing for large orders</p>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}