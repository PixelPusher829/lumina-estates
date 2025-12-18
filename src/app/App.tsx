import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/shared/layout/Navbar";
import Footer from "@/shared/layout/Footer";
import { Home, PropertyDetails, Featured, Services, Contact, About, Agents, Legal, Help, FAQ } from "@/pages/index";

interface AppProps {
	favorites: string[];
	toggleFavorite: (id: string) => void;
}

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
		<Router>
			<div className="flex flex-col min-h-screen">
				<Navbar favoritesCount={favorites.length} />

				<main className="flex-grow">
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
								<Featured
									favorites={favorites}
									toggleFavorite={toggleFavorite}
								/>
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
		</Router>
	);
};

export default App;
