import type React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import {
	About,
	Agents,
	Contact,
	FAQ,
	Featured,
	Help,
	Home,
	Legal,
	PropertyDetails,
	Services,
} from "@/pages";
import Footer from "@/shared/layout/Footer";
import Navbar from "@/shared/layout/Navbar";
import ScrollToTop from "@/shared/utils/ScrollToTop";

const App: React.FC = () => {
	// Favorites State Logic
	const [favorites, setFavorites] = useState<string[]>(() => {
		const saved = localStorage.getItem("lumina_favorites");
		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		localStorage.setItem("lumina_favorites", JSON.stringify(favorites));
	}, [favorites]);

	const toggleFavorite = (id: string) => {
		setFavorites((prev) =>
			prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
		);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<ScrollToTop />
			<Navbar favoritesCount={favorites.length} />

			<main className="grow">
				<Routes>
					<Route
						path="/"
						element={
							<Home favorites={favorites} toggleFavorite={toggleFavorite} />
						}
					/>
					<Route
						path="/featured"
						element={
							<Featured favorites={favorites} toggleFavorite={toggleFavorite} />
						}
					/>
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/agents" element={<Agents />} />
					<Route path="/legal" element={<Legal />} />
					<Route path="/help" element={<Help />} />
					<Route path="/faq" element={<FAQ />} />
					<Route
						path="/property/:id"
						element={
							<PropertyDetails
								favorites={favorites}
								toggleFavorite={toggleFavorite}
							/>
						}
					/>
				</Routes>
			</main>

			<Footer />
		</div>
	);
};

export default App;
