import type React from "react";
import Agents from "@/features/agents-section";
import Hero from "./Hero";
import ImageGrid from "./ImageGrid";
import Mission from "./Mission";

const About: React.FC = () => {
	return (
		<div className="min-h-screen pt-28 pb-20 bg-white">
			<Hero />
			<ImageGrid />
			<Mission />
			<Agents />
		</div>
	);
};

export default About;
