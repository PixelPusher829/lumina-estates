import type React from "react";
import type { Property } from "@/shared/types/types";
import Header from "../Header";
import Amenities from "./Amenities";
import Description from "./Description";
import Highlights from "./Highlights";
import Stats from "./Stats";

interface InfoSectionProps {
	property: Property;
}

const InfoSection: React.FC<InfoSectionProps> = ({ property }) => {
	return (
		<div className="lg:col-span-8 mb-8 space-y-8">
			<Header property={property} />

			<div className="h-px bg-slate-100"></div>

			<Stats property={property} />

			<div className="h-px bg-slate-100"></div>

			<Description property={property} />

			<Amenities property={property} />

			<div className="h-px bg-slate-100"></div>

			<Highlights property={property} />
		</div>
	);
};

export default InfoSection;
