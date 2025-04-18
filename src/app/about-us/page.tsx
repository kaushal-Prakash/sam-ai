"use client";
import Link from 'next/link';
import React from 'react';
import { FiAlertTriangle, FiMap, FiTrendingUp, FiFileText, FiShield } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-(--cs-dark-blue) to-(--cs-darker-blue) text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section with fade-in animation */}
      <div className="max-w-7xl mx-auto text-center pt-10 mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-(--cs-yellow) to-[#FFC300] mb-6 animate-float">
          About Varun AI
        </h1>
        <p className="text-xl md:text-2xl text-[#cbd5e1] max-w-4xl mx-auto animate-fade-in-delay">
          A machine learning-driven platform predicting forest fire risks using NASA&apos;s datasets and advanced analytics.
        </p>
      </div>

      {/* Platform Overview with slide-up animation */}
      <div className="max-w-7xl mx-auto bg-[#000814]/60 backdrop-blur-sm border border-(--cs-yellow)/30 rounded-xl p-8 mb-16 shadow-lg animate-slide-up">
        <h2 className="text-2xl md:text-3xl font-bold text-(--cs-yellow) mb-6">Our Platform</h2>
        <p className="text-lg mb-8">
          We provide comprehensive forest fire monitoring and prediction through:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <FiAlertTriangle className="text-3xl" />, text: "Real-time risk prediction" },
            { icon: <FiMap className="text-3xl" />, text: "Heat map visualization" },
            { icon: <FiTrendingUp className="text-3xl" />, text: "Trend analysis" },
            { icon: <FiFileText className="text-3xl" />, text: "Incident reports" },
            { icon: <FiShield className="text-3xl" />, text: "Prevention guides" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-4 bg-(--cs-blue-gray)/50 rounded-lg hover:scale-105 transition-transform duration-300 animate-icon-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-(--cs-yellow)">{item.icon}</div>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features with staggered animations */}
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Prediction Feature */}
        <div className="bg-[#000814]/60 backdrop-blur-sm border border-(--cs-yellow)/30 rounded-xl p-8 shadow-lg animate-feature-slide-right">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-(--cs-yellow) mb-4 flex items-center gap-2">
                <FiMap className="text-(--cs-yellow) animate-pulse" /> 1. Fire Prediction & Heat Map
              </h3>
              <div className="text-sm text-(--cs-yellow) mb-2">/prediction</div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <h4 className="font-bold text-lg">Functionality:</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li className="animate-text-reveal">
                  <span className="font-semibold">User Inputs:</span>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Location (search or map selection)</li>
                    <li>Optional time range selection</li>
                  </ul>
                </li>
                <li className="animate-text-reveal" style={{ animationDelay: '0.1s' }}>
                  <span className="font-semibold">AI Prediction Model:</span>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>NASA dataset with ML (Random Forest, LSTM, CNN)</li>
                    <li>Computes fire risk with confidence scores</li>
                    <li>Optional weather API integration</li>
                  </ul>
                </li>
                <li className="animate-text-reveal" style={{ animationDelay: '0.2s' }}>
                  <span className="font-semibold">Heat Map Visualization:</span>
                  <ul className="list-[square] pl-5 mt-1 space-y-1">
                    <li className="text-red-400">🔴 High-Risk Zone - Immediate danger</li>
                    <li className="text-orange-400">🟠 Moderate Risk - Fire possible</li>
                    <li className="text-green-400">🟢 Safe Zone - No immediate risk</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trends Feature */}
        <div className="bg-[#000814]/60 backdrop-blur-sm border border-(--cs-yellow)/30 rounded-xl p-8 shadow-lg animate-feature-slide-left">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-(--cs-yellow) mb-4 flex items-center gap-2">
                <FiTrendingUp className="text-(--cs-yellow) animate-pulse" /> 2. Fire Trends & Analysis
              </h3>
              <div className="text-sm text-(--cs-yellow) mb-2">/trends</div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <h4 className="font-bold text-lg">Functionality:</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li className="animate-text-reveal">Interactive graphs of past fire occurrences</li>
                <li className="animate-text-reveal" style={{ animationDelay: '0.1s' }}>Monthly & yearly comparison analytics</li>
                <li className="animate-text-reveal" style={{ animationDelay: '0.2s' }}>Seasonal fire pattern visualization</li>
                <li className="animate-text-reveal" style={{ animationDelay: '0.3s' }}>Forecast models for upcoming months</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reports Feature */}
        <div className="bg-[#000814]/60 backdrop-blur-sm border border-(--cs-yellow)/30 rounded-xl p-8 shadow-lg animate-feature-slide-right">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-(--cs-yellow) mb-4 flex items-center gap-2">
                <FiFileText className="text-(--cs-yellow) animate-pulse" /> 3. Incident Reports
              </h3>
              <div className="text-sm text-(--cs-yellow) mb-2">/reports</div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <h4 className="font-bold text-lg">Functionality:</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li className="animate-text-reveal">Real-time fire alerts from satellite data</li>
                <li className="animate-text-reveal" style={{ animationDelay: '0.1s' }}>User-submitted incident reporting system</li>
                <li className="animate-text-reveal" style={{ animationDelay: '0.2s' }}>
                  Comprehensive filtering by:
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Date range</li>
                    <li>Geographic location</li>
                    <li>Severity level</li>
                  </ul>
                </li>
                <li className="animate-text-reveal" style={{ animationDelay: '0.3s' }}>Historical data archive</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prevention Feature */}
        <div className="bg-[#000814]/60 backdrop-blur-sm border border-(--cs-yellow)/30 rounded-xl p-8 shadow-lg animate-feature-slide-left">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-(--cs-yellow) mb-4 flex items-center gap-2">
                <FiShield className="text-(--cs-yellow) animate-pulse" /> 4. Prevention Guide
              </h3>
              <div className="text-sm text-(--cs-yellow) mb-2">/prevention</div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <h4 className="font-bold text-lg">Functionality:</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li className="animate-text-reveal">Location-specific fire safety protocols</li>
                <li className="animate-text-reveal" style={{ animationDelay: '0.1s' }}>Emergency response action plans</li>
                <li className="animate-text-reveal" style={{ animationDelay: '0.2s' }}>
                  Preventative measures for:
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Campers & hikers</li>
                    <li>Forestry workers</li>
                    <li>Local communities</li>
                  </ul>
                </li>
                <li className="animate-text-reveal" style={{ animationDelay: '0.3s' }}>Educational resources on fire ecology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action with pulse animation */}
      <div className="max-w-7xl mx-auto mt-16 text-center animate-bounce-in">
        <h2 className="text-2xl md:text-3xl font-bold text-(--cs-yellow) mb-6">
          Ready to explore our fire prediction technology?
        </h2>
        <Link 
          href="/prediction" 
          className="px-8 py-3 bg-gradient-to-r from-(--cs-yellow) to-[#FFC300] text-[#000814] font-bold rounded-lg hover:opacity-90 transition-all cursor-pointer animate-pulse hover:animate-none"
        >
          Get Started Now
        </Link>
      </div>

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideRight {
          from { 
            opacity: 0;
            transform: translateX(-50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideLeft {
          from { 
            opacity: 0;
            transform: translateX(50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes textReveal {
          from { 
            opacity: 0;
            transform: translateX(-10px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounceIn {
          0% { 
            opacity: 0;
            transform: scale(0.8);
          }
          50% { 
            opacity: 1;
            transform: scale(1.05);
          }
          100% { 
            transform: scale(1);
          }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes iconFloat {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.05); }
          100% { transform: translateY(0) scale(1); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        
        .animate-feature-slide-right {
          animation: slideRight 0.8s ease-out;
        }
        
        .animate-feature-slide-left {
          animation: slideLeft 0.8s ease-out;
        }
        
        .animate-text-reveal {
          animation: textReveal 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        .animate-icon-float {
          animation: iconFloat 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;