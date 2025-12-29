import type React from "react";
import Hero from "@/pages/home/Hero"; // Existing component
import Cta from "./Cta";
import FeaturedProperties from "./FeaturedProperties";
import Neighbourhoods from "./Neighbourhoods";
import Services from "./Services";
import Testimonials from "./Testimonials";

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
