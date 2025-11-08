import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About FIAZ Uniform</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for professional uniforms across Pakistan
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded with a vision to provide high-quality uniforms to professionals across all industries, 
                  FIAZ Uniform has been serving businesses and institutions throughout Pakistan with dedication 
                  and excellence.
                </p>
                <p>
                  What started as a small tailoring shop has grown into a trusted name in the uniform industry. 
                  We understand that uniforms are more than just clothing—they represent professionalism, unity, 
                  and brand identity.
                </p>
                <p>
                  Today, we serve hospitals, schools, security firms, restaurants, and corporations, delivering 
                  quality uniforms that our clients can be proud to wear.
                </p>
              </div>
            </div>
            
            {/* Story Image - Replace with actual path later */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800"
                alt="FIAZ Uniform Workshop"
                fill
                className="object-cover"
              />
              {/* Temporary placeholder - Download and replace with: /images/about/story.jpg */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=200"
                  alt="Mission"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/about/mission.jpg */}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality, comfortable, and durable uniforms that enhance professional identity 
                and build confidence. We are committed to delivering exceptional service, competitive pricing, 
                and timely delivery to every customer.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200"
                  alt="Vision"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/about/vision.jpg */}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To become Pakistan's leading uniform provider, recognized for quality, innovation, and customer 
                satisfaction. We envision a future where every professional organization trusts FIAZ Uniform 
                for their uniform needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Why Choose FIAZ Uniform?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 - Quality */}
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=200"
                  alt="Premium Quality"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/about/quality.jpg */}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the finest fabrics and materials, ensuring durability and comfort that lasts.
              </p>
            </div>

            {/* Feature 2 - Fast Delivery */}
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=200"
                  alt="Fast Delivery"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/about/delivery.jpg */}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick turnaround times without compromising on quality. We value your time as much as you do.
              </p>
            </div>

            {/* Feature 3 - Affordable */}
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200"
                  alt="Affordable Pricing"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/about/pricing.jpg */}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">
                Competitive prices with flexible payment options for bulk orders and institutional clients.
              </p>
            </div>

            {/* Feature 4 - Custom Design */}
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=200"
                  alt="Custom Designs"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/about/custom.jpg */}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Custom Designs</h3>
              <p className="text-gray-600">
                Tailored solutions for your specific needs. Custom embroidery, logos, and designs available.
              </p>
            </div>

            {/* Feature 5 - Expert Team */}
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200"
                  alt="Expert Team"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/about/team.jpg */}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Experienced tailors and customer service team dedicated to your satisfaction.
              </p>
            </div>

            {/* Feature 6 - Quality Assurance */}
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200"
                  alt="Quality Assurance"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/about/assurance.jpg */}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Every uniform undergoes strict quality checks before delivery. Your satisfaction is guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Industries We Serve</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            
            {/* Healthcare */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-32">
                <Image
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400"
                  alt="Healthcare"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/industries/healthcare.jpg */}
              </div>
              <p className="font-semibold text-slate-800 text-center py-3">Healthcare</p>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-32">
                <Image
                  src="https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400"
                  alt="Security"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/industries/security.jpg */}
              </div>
              <p className="font-semibold text-slate-800 text-center py-3">Security</p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-32">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400"
                  alt="Education"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/industries/education.jpg */}
              </div>
              <p className="font-semibold text-slate-800 text-center py-3">Education</p>
            </div>

            {/* Hospitality */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-32">
                <Image
                  src="https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400"
                  alt="Hospitality"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/industries/hospitality.jpg */}
              </div>
              <p className="font-semibold text-slate-800 text-center py-3">Hospitality</p>
            </div>

            {/* Corporate */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-32">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400"
                  alt="Corporate"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/industries/corporate.jpg */}
              </div>
              <p className="font-semibold text-slate-800 text-center py-3">Corporate</p>
            </div>

            {/* Industrial */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-32">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400"
                  alt="Industrial"
                  fill
                  className="object-cover"
                />
                {/* Replace with: /images/industries/industrial.jpg */}
              </div>
              <p className="font-semibold text-slate-800 text-center py-3">Industrial</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}