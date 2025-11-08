'use client';

import { useState } from 'react';

export default function ContactPage() {
  // ------------------ Internal Components ------------------

  const HeroSection = () => (
    <section className="bg-slate-800 py-20 text-center">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Contact Us</h1>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Have questions, bulk order requests, or need custom uniforms?  
        We’d love to hear from you.
      </p>
    </section>
  );

  const ContactInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-cyan-400">Get in Touch</h2>
      <p className="text-gray-300">
        Our team is available to assist you Monday through Saturday.
      </p>

      <ul className="space-y-4 text-gray-300">
        <li className="flex items-center gap-3">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M16 2v4H8V2m8 0H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2z" />
          </svg>
          <span>+92 300 1234567</span>
        </li>

        <li className="flex items-center gap-3">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M16 12H8m0 0l-4-4m4 4l-4 4" />
          </svg>
          <span>info@fiazuniform.com</span>
        </li>

        <li className="flex items-start gap-3">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
          </svg>
          <span>F-10 Markaz, Blue Area, Islamabad</span>
        </li>
      </ul>

      <div className="mt-6">
        <a
          href="https://maps.google.com/?q=Islamabad+F10+Markaz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );

  const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
    };

    if (submitted) {
      return (
        <div className="text-center p-10 bg-slate-800 rounded-2xl">
          <h3 className="text-xl font-semibold text-emerald-400 mb-2">Thank you!</h3>
          <p className="text-gray-300">We’ll get back to you shortly.</p>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Send a Message</h2>

        <div>
          <label className="block text-gray-300 mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Send Message
        </button>
      </form>
    );
  };

  const GoogleMap = () => (
    <section className="w-full h-96 mt-16">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.043423324907!2d73.02463377569707!3d33.697941238946896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9598d6374cbf%3A0x95f5195402d9d0ee!2sF-10%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );

  const WhatsAppCTA = () => {
    const handleWhatsAppClick = () => {
      const phoneNumber = '923001234567';
      const message = 'Hi, I have an inquiry regarding your uniforms.';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };

    return (
      <section className="bg-emerald-600 text-white text-center py-12 mt-20">
        <h2 className="text-3xl font-bold mb-4">Need Quick Assistance?</h2>
        <p className="text-white/90 mb-6">
          Chat with our team directly on WhatsApp
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Chat Now →
        </button>
      </section>
    );
  };

  // ------------------ Page Layout ------------------

  return (
    <main className="bg-slate-900 text-white min-h-screen">
      <HeroSection />

      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </section>

      <GoogleMap />
      <WhatsAppCTA />
    </main>
  );
}
