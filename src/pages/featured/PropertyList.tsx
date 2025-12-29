import type React from "react";
import PropertyCard from "@/shared/layout/PropertyCard";
import type { Property } from "@/shared/types/types";
import { Search } from "lucide-react";

interface FeaturedPropertyListProps {
	filteredProperties: Property[];
	loading: boolean;
	favorites: string[];
	onToggleFavorite: (id: string) => void;
	onClearFilters: () => void;
}

const FeaturedPropertyList: React.FC<FeaturedPropertyListProps> = ({
	filteredProperties,
	loading,
	favorites,
	onToggleFavorite,
	onClearFilters,
}) => {
	return (
		<div>
			{/* Grid */}
			{loading ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<div
							key={i}
							className="h-[450px] bg-slate-200 rounded-3xl animate-pulse"
						></div>
					))}
				</div>
			) : filteredProperties.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProperties.map((prop) => (
						<PropertyCard
							key={prop.id}
							property={prop}
							isFavorite={favorites.includes(prop.id)}
							onToggleFavorite={onToggleFavorite}
						/>
					))}
				</div>
			) : (
				<div className="text-center py-20">
					<div className="text-slate-300 mb-4 flex justify-center">
						<Search size={48} />
					</div>
					<h3 className="text-xl font-bold text-slate-900 mb-2">
						No properties found
					</h3>
					<p className="text-slate-500">
						Try adjusting your search criteria or filters.
					</p>
					<button
						onClick={onClearFilters}
						className="mt-6 text-primary-600 font-medium hover:text-primary-700 underline"
					>
						Clear all filters
					</button>
				</div>
			)}
		</div>
	);
};

export default FeaturedPropertyList;
