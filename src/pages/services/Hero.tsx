import type React from "react";

const Hero: React.FC = () => {
	return (
		<div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-6">
			<div className="relative z-10 max-w-4xl mx-auto text-center">
				<h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
					Elevating the <br />
					<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-green-400">
						Art of Living
					</span>
				</h1>
				<p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
					We curate experiences, not just transactions. Discover a suite of
					services designed for the modern homeowner and investor.
				</p>
			</div>

			{/* Decorative Background Blobs */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
			<div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
		</div>
	);
};

export default Hero;
