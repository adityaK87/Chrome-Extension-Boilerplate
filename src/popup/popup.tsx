import React, { useEffect, useState } from "react";
import "../assets/tailwind.css";

const Popup = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	useEffect(() => {
		setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
	}, [time]);

	return (
		<div className='h-screen flex flex-col justify-center items-center text-center bg-slate-200 text-5xl'>
			{time}
		</div>
	);
};
export default Popup;
