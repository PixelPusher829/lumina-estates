import React from "react";
import Hero from "@/pages/home/Hero"; // Existing component

import Services from "./Services";
import FeaturedProperties from "./FeaturedProperties";
import Neighbourhoods from "./Neighbourhoods";
import Testimonials from "./Testimonials";
import Cta from "./Cta";

interface HomeProps {
	favorites: string[];
	toggleFavorite: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ favorites, toggleFavorite }) => {
	return (
		<div className="min-h-screen">
			<Hero />
			<Services />
			<FeaturedProperties
				favorites={favorites}
				onToggleFavorite={toggleFavorite}
			/>
			<Neighbourhoods />
			<Testimonials />
			<Cta />
		</div>
	);
};

export default Home;
