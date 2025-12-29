import type React from "react";
import Header from "./Header";
import FaqList from "./FaqList";
import Cta from "./Cta";

const FAQ: React.FC = () => {
	return (
		<div className="min-h-screen pt-28 pb-20 bg-slate-50">
			<div className="container mx-auto px-6 max-w-3xl">
				<Header />
				<FaqList />
				<Cta />
			</div>
		</div>
	);
};

export default FAQ;
