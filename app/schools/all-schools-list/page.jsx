'use client';

import { allSchools, totalSchoolsCount } from '@/lib/data/allSchools';

export default function AllClientsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-cyan-800 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <a 
            href="/schools" 
            className="inline-flex items-center gap-2 text-cyan-100 hover:text-white mb-6 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Schools
          </a>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Complete Client Directory
          </h1>
          <p className="text-xl text-cyan-100">
            Full list of all educational institutions we proudly serve
          </p>
        </div>
      </div>

      {/* Schools List Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          
          {/* Info Card */}
          {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-blue-600 shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">
                  Trusted by Leading Institutions
                </h3>
                <p className="text-blue-700 text-sm">
                  This list represents over 25 years of partnership with educational institutions across Pakistan. 
                  Each institution trusts FIAZ Uniform for quality, reliability, and professional service.
                </p>
              </div>
            </div>
          </div> */}

          {/* Alphabetical Schools Grid */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            
            {/* Grid Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 border-b border-slate-600">
              <div className="grid grid-cols-12 gap-4 font-semibold text-white">
                <div className="col-span-1 text-center"></div>
                <div className="col-span-8 md:col-span-9">Institution Name</div>
                <div className="hidden md:block md:col-span-2">Location</div>
              </div>
            </div>

            {/* Schools List */}
            <div className="divide-y divide-slate-100">
              {allSchools.map((school, index) => (
                <div 
                  key={school.id}
                  className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-slate-50 transition group"
                >
                  {/* Serial Number */}
                  <div className="col-span-1 text-center text-slate-500 font-medium">
                    {index + 1}
                  </div>

                  {/* School Name */}
                  <div className="col-span-11 md:col-span-9">
                    <p className="font-medium text-slate-800 group-hover:text-cyan-600 transition">
                      {school.name}
                    </p>
                    {/* Show location on mobile */}
                    <p className="md:hidden text-sm text-slate-500 mt-1">
                      {school.location}
                    </p>
                  </div>

                  {/* Location (Desktop) */}
                  <div className="hidden md:block md:col-span-2">
                    <p className="text-slate-600">{school.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Stats */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full px-8 py-4">
              <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <div className="text-left">
                <p className="text-2xl font-bold text-slate-800">{totalSchoolsCount}+</p>
                <p className="text-sm text-slate-600">Educational Partners</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Want to Join Our Growing Network?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Whether you're a new institution or looking to switch uniform suppliers, 
              we're here to provide quality uniforms and exceptional service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/923335170270?text=Hi%20FIAZ%20Uniform%2C%20I%27m%20interested%20in%20partnering%20for%20school%20uniforms."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Partner With Us
              </a>
              
              <a
                href="https://wa.me/923335170270?text=Hi%20FIAZ%20Uniform%2C%20I%20want%20to%20place%20an%20order%20for%20school%20uniforms."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-300 px-8 py-4 rounded-lg font-semibold transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Place Your Order
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}