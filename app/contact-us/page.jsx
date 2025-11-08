'use client';

import { useState } from 'react';
import { whatsappConfig } from '@/lib/data/navigation';
import { shopLocations } from '@/lib/data/shoplocations';

export default function ContactPage() {
  // Use Islamabad location (index 2) as main contact location
  const mainLocation = shopLocations[2];

  // ------------------ Internal Components ------------------

  const HeroSection = () => (
    <section className="bg-slate-100 py-20 text-center flex flex-col lg:flex-row items-center justify-center gap-10 px-6">
      <div className="max-w-xl">
        <h1 className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-900 text-2xl">
          Have questions, bulk order requests, or need custom uniforms?  
          We'd love to hear from you — reach out anytime.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=600"
        alt="Customer Support"
        className="rounded-2xl shadow-lg w-full max-w-sm lg:max-w-md h-80 object-cover"
      />
    </section>
  );

  const ContactInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-cyan-400">Get in Touch</h2>
      <p className="text-gray-300">
        Our team is available to assist you Monday through Saturday.
      </p>

      <ul className="space-y-4 text-gray-300">
        {/* Phone */}
        <li className="flex items-center gap-3">
          <svg className="w-6 h-6 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href={`tel:${mainLocation.phone}`} className="hover:text-cyan-400 transition">
            {mainLocation.phone}
          </a>
        </li>

        {/* Email */}
        <li className="flex items-center gap-3">
          <svg className="w-6 h-6 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href="mailto:info@fiazuniform.com" className="hover:text-cyan-400 transition">
            info@fiazuniform.com
          </a>
        </li>

        {/* Address */}
        <li className="flex items-start gap-3">
          <svg className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="font-semibold">{mainLocation.name}</p>
            <p>{mainLocation.address}</p>
            <p>{mainLocation.city}, {mainLocation.region}</p>
          </div>
        </li>

        {/* Working Hours */}
        <li className="flex items-start gap-3">
          <svg className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-semibold">Business Hours</p>
            <p>{mainLocation.workingHours}</p>
            {mainLocation.isClosed && (
              <p className="text-red-400 text-sm mt-1">Closed on {mainLocation.isClosed}</p>
            )}
          </div>
        </li>
      </ul>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(whatsappConfig.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Chat on WhatsApp
        </a>

        {/* Google Maps Button */}
        <a
          href={mainLocation.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Get Directions
        </a>
      </div>
    </div>
  );

  const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Prepare WhatsApp message
      const whatsappMessage = `*New Contact Form Submission*\n\n` +
        `*Name:* ${form.name}\n` +
        `*Email:* ${form.email}\n` +
        `*Phone:* ${form.phone || 'Not provided'}\n\n` +
        `*Message:*\n${form.message}`;

      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      // Show success message
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1000);
    };

    if (submitted) {
      return (
        <div className="text-center p-10 bg-slate-800 rounded-2xl">
          <div className="flex justify-center mb-4">
            <svg className="w-16 h-16 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-emerald-400 mb-2">Thank you!</h3>
          <p className="text-gray-300 mb-4">
            Your message has been sent via WhatsApp. We'll get back to you shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: '', email: '', phone: '', message: '' });
            }}
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            Send another message
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Send a Message</h2>

        {/* Name Field */}
        <div>
          <label className="block text-gray-300 mb-2 font-medium">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-300 mb-2 font-medium">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            required
          />
        </div>

        {/* Phone Field (Optional) */}
        <div>
          <label className="block text-gray-300 mb-2 font-medium">
            Phone Number <span className="text-gray-500 text-sm">(Optional)</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-gray-300 mb-2 font-medium">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us how we can help you..."
            className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 cursor-pointer"
          //                                                                                                                                                                                          ^^^^^^^^^^^^^^
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send'
          )}
        </button>

        <p className="text-gray-400 text-sm text-center">
          Your message will be sent to our WhatsApp for quick response
        </p>
      </form>
    );
  };

  const GoogleMap = () => (
    <section className="w-full h-96 mt-16">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.043423324907!2d73.02463377569707!3d33.697941238946896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9598d6374cbf%3A0x95f5195402d9d0ee!2sF-10%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing location of ${mainLocation.name}`}
      ></iframe>
    </section>
  );

  // ------------------ Page Layout ------------------

  return (
    <main className="bg-slate-800 text-white min-h-screen">
      <HeroSection />

      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </section>

      <GoogleMap />
    </main>
  );
}