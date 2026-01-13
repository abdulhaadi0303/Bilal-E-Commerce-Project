import Image from 'next/image';
import Link from 'next/link';
import { customCategories } from '@/lib/data/navigation';

export default function CustomUniformsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Custom Uniforms for Every Industry
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Professional, durable, and customized uniforms tailored to your organization's needs. 
              Choose from our specialized categories below.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">✓</span>
                <span className="text-sm">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">✓</span>
                <span className="text-sm">Custom Branding</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">✓</span>
                <span className="text-sm">Bulk Orders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select your industry to explore our specialized uniform solutions
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {customCategories.map((category, index) => (
              <Link
                key={category.id}
                href={category.href}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Card Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  
                  {/* Category Name */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  {/* View Details Arrow */}
                  <div className="flex items-center gap-2 text-cyan-600 font-semibold text-sm">
                    <span>View Details</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Custom Uniforms Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Custom Uniforms?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Build your brand identity with professional custom uniforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">Full Customization</h3>
              <p className="text-slate-600 leading-relaxed">
                Add your logo, choose colors, select fabrics, and customize every detail to match your brand perfectly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Quality</h3>
              <p className="text-slate-600 leading-relaxed">
                Durable fabrics, expert stitching, and attention to detail ensure uniforms that last for years.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bulk Discounts</h3>
              <p className="text-slate-600 leading-relaxed">
                Special pricing for large orders. The more you order, the more you save on your custom uniforms.
              </p>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}