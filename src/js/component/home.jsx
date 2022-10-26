import React, { useState, useEffect } from 'react';


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
// const Home = () => {
// 	return (
// 		<div className="text-center">
// 			<h1 className="text-center mt-5">Hello Rigo!</h1>
// 			<p>
// 				<img src={rigoImage} />
// 			</p>
// 			<a href="#" className="btn btn-success">
// 				If you see this green button... bootstrap is working...
// 			</a>
// 			<p>
// 				Made by{" "}
// 				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
// 				love!
// 			</p>
// 		</div>
// 	);
// };

export function Home(){
	const[selectedColor, setSelectedColor] = useState("");
	
	return(
		<div container class="text-center">
			<div className="traffic-light rounded">
				<div 
					onClick={() => setSelectedColor("red")}
					className={
					"red light" + ((selectedColor === "red") ? " glow" : "")}>
				</div>
				<div 
					onClick={() => setSelectedColor("yellow")}
					className={"yellow light" + ((selectedColor === "yellow") ? " glow" : "")}>
				</div>
				<div 
					onClick={() => setSelectedColor("green")}
					className={"green light" + ((selectedColor === "green") ? " glow" : "")}>
				</div>
			</div>
		</div>
	)
}

export default Home;