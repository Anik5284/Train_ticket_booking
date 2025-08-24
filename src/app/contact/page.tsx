"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Thank you! Your message has been submitted.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-700">Indian Railways – Contact Us</h1>
        <p className="text-gray-700 mt-2">We’re here to help passengers with queries and feedback.</p>
      </header>

      {/* Emergency Numbers */}
      <section className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mb-10">
        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-red-600">
          <h2 className="text-xl font-semibold">Passenger Helpline</h2>
          <p className="mt-2 text-gray-600">For ticketing & travel queries, call:</p>
          <p className="mt-2 text-2xl font-bold text-red-700">139</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-600">
          <h2 className="text-xl font-semibold">Railway Security (RPF)</h2>
          <p className="mt-2 text-gray-600">In case of security issues, call:</p>
          <p className="mt-2 text-2xl font-bold text-blue-700">182</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
          <button
            type="submit"
            className="bg-red-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-800"
          >
            Submit
          </button>
        </form>
        {status && <p className="mt-4 text-green-600">{status}</p>}
      </section>

      {/* Quick Links */}
      <section className="max-w-4xl mx-auto mt-10 text-center">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://indianrailways.gov.in" target="_blank" className="text-blue-600 underline">
            Official Website
          </a>
          <a href="https://railmadad.indianrailways.gov.in" target="_blank" className="text-blue-600 underline">
            RailMadad
          </a>
          <a href="https://www.irctc.co.in" target="_blank" className="text-blue-600 underline">
            IRCTC Portal
          </a>
        </div>
      </section>
    </div>
  );
}
