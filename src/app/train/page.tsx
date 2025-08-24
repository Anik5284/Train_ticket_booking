"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ use Next.js Image for optimization
import styles from "./train.module.css"; // ✅ local css module

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [travelClass, setTravelClass] = useState("All");

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Searching…
From: ${from}
To: ${to}
Date: ${date}
Class: ${travelClass}`);
  };

  return (
    <main className="page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Link href="/">MySite</Link>
        </div>
        <ul className="navLinks">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="name">
        <div className="h1">
          {/* ✅ Use Next.js Image */}
          <Image src="/d2.png" alt="check" width={30} height={30} className="h6_img" />
          <h6 className="h6">Book Train Tickets</h6>
        </div>

        {/* ✅ Search Form */}
        <form className="searchCard" onSubmit={handleSearch}>
          <div className="nam2">
            <div className="row">
              <div className="field">
                <label className="label">From</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Kolkata"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="swap"
                aria-label="Swap From and To"
                onClick={swap}
                title="Swap"
              >
                ⇄
              </button>

              <div className="field">
                <label className="label">To</label>
                <input
                  className="input"
                  type="text"
                  placeholder="New Delhi"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>

              <div className="field narrow">
                <label className="label">Date</label>
                <input
                  className="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="field narrow">
                <label className="label">Class</label>
                <select
                  className="select"
                  value={travelClass}
                  onChange={(e) => setTravelClass(e.target.value)}
                >
                  <option>All</option>
                  <option>AC</option>
                  <option>Non-AC</option>
                  <option>Sleeper</option>
                </select>
              </div>
            </div>

            {/* Fare Section */}
            <div className="fare-section">
              <p>Select a special fare</p>
              {["Regular", "Student", "Senior Citizen", "Doctor & Nurses", "Army"].map((fare, idx) => (
                <label key={idx} className="f1">
                  <input type="radio" name="fare" /> {fare}
                </label>
              ))}
            </div>

            {/* Checkbox */}
            <div className="checkbox-conta">
              <label>
                <input type="checkbox" value="che" />
                Add FlexiFly 100% refund on cancellation or Zero date change charges
                <a
                  href="https://www.bing.com/search?q=train+policy"
                  className="view"
                  target="_blank"
                >
                  View Details
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <div className="btn-container">
              <button className="btnPrimary" type="submit">Search</button>
            </div>
          </div>
        </form>

        {/* ✅ Train Offers */}
        <div className="offer-container">
          {[
            { src: "/t1.jpg", title: "Delhi to Goa. The Goa Express (12779/12780)" },
            { src: "/t2.jpg", title: "Delhi and Mumbai. The Mumbai Rajdhani Express (12951/12952)" },
            { src: "/t3.jpg", title: "Delhi and Pune. The Jhelum Express (11078)" },
            { src: "/t4.jpg", title: "Delhi to Hyderabad. Telangana Express (12724)" },
            { src: "/t5.jpg", title: "Delhi and West Bengal. The Kolkata Rajdhani (12306)" },
            { src: "/t6.jpg", title: "Delhi and Chennai. The Tamil Nadu Express (12622)" },
            { src: "/t7.jpg", title: "Delhi and Madhya Pradesh. The Bhopal Shatabdi (12002)" },
            { src: "/t8.jpg", title: "Delhi to Pondicherry. NDLS PDY SF EXP (22404)" },
          ].map((offer, idx) => (
            <div key={idx} className="offer-card">
              <Image src={offer.src} alt="offer" width={300} height={200} className="offer-img" />
              <div className="offer-content">
                <p className="offer-type">Special offer</p>
                <h4 className="offer-title">{offer.title}</h4>
                <p className="offer-desc">Book your trip long weekend trip now.</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Footer */}
        <footer className="footer">
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
      </div>
    </main>
  );
}
