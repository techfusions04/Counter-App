"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "../shadcnui/button";

const Basic = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
	};

	return (
		<div className="">
			<div className="text-center text-xl">
				Counter Value :<span className="font-semibold"> {count}</span>
			</div>

			<div className="mt-8 mb-2">
				<div className="grid grid-cols-2 gap-4">
					<Button
						onClick={minus}
						variant={"destructive"}
						className="cursor-pointer">
						<CircleMinus /> Minus 1
					</Button>
					<Button
						className="cursor-pointer"
						onClick={plus}>
						<CirclePlus /> Plus 1
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Basic;
