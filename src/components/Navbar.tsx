"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navbar - hidden on mobile */}
      <div className="hidden md:flex justify-center mt-8 navbar">
        <div className="flex items-center justify-between backdrop-blur-lg bg-white/10 shadow-lg rounded-full px-8 py-3 w-[90%] max-w-6xl border border-white/40">
          {/* Left side links */}
          <div className="flex items-center justify-center space-x-6 flex-1 font-semibold text-cs-dark-blue tracking-wider navbar__link">
            <Link href="/prediction" className="hover:text-(--cs-orange)">Prediction</Link>
            <Link href="/reports" className="hover:text-(--cs-orange)">Reports</Link>
            <Link href="/reports" className="hover:text-(--cs-orange)">Trends</Link>
          </div>

          {/* Center logo */}
          <div className="flex justify-center w-[104px] navbar__logo">
            <Image
              src="/logo.png"
              alt="Logo"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>

          {/* Right side links */}
          <div className="flex items-center justify-center space-x-6 flex-1 tracking-wider font-semibold text-cs-dark-blue navbar__link">
            <Link href="#" className="hover:text-(--cs-orange)">Home</Link>
            <Link href="#" className="hover:text-(--cs-orange)">Contact</Link>
            <Link href="#" className="hover:text-(--cs-orange)">About Us</Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar - visible on small screens */}
      <div className="md:hidden flex justify-between items-center p-4 backdrop-blur-lg">
      {/* Logo */}
      <div className="w-10 h-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="p-2 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <></>
        ) : (
          <FiMenu size={24} className="text-(--cs-dark-blue)" />
        )}
      </button>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Blurred Overlay */}
        <div
          className="absolute inset-0 h-screen bg-(--cs-darker-blue)/10 backdrop-blur-lg"
          onClick={toggleMobileMenu}
        />

        {/* Menu Content */}
        <div
          className={`absolute h-screen inset-0 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } flex flex-col p-6`}
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <FiX size={24} className="text-(--cs-blue)" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col justify-center items-center flex-1 space-y-6 text-xl overflow-y-auto">
            {[
              { label: 'Home', href: '/' },
              { label: 'Prediction', href: '/prediction' },
              { label: 'Reports', href: '/reports' },
              { label: 'Trends', href: '/trends' },
              { label: 'Contact', href: '/contact' },
              { label: 'About Us', href: '/about' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-semibold tracking-wider text-(--cs-dark-blue) hover:text-(--cs-orange)) hover:tracking-tighter transition-colors"
                onClick={toggleMobileMenu}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;