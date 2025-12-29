import type React from "react";

const TermsOfService: React.FC = () => {
	return (
		<>
			<section className="mb-16 border-b border-slate-100 pb-16">
				<h2 className="text-3xl font-bold text-slate-900 mb-6">
					Terms of Service
				</h2>

				<h3 className="text-xl font-bold text-slate-900 mb-4">
					1. Acceptance of Terms
				</h3>
				<p className="text-slate-600 mb-6">
					By accessing or using the Lumina Estates website and services, you
					agree to be bound by these Terms of Service. If you do not agree to
					these terms, please do not use our services.
				</p>

				<h3 className="text-xl font-bold text-slate-900 mb-4">
					2. Use of Services
				</h3>
				<p className="text-slate-600 mb-6">
					You agree to use our services only for lawful purposes and in
					accordance with these Terms. You are prohibited from violating or
					attempting to violate the security of the Site, including, without
					limitation:
				</p>
				<ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
					<li>Accessing data not intended for you.</li>
					<li>
						Attempting to probe, scan, or test the vulnerability of a system.
					</li>
					<li>Interfering with service to any user, host, or network.</li>
				</ul>

				<h3 className="text-xl font-bold text-slate-900 mb-4">
					3. Property Listings
				</h3>
				<p className="text-slate-600 mb-6">
					Lumina Estates strives to provide accurate and up-to-date property
					information. However, we do not warrant that property descriptions,
					prices, or other content on the site is accurate, complete, reliable,
					current, or error-free.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold text-slate-900 mb-4">
					4. Limitation of Liability
				</h2>
				<p className="text-slate-600 mb-4">
					In no event shall Lumina Estates, its directors, employees, partners,
					agents, suppliers, or affiliates, be liable for any indirect,
					incidental, special, consequential or punitive damages, including
					without limitation, loss of profits, data, use, goodwill, or other
					intangible losses.
				</p>
			</section>
		</>
	);
};

export default TermsOfService;
