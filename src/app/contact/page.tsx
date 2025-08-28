"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("✅ Thank you! Your message has been submitted.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-700 to-blue-700 text-white py-10 text-center shadow-md">
        <h1 className="text-4xl font-bold">Indian Railways – Contact Us</h1>
        <p className="mt-2 text-gray-200">
          We’re here to help passengers with queries, complaints, and feedback.
        </p>
      </header>

      <main className="flex-grow py-10 px-5">
        {/* Emergency Numbers */}
        <section className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto mb-12">
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-red-600">
            <h2 className="text-xl font-semibold">🚆 Passenger Helpline</h2>
            <p className="mt-2 text-gray-600">
              For ticketing & travel queries, call:
            </p>
            <p className="mt-2 text-3xl font-bold text-red-700">139</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-600">
            <h2 className="text-xl font-semibold">🛡️ Railway Security (RPF)</h2>
            <p className="mt-2 text-gray-600">
              In case of security or safety issues, call:
            </p>
            <p className="mt-2 text-3xl font-bold text-blue-700">182</p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            📩 Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-600 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-600 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-red-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-800 transition"
            >
              Submit
            </button>
          </form>
          {status && (
            <p className="mt-4 text-green-600 font-medium text-center">
              {status}
            </p>
          )}
        </section>

        {/* Quick Links */}
        <section className="max-w-4xl mx-auto mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4">🔗 Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://indianrailways.gov.in"
              target="_blank"
              className="text-blue-700 font-medium hover:underline"
            >
              Official Website
            </a>
            <a
              href="https://railmadad.indianrailways.gov.in"
              target="_blank"
              className="text-blue-700 font-medium hover:underline"
            >
              RailMadad
            </a>
            <a
              href="https://www.irctc.co.in"
              target="_blank"
              className="text-blue-700 font-medium hover:underline"
            >
              IRCTC Portal
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 text-center py-4">
        <p>© {new Date().getFullYear()} Indian Railways. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
