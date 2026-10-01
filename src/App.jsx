import React, { useState, useEffect, useRef } from "react";
import {  
  Menu,
  X,
  ArrowRight,
  Lightbulb,
  Users,
  Rocket,
  CheckCircle,
  Mail,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import EventGallery from './components/EventGallery';
import MetricsSectiion from './components/MetricsSection';
import HeroSection from './components/HeroSection';
import MetricsSection from './components/MetricsSection';
import Navigation from './components/Navigation';
import RegisterNow from './components/RegisterNow';
import WhyRegister from './components/WhyRegister';
import Footer from './components/Footer';
import ResourcesSection from './components/ppt&themes';







export default function App() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutUs />
      <MetricsSection />
      <WhyRegister />
      <ResourcesSection/>
      <RegisterNow />
      <EventGallery />
      <ContactUs />
      <Footer />
    </div>
  );
}