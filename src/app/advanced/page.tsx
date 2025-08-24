import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import Advanced from "@/components/WorkFile/Advanced";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advanced | Counter State App",
	description: "Advanced Counter State App",
	alternates: {
		canonical: "http://localhost:3000/advanced",
	},
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<Card className="w-xs">
					<CardHeader>
						<CardTitle className="text-center text-2xl">
							Advanced Counter App
						</CardTitle>
					</CardHeader>

					<CardContent>
						<Advanced />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
