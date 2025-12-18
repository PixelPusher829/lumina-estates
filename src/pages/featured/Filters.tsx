import React from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface FeaturedFiltersProps {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	filterType: string;
	setFilterType: (type: string) => void;
	clearFilters: () => void;
	propertyTypes: string[];
}

const FeaturedFilters: React.FC<FeaturedFiltersProps> = ({
	searchTerm,
	setSearchTerm,
	filterType,
	setFilterType,
	clearFilters,
	propertyTypes,
}) => {
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-10">
			<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
				{/* Search */}
				<div className="relative w-full md:w-96">
					<Search
						className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
						size={20}
					/>
					<input
						type="text"
						placeholder="Search by city, address, or name..."
						value={searchTerm}
						onChange={handleSearchChange}
						className="w-full pl-10 pr-10 py-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-primary-100 transition-all border border-transparent focus:border-primary-200"
					/>
					{searchTerm && (
						<button
							onClick={() => {
								setSearchTerm("");
							}}
							className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1">
							<X size={16} />
						</button>
					)}
				</div>

				{/* Type Filter */}
				<div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
					<div className="flex items-center gap-2 text-slate-500 mr-2">
						<SlidersHorizontal size={20} />
						<span className="hidden md:inline text-sm font-medium">
							Filters:
						</span>
					</div>
					{propertyTypes.map((type) => (
						<button
							key={type}
							onClick={() => setFilterType(type)}
							className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
								filterType === type
									? "bg-primary-600 text-white"
									: "bg-slate-50 text-slate-600 hover:bg-slate-100"
							}`}>
							{type}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default FeaturedFilters;
