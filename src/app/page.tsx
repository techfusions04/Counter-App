import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import Basic from "@/components/WorkFile/Basic";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<Card className="w-xs">
					<CardHeader>
						<CardTitle className="text-center text-2xl">
							Basisc Counter App
						</CardTitle>
					</CardHeader>

					<CardContent>
						<Basic />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
