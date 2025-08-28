"use client";
import Link from "next/link";
import styles from "./services.module.css";

export default function Services() {
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
        <h1>Our Services</h1>
        <p>
          Travel Buddies offers a wide range of railway and travel-related services  
          to make your journey smooth, affordable, and hassle-free.
        </p>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesGrid}>
        <div className={styles.card}>
          <h3>🚆 Train Ticket Booking</h3>
          <p>
            Book train tickets quickly with instant confirmation.  
            Choose from Sleeper, AC, and Non-AC classes with special fares.
          </p>
        </div>

        <div className={styles.card}>
          <h3>🚌 Bus Ticket Booking</h3>
          <p>
            Explore bus routes across states, compare fares, and reserve  
            seats online with flexible cancellation options.
          </p>
        </div>

        <div className={styles.card}>
          <h3>🎟️ Special Fare Categories</h3>
          <p>
            Discounts for students, senior citizens, doctors, nurses,  
            and armed forces personnel.
          </p>
        </div>

        <div className={styles.card}>
          <h3>📱 Mobile App</h3>
          <p>
            Manage bookings, track trains, and get updates with our  
            user-friendly mobile app (coming soon).
          </p>
        </div>

        <div className={styles.card}>
          <h3>💳 Secure Payments</h3>
          <p>
            Multiple payment options with end-to-end encryption for  
            safe and reliable transactions.
          </p>
        </div>

        <div className={styles.card}>
          <h3>📞 24/7 Customer Support</h3>
          <p>
            Get help anytime with our dedicated support team,  
            ensuring your journey is stress-free.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Travel Buddies. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
