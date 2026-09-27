import { useState } from "react";
import { Mail, Linkedin, Phone, Instagram } from "lucide-react";  // Added Phone and Instagram icons
import HarshSir from "../assets/HarshSir.jpg";
import GurleenMam from "../assets/GurleenMa'am.jpg";
import NiddhiMam from "../assets/NiddhiMa'am.jpg";
import SannidhiyaSir from "../assets/SannidhyaSir.jpg";
import NachiketSir from "../assets/NachiketSir.jpg";

const team = [
  { name: "Harman Singh Rekhi", role: "Joint Secretary", email: "harmanrekhi006@gmail.com", phone: "+91-9301040515", linkedin: "linkedin.com/in/harman-singh-rekhi-833073326", img: NachiketSir },
  { name: "Aaradhya Laad", role: "Events Lead", email: "aaradhyalaad21@gmail.com", phone: "+91-8251093465", linkedin: "https://www.linkedin.com/in/aaradhya-laad-74a169323/", img: SannidhiyaSir },
  { name: "Tanishka Meena", role: "Public Relations Lead", email: "mtanishka897@gmail.com", phone: "+91-8302727288", linkedin: "https://www.linkedin.com/in/tanishka-meena-10aa72323/", img: HarshSir },
  { name: "Aryan Singh", role: "Startup & Investments Lead", email: "aryanmishra@ecellnitb.com", phone: "+91-8989120077", linkedin: "linkedin.com/in/aryan-mishra-369825326", img: GurleenMam },
  { name: "Ayan Khan", role: "Promotions Lead", email: "ayankhanpqr0@gmail.com", phone: "+91-9589970823", linkedin: "https://www.linkedin.com/in/ayan-khan-0a9640326/", img: NiddhiMam },
];

const TeamCard = ({ member }) => {
  const [expanded, setExpanded] = useState(false);
  const iconClass = "text-gray-300 hover:text-yellow-400 transition-colors w-6 h-6";

  return (
    <div
      className={`relative bg-white/10 backdrop-blur-lg border border-yellow-500/20 rounded-2xl shadow-lg shadow-yellow-500/10 transition-all duration-500 overflow-hidden cursor-pointer w-full max-w-xs ${expanded ? "scale-105" : "hover:scale-105"}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className={`transition-all duration-500 flex justify-center ${expanded ? "absolute inset-0 w-full h-full" : ""}`}>
        <div className={`transition-all duration-500 ${expanded ? "w-full h-full" : "w-24 h-24 mt-6 rounded-full border-2 border-yellow-400 shadow-md overflow-hidden"}`}>
          <img src={member.img} alt={member.name} className={`object-cover w-full h-full transition-all duration-500 ${expanded ? "rounded-none" : "rounded-full"}`} />
        </div>
      </div>
      {!expanded && (
        <div className="p-6 text-center space-y-3 mt-4">
          <h3 className="text-l font-bold text-yellow-400">{member.name}</h3>
          <p className="text-gray-300 text-sm">{member.role}</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href={member.linkedin} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              <Linkedin className={iconClass} />
            </a>
            <a href={`mailto:${member.email}`} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              <Mail className={iconClass} />
            </a>
            <a href={`tel:${member.phone}`} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              <Phone className={iconClass} />
            </a>
            
          </div>
        </div>
      )}
    </div>
  );
};

const ContactUs = () => (
  <section id="contact" className="py-20 bg-transparent">
    <div className="w-full px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent text-glow">
          Contact Us
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
        {team.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  </section>
);

export default ContactUs;
