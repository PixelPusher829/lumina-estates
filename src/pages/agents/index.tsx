import React from "react";
import AgentsHeader from "./AgentsHeader";
import AgentGrid from "./AgentGrid";

const Agents: React.FC = () => {
	return (
		<div className="min-h-screen pt-28 pb-20 bg-slate-50">
			<div className="container mx-auto px-6">
				<AgentsHeader />
				<AgentGrid />
			</div>
		</div>
	);
};

export default Agents;
