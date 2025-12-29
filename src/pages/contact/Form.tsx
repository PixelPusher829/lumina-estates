import type React from "react";
import { Send } from "lucide-react";

const ContactForm: React.FC = () => {
	return (
		<div className="lg:col-span-2">
			<div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
				<h3 className="text-2xl font-bold text-slate-900 mb-8">
					Send us a Message
				</h3>

				<form className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<label className="text-sm font-semibold text-slate-700">
								First Name
							</label>
							<input
								type="text"
								className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
								placeholder="John"
							/>
						</div>
						<div className="space-y-2">
							<label className="text-sm font-semibold text-slate-700">
								Last Name
							</label>
							<input
								type="text"
								className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
								placeholder="Doe"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<label className="text-sm font-semibold text-slate-700">
								Email Address
							</label>
							<input
								type="email"
								className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
								placeholder="john@example.com"
							/>
						</div>
						<div className="space-y-2">
							<label className="text-sm font-semibold text-slate-700">
								Phone Number
							</label>
							<input
								type="tel"
								className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
								placeholder="+1 (555) 000-0000"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-semibold text-slate-700">
							Topic
						</label>
						<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-slate-600">
							<option>Buying a Property</option>
							<option>Selling a Property</option>
							<option>Renting</option>
							<option>Other</option>
						</select>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-semibold text-slate-700">
							Message
						</label>
						<textarea
							rows={5}
							className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
							placeholder="How can we help you?"
						></textarea>
					</div>

					<button
						type="button"
						className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
					>
						<Send size={20} />
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
