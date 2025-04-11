import Link from 'next/link';
import React from 'react';
import { FiAlertTriangle, FiMap, FiTrendingUp, FiFileText, FiShield } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-(--cs-dark-blue) to-(--cs-darker-blue) text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center pt-10 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-(--cs-yellow) to-[#FFC300] mb-6">
          About Varun AI
        </h1>
        <p className="text-xl md:text-2xl text-[#cbd5e1] max-w-4xl mx-auto">
          A machine learning-driven platform predicting forest fire risks using NASA's datasets and advanced analytics.
        </p>
      </div>

      {/* Platform Overview */}
      <div className="max-w-7xl mx-auto bg-[#000814]/60 backdrop-blur-sm border border-(--cs-yellow)/30 rounded-xl p-8 mb-16 shadow-lg">
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
            <div key={index} className="flex items-center gap-4 p-4 bg-(--cs-blue-gray)/50 rounded-lg">
              <div className="text-(--cs-yellow)">{item.icon}</div>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Prediction Feature */}
        <div className="bg-[#000814]/60 backdrop-blur-sm border border-(--cs-yellow)/30 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-(--cs-yellow) mb-4 flex items-center gap-2">
                <FiMap className="text-(--cs-yellow)" /> 1. Fire Prediction & Heat Map
              </h3>
              <div className="text-sm text-(--cs-yellow) mb-2">/prediction</div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <h4 className="font-bold text-lg">Functionality:</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  <span className="font-semibold">User Inputs:</span>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Location (search or map selection)</li>
                    <li>Optional time range selection</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">AI Prediction Model:</span>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>NASA dataset with ML (Random Forest, LSTM, CNN)</li>
                    <li>Computes fire risk with confidence scores</li>
                    <li>Optional weather API integration</li>
                  </ul>
                </li>
                <li>
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
        <div className="bg-[#000814]/60 backdrop-blur-sm border border-(--cs-yellow)/30 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-(--cs-yellow) mb-4 flex items-center gap-2">
                <FiTrendingUp className="text-(--cs-yellow)" /> 2. Fire Trends & Analysis
              </h3>
              <div className="text-sm text-(--cs-yellow) mb-2">/trends</div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <h4 className="font-bold text-lg">Functionality:</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li>Interactive graphs of past fire occurrences</li>
                <li>Monthly & yearly comparison analytics</li>
                <li>Seasonal fire pattern visualization</li>
                <li>Forecast models for upcoming months</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reports Feature */}
        <div className="bg-[#000814]/60 backdrop-blur-sm border border-(--cs-yellow)/30 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-(--cs-yellow) mb-4 flex items-center gap-2">
                <FiFileText className="text-(--cs-yellow)" /> 3. Incident Reports
              </h3>
              <div className="text-sm text-(--cs-yellow) mb-2">/reports</div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <h4 className="font-bold text-lg">Functionality:</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li>Real-time fire alerts from satellite data</li>
                <li>User-submitted incident reporting system</li>
                <li>Comprehensive filtering by:
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Date range</li>
                    <li>Geographic location</li>
                    <li>Severity level</li>
                  </ul>
                </li>
                <li>Historical data archive</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prevention Feature */}
        <div className="bg-[#000814]/60 backdrop-blur-sm border border-(--cs-yellow)/30 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-(--cs-yellow) mb-4 flex items-center gap-2">
                <FiShield className="text-(--cs-yellow)" /> 4. Prevention Guide
              </h3>
              <div className="text-sm text-(--cs-yellow) mb-2">/prevention</div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <h4 className="font-bold text-lg">Functionality:</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li>Location-specific fire safety protocols</li>
                <li>Emergency response action plans</li>
                <li>Preventative measures for:
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Campers & hikers</li>
                    <li>Forestry workers</li>
                    <li>Local communities</li>
                  </ul>
                </li>
                <li>Educational resources on fire ecology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-(--cs-yellow) mb-6">
          Ready to explore our fire prediction technology?
        </h2>
        <Link href="/prediction" className="px-8 py-3 bg-gradient-to-r from-(--cs-yellow) to-[#FFC300] text-[#000814] font-bold rounded-lg hover:opacity-90 transition-all cursor-pointer">
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;