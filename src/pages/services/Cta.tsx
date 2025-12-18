import React from 'react';

const Cta: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden z-20">
         <div className="absolute inset-0 bg-slate-900"></div>
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
         
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Ready to elevate your <br/> real estate experience?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-colors shadow-lg shadow-white/10">
                 Schedule Consultation
               </button>
               <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                 Explore Properties
               </button>
            </div>
         </div>
      </section>
  );
};

export default Cta;
