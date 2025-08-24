import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import Expert from "@/components/WorkFile/Expert";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "expert | Counter State App",
	description: "Advanced Counter State App",
	alternates: {
		canonical: "http://localhost:3000/expert",
	},
};
const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<Card className="w-xs">
					<CardHeader>
						<CardTitle className="text-center text-2xl">
							expert Counter App
						</CardTitle>
					</CardHeader>

					<CardContent>
						<Expert />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
