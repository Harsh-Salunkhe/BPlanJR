"use client";

import React from "react";
import { Lightbulb, Users, Rocket, CheckCircle } from "lucide-react";

const AboutUs = () => (
  // UPDATED: Background is now transparent
  <section id="about-us" className="py-24 bg-transparent">
    <div className="w-full px-6 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent text-glow">
            About The E-Cell
          </span>
        </h2>
        <p className="text-gray-400 mb-16 max-w-3xl mx-auto text-lg">
          Entrepreneurship Cell MANIT Bhopal is a student-run organisation dedicated to fostering a startup ecosystem among the youth community. A place where ambitions take flight, where passion meets purpose, ultimately giving you a chance to turn your ideas into entrepreneurial success.

        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          { icon: <Lightbulb size={32} />, title: "Innovation Hub", desc: "A platform for bold vision." },
          { icon: <Users size={32} />, title: "Elite Network", desc: "Connect with investors, industry experts and leaders." },
          { icon: <Rocket size={32} />, title: "Venture Support", desc: "Mentorship and resources for building startups." },
        ].map((f) => (
          <div
            key={f.title}
            className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8 text-center hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-yellow-500/10"
          >
            <div className="text-yellow-400 mb-4 inline-block p-3 bg-yellow-500/10 rounded-full">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent text-glow">
              About Shark Tank Junior
            </span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Shark Tank Jr. is a  Prominent  platform for young entrepreneurs to pitch their business ideas before industry experts and leaders. Showcase your vision, engage with the panel and gain valuable insights to take your idea forward. 

          </p>
          <div className="space-y-4">
            {[
              "Win exciting prizes and Goodies",
              "Mentorship from industry leaders",
              "Exclusive networking opportunities",
              "Expert Feedback",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="text-yellow-400" size={20} />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Competition Timeline</h3>
          <div className="relative">
            <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-yellow-500/30" />
            <ul className="space-y-8">
              {[
                { phase: "Registration Opens", date: "29 SEPT" },
                { phase: "Round 1 – PPT Submission", date: "29SEPT - 7OCT" },
                { phase: "Round 1 Results", date: "8–9 OCT" },
                { phase: "Round 2 – Offline Event+Mentorship", date: "10–11 OCT" },
                { phase: " Final Results", date: "OCT 29-30" },
              ].map((i) => (
                <li key={i.phase} className="flex items-center">
                  <div className="absolute left-0 h-4 w-4 rounded-full bg-yellow-400 border-4 border-gray-900" />
                  <div className="pl-8">
                    <p className="font-bold text-yellow-400">{i.phase}</p>
                    <p className="text-gray-400 text-sm">{i.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;