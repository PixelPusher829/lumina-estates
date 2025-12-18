import React from "react";

const ImageGrid: React.FC = () => {
	return (
		<div className="container mx-auto px-6 mb-24">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px] md:h-[600px]">
				<div className="md:col-span-2 h-full">
					<img
						src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
						alt="Team meeting"
						className="w-full h-full object-cover rounded-3xl"
					/>
				</div>
				<div className="flex flex-col gap-6 h-full">
					<img
						src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600"
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
