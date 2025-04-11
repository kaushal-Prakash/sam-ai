"use client";
import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const plane = document.querySelector(".plane");
    plane?.classList.add("fly");


    setTimeout(() => {
        plane?.classList.remove('fly');
      }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-(--cs-dark-blue) to-(--cs-darker-blue) overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-(--cs-yellow) to-transparent opacity-30"></div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-(--cs-yellow) blur-[80px] opacity-10"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16 contact__header">
          <h1 className="text-4xl md:text-6xl pt-5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-(--cs-yellow) to-[#FFC300] mb-4">
            Contact Varun AI
          </h1>
          <p className="text-lg md:text-xl text-[#cbd5e1] max-w-3xl mx-auto">
            Have questions about our forest fire prediction technology? Reach
            out to our team of experts for more information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-(--cs-darker-blue)/60 backdrop-blur-sm border border-(--cs-yellow)/30 rounded-xl p-8 shadow-lg contact__info">
              <h2 className="text-2xl font-bold text-(--cs-yellow) mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-(--cs-yellow)/10 rounded-full">
                    <FiMail className="text-(--cs-yellow) text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <a
                      href="mailto:contact@varunai.com"
                      className="text-[#cbd5e1] hover:text-(--cs-yellow) transition"
                    >
                      contact@varunai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-(--cs-yellow)/10 rounded-full">
                    <FiPhone className="text-(--cs-yellow) text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Emergency Hotline
                    </h3>
                    <a
                      href="tel:+11234567890"
                      className="text-[#cbd5e1] hover:text-(--cs-yellow) transition"
                    >
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-(--cs-yellow)/10 rounded-full">
                    <FiMapPin className="text-(--cs-yellow) text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Headquarters</h3>
                    <p className="text-[#cbd5e1]">
                      123 Forest Preservation Way
                      <br />
                      Green Valley, CA 90210
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Alert */}
            <div className="bg-[#7f1d1d]/60 backdrop-blur-sm border border-[#ef4444]/30 rounded-xl p-6 animate-pulse contact__emergency">
              <h3 className="font-bold text-[#fecaca] flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Forest Fire Emergency
              </h3>
              <p className="text-[#fca5a5] mt-2 text-sm">
                If you're reporting an active forest fire, please call the
                emergency hotline immediately.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-(--cs-darker-blue)/60 backdrop-blur-sm border border-(--cs-yellow)/30 rounded-xl p-8 shadow-lg contact__form">
            <h2 className="text-2xl font-bold text-(--cs-yellow) mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#cbd5e1] mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#1e293b]/50 border border-[#334155] rounded-lg focus:ring-2 focus:ring-(--cs-yellow) focus:border-transparent text-white placeholder-[#64748b]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#cbd5e1] mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#1e293b]/50 border border-[#334155] rounded-lg focus:ring-2 focus:ring-(--cs-yellow) focus:border-transparent text-white placeholder-[#64748b]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#cbd5e1] mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-[#1e293b]/50 border border-[#334155] rounded-lg focus:ring-2 focus:ring-(--cs-yellow) focus:border-transparent text-white"
                >
                  <option value="">Select a topic</option>
                  <option value="prediction">Fire Prediction Inquiry</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="technical">Technical Support</option>
                  <option value="media">Media/Press Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#cbd5e1] mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1e293b]/50 border border-[#334155] rounded-lg focus:ring-2 focus:ring-(--cs-yellow) focus:border-transparent text-white placeholder-[#64748b]"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-(--cs-yellow) to-[#FFC300] text-(--cs-darker-blue) font-semibold rounded-lg hover:opacity-90 transition-all cursor-pointer "
              >
                <FiSend className="text-lg plane" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
