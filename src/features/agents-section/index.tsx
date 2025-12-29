import type React from "react";
import AgentsHeader from "./AgentsHeader";
import AgentGrid from "./AgentGrid";

const AgentsSection: React.FC = () => {
	return (
		<div className="container mx-auto px-6">
			<AgentsHeader />
			<AgentGrid />
		</div>
	);
};

export default AgentsSection;
