import type React from "react";
import { Search } from "lucide-react";

const SearchHeader: React.FC = () => {
	return (
		<div className="bg-slate-900 text-white py-16 md:py-24 mb-12">
			<div className="container mx-auto px-6 text-center max-w-3xl">
				<h1 className="text-3xl md:text-5xl font-bold mb-6">
					How can we help you?
				</h1>
				<div className="relative max-w-xl mx-auto">
					<Search
						className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
						size={20}
					/>
					<input
						type="text"
						placeholder="Search for answers..."
						className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all shadow-xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default SearchHeader;
