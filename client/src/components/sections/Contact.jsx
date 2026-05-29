import emailjs from 'emailjs-com';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID, 
      e.target, 
      import.meta.env.VITE_PUBLIC_KEY
    ).then((result) => {
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    }).catch((error) => alert("Oops! something went wrong. Please try again.."));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-24 bg-[#030014] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>

      <div 
        data-aos="fade-up" 
        data-aos-delay="200" 
        className="relative z-10 px-8 py-12 w-full max-w-[550px] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm tracking-wide">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="group relative">
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name} 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 placeholder:text-gray-500" 
              placeholder="Name"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-focus-within:w-[80%] opacity-50"></div>
          </div>

          <div className="group relative">
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={formData.email} 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 placeholder:text-gray-500" 
              placeholder="Email"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-focus-within:w-[80%] opacity-50"></div>
          </div>

          <div className="group relative">
            <textarea 
              id="message" 
              name="message" 
              required 
              value={formData.message} 
              rows={5}  
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 placeholder:text-gray-500 resize-none" 
              placeholder="Your Message..."
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
           
          </div>

          <button 
            type="submit" 
            className="w-full relative group overflow-hidden bg-blue-600 text-white py-4 px-6 rounded-2xl font-bold tracking-widest transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              SEND MESSAGE
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};