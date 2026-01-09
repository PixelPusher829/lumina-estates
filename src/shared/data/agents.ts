import alexImg from "@/shared/images/agents/alex-rivera.webp";
import davidImg from "@/shared/images/agents/david-sterling.webp";
import jessicaImg from "@/shared/images/agents/jessica-alba.webp";
import karenImg from "@/shared/images/agents/karen-miller.webp";
import michaelImg from "@/shared/images/agents/michael-chen.webp";
import sarahImg from "@/shared/images/agents/sarah-jenkins.webp";

export interface Agent {
	name: string;
	phone: string;
	email: string;
	image: string;
}

export const AGENTS: Agent[] = [
	{
		name: "Sarah Jenkins",
		phone: "+1 555 0123",
		email: "sarah@luminaestates.com",
		image: sarahImg,
	},
	{
		name: "David Sterling",
		phone: "+1 555 9999",
		email: "david@luminaestates.com",
		image: davidImg,
	},

	{
		name: "Karen Miller",
		phone: "+1 555 4444",
		email: "karen@luminaestates.com",
		image: karenImg,
	},
	{
		name: "Alex Rivera",
		phone: "+1 555 7777",
		email: "alex@luminaestates.com",
		image: alexImg,
	},
	{
		name: "Jessica Alba",
		phone: "+1 555 0888",
		email: "jessica@luminaestates.com",
		image: jessicaImg,
	},
	{
		name: "Michael Chen",
		phone: "+1 555 0199",
		email: "michael@luminaestates.com",
		image: michaelImg,
	},
];
