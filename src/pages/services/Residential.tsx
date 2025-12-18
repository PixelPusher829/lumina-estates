import React from 'react';
import { Home } from 'lucide-react';

const Residential: React.FC = () => {
  return (
    <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Text Content */}
            <div className="lg:w-1/2 relative z-10">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-6">
                <Home size={24} />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Residential Sales & <br/>Acquisitions</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Finding a home is about finding your place in the world. Our bespoke search process combines AI-driven market analysis with human intuition to uncover off-market gems and negotiate the best possible terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <div className="flex items-center gap-3">
                    <div className="w-1 h-12 bg-slate-200"></div>
                    <div>
                       <span className="block text-2xl font-bold text-slate-900">14 Days</span>
                       <span className="text-sm text-slate-500 uppercase tracking-wider">Avg. Time to Sell</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Asymmetrical Image Cluster */}
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 w-4/5 ml-auto">
                 <img 
                   src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" 
                   alt="Modern Living Room" 
                   className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/5]"
                 />
               </div>
               {/* Floating Overlay Image */}
               <div className="absolute -bottom-6 -left-4 w-1/2 z-20">
                  <img 
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600" 
                    alt="Keys" 
                    className="rounded-3xl shadow-xl border-8 border-white w-full object-cover aspect-square"
                  />
               </div>
               {/* Decorative Circle */}
               <div className="absolute -top-12 -right-12 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10"></div>
            </div>

          </div>
        </div>
      </section>
  );
};

export default Residential;
