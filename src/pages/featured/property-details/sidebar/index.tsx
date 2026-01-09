import type React from "react";
import type { Property } from "@/shared/types/types";
import AgentCard from "./AgentCard";
import PricingCard from "./PricingCard";

interface SidebarProps {
	property: Property;
}

const Sidebar: React.FC<SidebarProps> = ({ property }) => {
	return (
		<div className="lg:col-span-4 relative">
			<div className="space-y-6">
				<PricingCard property={property} />
				<AgentCard property={property} />
			</div>
		</div>
	);
};

export default Sidebar;
