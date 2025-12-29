import type React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { AGENTS as agentData } from "@/shared/data/agents";
import { Link } from "react-router";

const AgentGrid: React.FC = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{agentData.map((agent, idx) => (
					<div
						key={idx}
						className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
					>
						<div className="aspect-square overflow-hidden relative">
							<img
								src={agent.image}
								alt={agent.name}
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
								<Link
									to="/contact"
									className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl text-center hover:bg-slate-100 transition-colors"
								>
									Contact {agent.name.split(" ")[0]}
								</Link>
							</div>
						</div>
						<div className="p-6">
							<h3 className="text-xl font-bold text-slate-900 mb-1">
								{agent.name}
							</h3>
							<p className="text-slate-500 text-sm mb-6">
								Senior Real Estate Agent
							</p>

							<div className="space-y-3">
								<div className="flex items-center gap-3 text-slate-600">
									<Phone size={18} className="text-primary-600" />
									<span className="text-sm">{agent.phone}</span>
								</div>
								<div className="flex items-center gap-3 text-slate-600">
									<Mail size={18} className="text-primary-600" />
									<span className="text-sm">agent@luminaestates.com</span>
								</div>
								<div className="flex items-center gap-3 text-slate-600">
									<MapPin size={18} className="text-primary-600" />
									<span className="text-sm">Metropolis, NY</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
	);
};

export default AgentGrid;
