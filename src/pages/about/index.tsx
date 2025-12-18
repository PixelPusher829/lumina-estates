import React from "react";
import Hero from "./Hero";
import ImageGrid from "./ImageGrid";
import Mission from "./Mission";
import AgentsSection from "./AgentsSection";

const About: React.FC = () => {
	return (
		<div className="min-h-screen pt-28 pb-20 bg-white">
			<Hero />
			<ImageGrid />
			<Mission />
			<AgentsSection />
		</div>
	);
};

export default About;
