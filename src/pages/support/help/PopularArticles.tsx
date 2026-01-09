import { ArrowRight } from "lucide-react";
import type React from "react";

const PopularArticles: React.FC = () => {
	return (
		<div className="max-w-4xl mx-auto">
			<h2 className="text-2xl font-bold text-slate-900 mb-8">
				Popular Articles
			</h2>
			<div className="bg-white rounded-3xl shadow-sm border border-slate-100 divide-y divide-slate-100">
				{[
					"How do I schedule a property tour?",
					"What documents do I need for a mortgage pre-approval?",
					"Can I list my property if it needs renovations?",
					"Understanding closing costs and fees.",
				].map((article) => (
					<div
						key={article}
						className="p-6 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer"
					>
						<span className="text-slate-700 font-medium group-hover:text-primary-700 transition-colors">
							{article}
						</span>
						<ArrowRight
							size={18}
							className="text-slate-300 group-hover:text-primary-500 transition-colors"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularArticles;
