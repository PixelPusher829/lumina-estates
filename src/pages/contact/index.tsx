import type React from "react";
import Form from "./Form";
import Header from "./Header";
import Info from "./Info";

const Contact: React.FC = () => {
	return (
		<div className="min-h-screen pt-28 pb-20 bg-slate-50">
			<div className="container mx-auto px-6">
				<Header />
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
					<Info />
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Contact;
