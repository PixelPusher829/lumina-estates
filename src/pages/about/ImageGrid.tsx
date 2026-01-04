import type React from "react";
import officeImg from "@/shared/images/about/office.webp";
import teamImg from "@/shared/images/about/team.webp";

const ImageGrid: React.FC = () => {
	return (
		<div className="container mx-auto px-6 mb-24">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-500px md:h-600px">
				<div className="md:col-span-2 h-full">
					<img
						src={teamImg}
						alt="Team meeting"
						className="w-full h-full object-cover rounded-3xl"
					/>
				</div>
				<div className="flex flex-col gap-6 h-full">
					<img
						src={officeImg}
						alt="Office details"
						className="w-full h-1/2 object-cover rounded-3xl"
					/>
					<div className="h-1/2 bg-slate-900 rounded-3xl p-8 flex flex-col justify-center text-white">
						<div className="text-5xl font-bold mb-2">15+</div>
						<div className="text-slate-400 font-medium">
							Years of Excellence
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageGrid;
