'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappConfig } from '@/lib/data/navigation';

export default function AccessoriesEquipmentPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images with dynamic icons
  const carouselImages = [
    {
      src: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=1920&q=80',
      alt: 'Uniform Accessories - Caps, Belts, Ties',
      title: 'Uniform Accessories',
      icon: '🎩',
    },
    {
      src: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1920&q=80',
      alt: 'Professional Footwear',
      title: 'Professional Footwear',
      icon: '👞',
    },
    {
      src: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1920&q=80',
      alt: 'Bags and Backpacks',
      title: 'Bags & Backpacks',
      icon: '🎒',
    },
    {
      src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80',
      alt: 'Safety Equipment',
      title: 'Safety Equipment',
      icon: '🦺',
    },
    {
      src: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=1920&q=80',
      alt: 'Medical PPE',
      title: 'Medical PPE',
      icon: '😷',
    },
    {
      src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80',
      alt: 'Sports Equipment',
      title: 'Sports Equipment',
      icon: '⚽',
    },
    {
      src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80',
      alt: 'Graduation Accessories',
      title: 'Graduation Accessories',
      icon: '🎓',
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Category data with detailed items
  const categories = [
    {
      id: 1,
      name: 'Uniform Accessories',
      icon: '🎩',
      items: [
        { name: 'Caps & Hats', details: 'School caps, Security caps, Chef hats, Beret caps' },
        { name: 'Belts', details: 'Leather belts, Duty belts, Military-style belts, School belts' },
        { name: 'Gloves', details: 'Medical gloves, Safety gloves, Winter gloves, Protective gloves' },
        { name: 'Ties & Bow Ties', details: 'School ties, Corporate ties, Pre-tied options, Custom colors' },
        { name: 'Scarves & Dupattas', details: 'School scarves, Corporate scarves, Custom colors and prints' },
      ],
    },
    {
      id: 2,
      name: 'Professional Footwear',
      icon: '👞',
      items: [
        { name: 'School Shoes', details: 'Black formal shoes, Canvas shoes, Sport shoes for all grades' },
        { name: 'Medical Shoes', details: 'Comfortable clogs, Non-slip shoes, Easy-clean materials' },
        { name: 'Safety Boots', details: 'Steel toe boots, High ankle boots, Slip-resistant soles' },
        { name: 'Sports Shoes', details: 'Running shoes, Training shoes, Indoor court shoes' },
        { name: 'Office Shoes', details: 'Formal leather shoes, Comfortable daily wear' },
      ],
    },
    {
      id: 3,
      name: 'Identification Items',
      icon: '🪪',
      items: [
        { name: 'ID Card Printing', details: 'Employee ID cards, Student ID cards, Custom designs with photos' },
        { name: 'Lanyards', details: 'Custom printed lanyards, School lanyards, Corporate branding options' },
        { name: 'Badge Holders', details: 'Vertical/Horizontal holders, Retractable reels, Clip-on styles' },
        { name: 'Name Tags', details: 'Magnetic name tags, Pin-back badges, Metal badges with custom text' },
        { name: 'Card Cases & Pouches', details: 'Protective card holders, Multi-card wallets' },
      ],
    },
    {
      id: 4,
      name: 'Bags & Backpacks',
      icon: '🎒',
      items: [
        { name: 'School Bags', details: 'Backpacks for all grades, Lightweight designs, Ergonomic padding' },
        { name: 'Sports Bags', details: 'Gym duffle bags, Kit bags, Team bags with logo printing' },
        { name: 'Office Bags', details: 'Briefcases, Laptop bags, Professional messenger bags' },
        { name: 'Travel Bags', details: 'Trolley bags, Cabin bags, Large capacity luggage' },
        { name: 'Custom Printed Bags', details: 'Logo printing, School branding, Corporate promotional bags' },
      ],
    },
    {
      id: 5,
      name: 'Medical & Hygiene PPE',
      icon: '😷',
      items: [
        { name: 'Face Masks', details: 'Surgical masks, N95 masks, Reusable cloth masks' },
        { name: 'Hair Nets & Caps', details: 'Disposable hair nets, Surgical caps, Chef caps' },
        { name: 'Medical Gloves', details: 'Latex gloves, Nitrile gloves, Vinyl gloves (all sizes)' },
        { name: 'Aprons', details: 'Disposable aprons, Waterproof aprons, Lab coats' },
        { name: 'Shoe Covers', details: 'Disposable shoe covers, Non-slip protective covers' },
      ],
    },
    {
      id: 6,
      name: 'Safety Equipment',
      icon: '🦺',
      items: [
        { name: 'Safety Helmets', details: 'Construction helmets, Industrial hard hats, ABS material' },
        { name: 'Reflective Vests', details: 'High-visibility vests, Traffic safety vests, Custom printing available' },
        { name: 'Safety Goggles', details: 'Impact-resistant goggles, Chemical splash protection, Welding goggles' },
        { name: 'Ear Protection', details: 'Disposable earplugs, Noise-canceling earmuffs' },
        { name: 'Protective Gear', details: 'Knee pads, Elbow pads, Safety harnesses, Full body protection' },
      ],
    },
    {
      id: 7,
      name: 'Sports Equipment',
      icon: '⚽',
      items: [
        { name: 'Shin Guards', details: 'Football shin guards, Hockey shin guards, Adjustable sizes' },
        { name: 'Headbands & Wristbands', details: 'Sweat-absorbing materials, Team colors, Custom printing' },
        { name: 'Sports Gloves', details: 'Goalkeeper gloves, Batting gloves, Grip gloves for various sports' },
        { name: 'Team Accessories', details: 'Captain armbands, Training bibs/pinnies, Team flags' },
        { name: 'Protective Gear', details: 'Mouth guards, Compression sleeves, Support braces' },
      ],
    },
    {
      id: 8,
      name: 'Graduation Accessories',
      icon: '🎓',
      items: [
        { name: 'Graduation Caps', details: 'Mortarboard caps, Various sizes, Custom tassels' },
        { name: 'Tassels', details: 'Year charms, Colored tassels, Honor tassels, Gold/Silver options' },
        { name: 'Honor Cords', details: 'Single & double cords, Gold/Silver/Colored options' },
        { name: 'Diploma Covers', details: 'Leather-look covers, Customizable text, Various sizes' },
        { name: 'Graduation Gowns', details: 'Bachelor, Master, PhD gowns, All sizes available' },
      ],
    },
    {
      id: 9,
      name: 'Flags & Banners',
      icon: '🚩',
      items: [
        { name: 'School Flags', details: 'Custom school flags, House flags, Event flags with logos' },
        { name: 'Corporate Banners', details: 'Company logos, Promotional banners, Event signage' },
        { name: 'Table Flags', details: 'Desk flags, Mini flags, Flag stands included' },
        { name: 'Pole Flags', details: 'National flags, Provincial flags, Outdoor weather-resistant' },
        { name: 'Custom Printing', details: 'Any design, Weather-resistant materials, Durable fabrics' },
      ],
    },
  ];

  const getWhatsAppMessage = () => {
    return `Hi FIAZ Uniform, I'm interested in Accessories & Equipment. Can you provide more details and pricing?`;
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
              <span className="text-white font-medium">Accessories & Equipment</span>
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
              {/* {carouselImages[currentImageIndex].icon} */}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Complete Your Uniform with Essential Accessories
            </h1>
            
            <p className="text-lg sm:text-xl md:text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              From caps and belts to safety equipment and graduation accessories - everything you need for a professional look
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleWhatsAppClick}
                className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-rose-50 text-slate-900 px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
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

      {/* DETAILED CATEGORIES SECTION - CONCISE */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Accessories & Equipment
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to complete your uniform
            </p>
          </div>

          {/* Compact List */}
          <div className="bg-gradient-to-br from-slate-50 to-rose-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Uniform Accessories:</span> Caps, Belts, Gloves, Ties, Scarves
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Footwear:</span> School, Medical, Safety, Sports shoes
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Identification:</span> ID cards, Lanyards, Badges, Name tags
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Bags:</span> School, Sports, Gym, Office bags
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Medical PPE:</span> Hair nets, Face masks, Medical gloves
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Safety Equipment:</span> Helmets, Reflective vests, Safety goggles
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Sports Gear:</span> Shin guards, Headbands, Wristbands
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Graduation:</span> Caps, Tassels, Honor cords
                </p>
              </div>

            </div>

            {/* CTA Button */}
            <div className="mt-10 text-center">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
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
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Custom Branding</h3>
              <p className="text-sm text-slate-600">Logo printing & embroidery available</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Premium Quality</h3>
              <p className="text-sm text-slate-600">Durable products from trusted suppliers</p>
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