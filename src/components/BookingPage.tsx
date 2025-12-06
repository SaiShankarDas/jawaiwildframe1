import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/Section';
import { Footer } from './Footer';
import { MapPin, Calendar, Users, MessageSquare, User, Mail, Compass } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const safariOptions = [
  "Jawai Leopard Safari",
  "Prime Safari",
  "Premium Safari",
  "Birds & Crocodile Safari",
  "Village & Temple Safari",
  "Jungle Maad Safari",
  "Wildlife Photography Safari",
  "Other / Custom Package"
];

export const BookingPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically handle the API call with phoneNumber
  };

  return (
    <div className="min-h-screen bg-forest-green text-ivory font-sans selection:bg-desert selection:text-white flex flex-col">
      
      {/* Spacer for Fixed Navbar */}
      <div className="h-24 md:h-32"></div>

      <div className="flex-grow container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
        
        {/* Page Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight text-ivory">
              Book Your Jawai <br className="hidden md:block" /> Wildframe Experience
            </h1>
            <p className="font-light text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto leading-relaxed">
              Send us your preferred dates and requirements, and our team will help you plan your perfect wilderness stay in Jawai.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Booking Form */}
          <FadeIn delay={0.2} className="w-full">
            <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-8 border-b border-desert/30 pb-4 inline-block">
              Booking Details
            </h2>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 border border-white/20 rounded-xl p-12 text-center"
              >
                <div className="w-16 h-16 bg-desert rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-ivory mb-4">Request Received</h3>
                <p className="text-ivory/80 font-light">
                  Thank you! Your booking request has been submitted. Our team will contact you shortly to confirm availability.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 text-ivory/40" size={18} />
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-md py-3 pl-12 pr-4 text-ivory placeholder-ivory/30 focus:outline-none focus:border-desert focus:bg-white/10 transition-all duration-300"
                      placeholder="Your Full Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* WhatsApp Number with Flag Selector */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">WhatsApp Number</label>
                    <div className="relative">
                      <PhoneInput
                        defaultCountry="IN"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        placeholder="Enter phone number"
                        international
                        countryCallingCodeEditable={false}
                        className="w-full" // Wrapper class
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">Email (Optional)</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 text-ivory/40" size={18} />
                      <input 
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-md py-3 pl-12 pr-4 text-ivory placeholder-ivory/30 focus:outline-none focus:border-desert focus:bg-white/10 transition-all duration-300"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Number of People */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">Number of People</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-3.5 text-ivory/40" size={18} />
                      <input 
                        type="number" 
                        min="1"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-md py-3 pl-12 pr-4 text-ivory placeholder-ivory/30 focus:outline-none focus:border-desert focus:bg-white/10 transition-all duration-300"
                        placeholder="2"
                      />
                    </div>
                  </div>

                  {/* Travel Dates */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">Travel Dates</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-3.5 text-ivory/40" size={18} />
                      <input 
                        type="date" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-md py-3 pl-12 pr-4 text-ivory placeholder-ivory/30 focus:outline-none focus:border-desert focus:bg-white/10 transition-all duration-300 [color-scheme:dark]"
                      />
                    </div>
                  </div>
                </div>

                {/* Safari Options */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">Preferred Experience</label>
                  <div className="relative">
                    <Compass className="absolute left-4 top-3.5 text-ivory/40" size={18} />
                    <select 
                      className="w-full bg-white/5 border border-white/10 rounded-md py-3 pl-12 pr-4 text-ivory placeholder-ivory/30 focus:outline-none focus:border-desert focus:bg-white/10 transition-all duration-300 appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-forest-green text-ivory/50">Select an experience...</option>
                      {safariOptions.map((option, index) => (
                        <option key={index} value={option} className="bg-forest-green text-ivory">
                          {option}
                        </option>
                      ))}
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute right-4 top-4 pointer-events-none">
                      <svg className="w-4 h-4 text-ivory/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">Message / Special Requests</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-3.5 text-ivory/40" size={18} />
                    <textarea 
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-md py-3 pl-12 pr-4 text-ivory placeholder-ivory/30 focus:outline-none focus:border-desert focus:bg-white/10 transition-all duration-300 resize-none"
                      placeholder="Tell us about your preferences..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-desert to-[#d4b98c] text-charcoal font-bold uppercase tracking-widest py-4 rounded-md hover:scale-[1.02] transition-transform duration-300 shadow-lg"
                >
                  Submit Booking Request
                </button>
              </form>
            )}
          </FadeIn>

          {/* RIGHT COLUMN: Map & Location */}
          <FadeIn delay={0.4} className="w-full h-full flex flex-col">
            <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-8 border-b border-desert/30 pb-4 inline-block">
              Location
            </h2>

            <div className="flex-grow">
              <div className="w-full aspect-video md:aspect-square lg:aspect-[4/3] rounded-lg border-4 border-white/10 shadow-2xl overflow-hidden relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.618688624645!2d73.0649!3d25.1289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3942eb4900000001%3A0x1234567890abcdef!2sJawai%20Bandh%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
                  allowFullScreen 
                  loading="lazy"
                  className="w-full h-full"
                  title="Jawai Wildframe Location"
                ></iframe>
                
                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                  <div className="flex items-center text-ivory">
                    <MapPin className="text-desert mr-2" size={20} />
                    <span className="font-light tracking-wide">Jawai Bandh, Pali District, Rajasthan</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-ivory/80 font-light">
                 <p>
                   <strong className="text-desert font-bold uppercase text-xs tracking-widest block mb-1">Getting Here</strong>
                   Jawai is well connected by road from Udaipur (3 hrs) and Jodhpur (3 hrs). The nearest railway station is Falna (30 mins).
                 </p>
                 <p>
                   <strong className="text-desert font-bold uppercase text-xs tracking-widest block mb-1">Coordinates</strong>
                   25.1289° N, 73.0649° E
                 </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Footer Reuse */}
      <div className="bg-charcoal text-white mt-auto border-t border-white/10">
        <Footer />
      </div>
    </div>
  );
};
