import React from "react";
import { ShieldCheck, Zap, HeartHandshake, Home as HomeIcon } from "lucide-react";

const Services: React.FC = () => {
	return (
		<section className="py-24 bg-white">
			<div className="container mx-auto px-6">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl font-bold text-slate-900 mb-4">
						Why Choose Lumina
					</h2>
					<p className="text-slate-500 text-lg">
						Enhance your property listings with our premium tools and expert
						guidance. We make real estate simple.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{[
						{
							icon: ShieldCheck,
							title: "Property Insurance",
							desc: "We ensure your asset is protected with top-tier coverage options.",
						},
						{
							icon: Zap,
							title: "Fast Processing",
							desc: "Digital-first workflows mean you get keys in hand faster than ever.",
						},
						{
							icon: HeartHandshake,
							title: "Trusted Advisors",
							desc: "Our agents are top-rated professionals dedicated to your success.",
						},
						{
							icon: HomeIcon,
							title: "Quality Homes",
							desc: "Every listing is verified for quality and accuracy.",
						},
					].map((service, idx) => (
						<div
							key={idx}
							className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:shadow-xl transition-all duration-300 group">
							<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 mb-6 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
								<service.icon size={28} />
							</div>
							<h3 className="text-lg font-bold text-slate-900 mb-3">
								{service.title}
							</h3>
							<p className="text-slate-500 text-sm leading-relaxed">
								{service.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
