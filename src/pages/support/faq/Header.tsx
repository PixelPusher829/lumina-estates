import { HelpCircle } from "lucide-react";
import type React from "react";

const FaqHeader: React.FC = () => {
	return (
		<div className="text-center mb-16">
			<div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-6">
				<HelpCircle size={32} />
			</div>
			<h1 className="text-4xl font-bold text-slate-900 mb-4">
				Frequently Asked Questions
			</h1>
			<p className="text-slate-500">
				Everything you need to know about buying, selling, and renting with
				Lumina.
			</p>
		</div>
	);
};

export default FaqHeader;
