"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "../shadcnui/button";

const Advanced = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
	};

	const plus10 = () => {
		setCount(count + 10);
	};

	const minus10 = () => {
		setCount(count - 10);
	};

	// const reset = () => {
	// 	setCount(0);
	// };

	return (
		<>
			<div className="">
				<div className="text-center text-xl">
					Counter Value :
					<span className="font-semibold"> {count}</span>
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
							onClick={plus}
							className="cursor-pointer">
							<CirclePlus /> Plus 1
						</Button>
						<Button
							onClick={minus10}
							variant={"destructive"}
							className="cursor-pointer">
							<CircleMinus /> Minus 10
						</Button>
						<Button
							onClick={plus10}
							className="cursor-pointer">
							<CirclePlus /> Plus 10
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Advanced;
