import type React from "react";
import AgentGrid from "./AgentGrid";
import AgentsHeader from "./AgentsHeader";

const AgentsSection: React.FC = () => {
	return (
		<div className="container mx-auto px-6">
			<AgentsHeader />
			<AgentGrid />
		</div>
	);
};

export default AgentsSection;
