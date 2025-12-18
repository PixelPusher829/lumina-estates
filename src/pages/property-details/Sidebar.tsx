import React from "react";
import { Property } from "@/shared/types/types";
import PricingCard from "./PricingCard";
import AgentCard from "./AgentCard";

interface SidebarProps {
	property: Property;
}

const Sidebar: React.FC<SidebarProps> = ({ property }) => {
	return (
		<div className="lg:col-span-4 relative">
			<div className="sticky top-28 space-y-6">
				<PricingCard property={property} />
				<AgentCard property={property} />
			</div>
		</div>
	);
};

export default Sidebar;
