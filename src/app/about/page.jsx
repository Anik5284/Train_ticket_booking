"use client";
import Link from "next/link";
import styles from "./about.module.css";

export default function About() {
  return (
    <main className={styles.page}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">MySite</Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>About Travel Buddies Railway</h1>
        <p>
          Your trusted companion for booking train journeys across India.  
          We bring you an easy, secure and fast way to book railway tickets online.
        </p>
      </section>

      {/* Mission */}
      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          To simplify train travel for millions of passengers by offering a seamless,
          transparent and affordable booking experience.  
          We aim to bridge technology with Indian Railways and ensure hassle-free journeys.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className={styles.section}>
        <h2>Why Choose Travel Buddies?</h2>
        <ul className={styles.list}>
          <li>🚆 Quick & easy train ticket bookings</li>
          <li>💳 Secure payments and instant confirmation</li>
          <li>📅 Flexible cancellation and refund policies</li>
          <li>🎟️ Special fares for students, seniors, doctors & army personnel</li>
          <li>📍 Wide coverage across all major railway routes in India</li>
        </ul>
      </section>

      {/* Vision */}
      <section className={styles.section}>
        <h2>Our Vision</h2>
        <p>
          To be India’s most reliable and customer-friendly online railway booking platform,
          making train travel accessible and enjoyable for everyone.
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Travel Buddies. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
