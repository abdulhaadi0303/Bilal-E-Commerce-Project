'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationLinks, customCategories, whatsappConfig } from '@/lib/data/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSchoolsDropdownOpen, setIsSchoolsDropdownOpen] = useState(false);
  const [isCustomDropdownOpen, setIsCustomDropdownOpen] = useState(false);
  
  // Mobile accordion states (separate from desktop dropdowns)
  const [isMobileSchoolsOpen, setIsMobileSchoolsOpen] = useState(false);
  const [isMobileCustomOpen, setIsMobileCustomOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset mobile accordion states when closing menu
    if (isMobileMenuOpen) {
      setIsMobileSchoolsOpen(false);
      setIsMobileCustomOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(whatsappConfig.message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <header className="bg-slate-800 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Logo + Brand Name */}
            <div className="flex items-center gap-4">
              {/* Mobile Hamburger */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden text-white hover:text-cyan-400 transition"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
                <Image
                  src="/logo.jpg"
                  alt="FIAZ Uniform Logo"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain rounded-md"
                  style={{ width: 'auto', height: '56px' }}
                />
                <span className="font-bold text-2xl hidden sm:block">FIAZ Uniform</span>
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-white hover:text-cyan-400 transition font-medium text-base"
                >
                  {link.name}
                </Link>
              ))}


              {/* Custom Options Dropdown - Desktop */}
              <div 
                className="relative"
                onMouseEnter={() => setIsCustomDropdownOpen(true)}
                onMouseLeave={() => setIsCustomDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-white hover:text-cyan-400 transition font-medium text-base">
                  Custom Uniforms
                  <svg
                    className={`w-4 h-4 transition-transform ${isCustomDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Custom Options Dropdown Menu */}
                {isCustomDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 -mt-1">
                    <div className="w-80 bg-white text-slate-800 rounded-lg shadow-xl py-2 border border-gray-200 max-h-[calc(100vh-120px)] overflow-y-auto">
                      <div className="px-4 py-2 border-b border-gray-200 sticky top-0 bg-white z-10">
                        <p className="text-xs text-gray-500 font-semibold uppercase">Custom Uniform Categories</p>
                      </div>
                      {customCategories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/custom/${category.slug}`}
                          className="block px-4 py-3 hover:bg-cyan-50 transition"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{category.icon}</span>
                            <div>
                              <div className="font-medium text-sm">{category.name}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{category.description}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </nav>

            {/* Right: WhatsApp Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-5 py-2.5 rounded-lg transition font-semibold"
                aria-label="Contact on WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="hidden sm:inline">WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-slate-800 text-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-700">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="FIAZ Uniform"
                width={40}
                height={40}
                className="w-10 h-10 object-contain rounded-md"
                style={{ width: 'auto', height: '40px' }}
              />
              <span className="font-bold text-lg">FIAZ Uniform</span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-cyan-400"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col p-4 space-y-2">
            {/* Regular Navigation Links */}
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={toggleMobileMenu}
                className="px-4 py-3 hover:bg-slate-700 rounded-lg transition text-base"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Schools Accordion */}
            <div className="pt-2">
              <button
                onClick={() => setIsMobileSchoolsOpen(!isMobileSchoolsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-700 rounded-lg transition text-base"
              >
                <span>Available Schools</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isMobileSchoolsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Schools Dropdown Content */}
              {isMobileSchoolsOpen && (
                <div className="mt-1 ml-4 space-y-1 border-l-2 border-slate-600 pl-3">
                  {availableSchools.map((school) => (
                    <Link
                      key={school.id}
                      href={`/schools/${school.slug}`}
                      onClick={toggleMobileMenu}
                      className="block px-3 py-2.5 hover:bg-slate-700 rounded-lg transition"
                    >
                      <div className="text-sm font-medium">{school.name}</div>
                      <div className="text-xs text-gray-400">{school.location}</div>
                    </Link>
                  ))}
                  <Link
                    href="/schools"
                    onClick={toggleMobileMenu}
                    className="block px-3 py-2 text-cyan-400 hover:bg-slate-700 rounded-lg text-sm font-medium transition"
                  >
                    View All Schools →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Custom Options Accordion */}
            <div>
              <button
                onClick={() => setIsMobileCustomOpen(!isMobileCustomOpen)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-700 rounded-lg transition text-base"
              >
                <span>Custom Options</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isMobileCustomOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Custom Options Dropdown Content */}
              {isMobileCustomOpen && (
                <div className="mt-1 ml-4 space-y-1 border-l-2 border-slate-600 pl-3">
                  {customCategories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/custom/${category.slug}`}
                      onClick={toggleMobileMenu}
                      className="block px-3 py-2.5 hover:bg-slate-700 rounded-lg transition"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{category.icon}</span>
                        <div>
                          <div className="text-sm font-medium">{category.name}</div>
                          <div className="text-xs text-gray-400">{category.description}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/custom"
                    onClick={toggleMobileMenu}
                    className="block px-3 py-2 text-cyan-400 hover:bg-slate-700 rounded-lg text-sm font-medium transition"
                  >
                    View All Custom Options →
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="mt-auto p-4 border-t border-slate-700">
            <button
              onClick={() => {
                handleWhatsAppClick();
                toggleMobileMenu();
              }}
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-3 rounded-lg transition font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contact on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}