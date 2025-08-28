"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./train.module.css"; // ✅ local css module

// ---- Constants ----
const fareOptions = ["Regular", "Student", "Senior Citizen", "Doctor & Nurses", "Army"];

const trainOffers = [
  { src: "/t1.jpg", title: "Delhi to Goa. The Goa Express (12779/12780)" },
  { src: "/t2.jpg", title: "Delhi and Mumbai. The Mumbai Rajdhani Express (12951/12952)" },
  { src: "/t3.jpg", title: "Delhi and Pune. The Jhelum Express (11078)" },
  { src: "/t4.jpg", title: "Delhi to Hyderabad. Telangana Express (12724)" },
  { src: "/t5.jpg", title: "Delhi and West Bengal. The Kolkata Rajdhani (12306)" },
  { src: "/t6.jpg", title: "Delhi and Chennai. The Tamil Nadu Express (12622)" },
  { src: "/t7.jpg", title: "Delhi and Madhya Pradesh. The Bhopal Shatabdi (12002)" },
  { src: "/t8.jpg", title: "Delhi to Pondicherry. NDLS PDY SF EXP (22404)" },
];

// ---- Navbar Component ----
function Navbar() {
  return (
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
  );
}

// ---- Offer Card Component ----
function OfferCard({ src, title }: { src: string; title: string }) {
  return (
    <div className={styles.offerCard}>
      <Image src={src} alt={title} width={300} height={200} className={styles.offerImg} />
      <div className={styles.offerContent}>
        <p className={styles.offerType}>Special offer</p>
        <h4 className={styles.offerTitle}>{title}</h4>
        <p className={styles.offerDesc}>Book your trip long weekend trip now.</p>
      </div>
    </div>
  );
}

// ---- Footer Component ----
function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h4>Make Your Bus Booking Smoother With Travel Buddies</h4>
        <p>Imagine the thrill of feeling the wind in your hair, while looking at the changing scenes from a window-seat...</p>
      </div>
      <div>
        <h4>Advantages of booking bus tickets online on Travel Buddies</h4>
        <p>You can check for bus routes, compare prices, choose AC/non-AC and cancel instantly...</p>
      </div>
      <div>
        <h4>How to Book Bus Online on Travel Buddies</h4>
        <p>Tap on the Trains & Bus icon on the Travel Buddies homepage...</p>
      </div>
    </footer>
  );
}

// ---- Search Form Component ----
function SearchForm() {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [travelClass, setTravelClass] = useState<"All" | "AC" | "Non-AC" | "Sleeper">("All");
  const [fare, setFare] = useState<string>("Regular");
  const [flexiFly, setFlexiFly] = useState<boolean>(false);

  const swap = () => {
    setFrom((prevFrom) => {
      setTo(prevFrom);
      return to;
    });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!from || !to || !date) {
      alert("Please fill all fields before searching.");
      return;
    }
    alert(`Searching…
From: ${from}
To: ${to}
Date: ${date}
Class: ${travelClass}
Fare: ${fare}
FlexiFly: ${flexiFly ? "Yes" : "No"}`);
  };

  return (
    <form className={styles.searchCard} onSubmit={handleSearch}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="from" className={styles.label}>From</label>
          <input
            id="from"
            className={styles.input}
            type="text"
            placeholder="Kolkata"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <button
          type="button"
          className={styles.swap}
          aria-label="Swap From and To"
          onClick={swap}
          title="Swap"
        >
          ⇄
        </button>

        <div className={styles.field}>
          <label htmlFor="to" className={styles.label}>To</label>
          <input
            id="to"
            className={styles.input}
            type="text"
            placeholder="New Delhi"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div className={`${styles.field} ${styles.narrow}`}>
          <label htmlFor="date" className={styles.label}>Date</label>
          <input
            id="date"
            className={styles.date}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className={`${styles.field} ${styles.narrow}`}>
          <label htmlFor="class" className={styles.label}>Class</label>
          <select
            id="class"
            className={styles.select}
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value as typeof travelClass)}
          >
            <option>All</option>
            <option>AC</option>
            <option>Non-AC</option>
            <option>Sleeper</option>
          </select>
        </div>
      </div>

      {/* Fare Section */}
      <div className={styles.fareSection}>
        <p>Select a special fare</p>
        {fareOptions.map((option, idx) => (
          <label key={idx} className={styles.f1}>
            <input
              type="radio"
              name="fare"
              checked={fare === option}
              onChange={() => setFare(option)}
            />{" "}
            {option}
          </label>
        ))}
      </div>

      {/* Checkbox */}
      <div className={styles.checkboxConta}>
        <label>
          <input
            type="checkbox"
            checked={flexiFly}
            onChange={(e) => setFlexiFly(e.target.checked)}
          />
          Add FlexiFly 100% refund on cancellation or Zero date change charges
          <a
            href="https://www.bing.com/search?q=train+policy"
            className={styles.view}
            target="_blank"
          >
            View Details
          </a>
        </label>
      </div>

      {/* Submit Button */}
      <div className={styles.btnContainer}>
        <button className={styles.btnPrimary} type="submit">Search</button>
      </div>
    </form>
  );
}

// ---- Main Page ----
export default function Home() {
  return (
    <main className={styles.page}>
      <Navbar />

      <div className={styles.name}>
        <div className={styles.h1}>
          <Image src="/d2.png" alt="Book Train" width={30} height={30} className={styles.h6_img} />
          <h6 className={styles.h6}>Book Train Tickets</h6>
        </div>

        <SearchForm />

        {/* Offers */}
        <div className={styles.offerContainer}>
          {trainOffers.map((offer, idx) => (
            <OfferCard key={idx} {...offer} />
          ))}
        </div>

        <Footer />
      </div>
    </main>
  );
}
