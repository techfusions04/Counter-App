"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "../shadcnui/button";

const Expert = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		if (count <= 99) setCount(count + 1);
	};

	const minus = () => {
		if (count >= 1) setCount(count - 1);
	};

	const plus10 = () => {
		if (count <= 90) {
			setCount(count + 10);
		}
	};

	const minus10 = () => {
		if (count >= 10) setCount(count - 10);
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
						disabled={count < 1}
						variant={"destructive"}
						className="cursor-pointer">
						<CircleMinus /> Minus 1
					</Button>
					<Button
						onClick={plus}
						className="cursor-pointer"
						disabled={count > 99}>
						<CirclePlus /> Plus 1
					</Button>
					<Button
						onClick={minus10}
						disabled={count < 10}
						variant={"destructive"}
						className="cursor-pointer">
						<CircleMinus /> Minus 10
					</Button>
					<Button
						onClick={plus10}
						disabled={count > 90}
						className="cursor-pointer">
						<CirclePlus /> Plus 10
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Expert;
