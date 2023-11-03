import React from "react";

// Components
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	//Logica
	let cardList = [
		{ cardTitle: "Card1", cardImage: "https://fastly.picsum.photos/id/404/500/325.jpg?hmac=BxEAH9nzNzk7b_HvhBVTo-dqE7XfRojBHssZCptbHWE" },
		{ cardTitle: "Card2", cardImage: "https://fastly.picsum.photos/id/366/500/325.jpg?hmac=m22zY5lMzVEWVHW9GvzGmyRjSN_6cPMFmCHz68msXGg" },
		{ cardTitle: "Card3", cardImage: "https://fastly.picsum.photos/id/25/500/325.jpg?hmac=2kNKF-3mwGIfISwEVL7Mgl8mQpuW8qKCqGUjTByNFfc" },
		{ cardTitle: "Card4", cardImage: "https://fastly.picsum.photos/id/415/500/325.jpg?hmac=9XB2f_8YcsE-ACdXgtHawrTJc7ljgXybA7mDOKbtCkE" }
	]

	return (
		<>
			<div className="container-fluid ps-0 pe-0">
				<Navbar />
				<Jumbotron />
				<div className="container">
					<div className="row">
						{
							cardList.map((value) => {
								return (
									<div className="col mt-4">
										<Card cardTitle={value.cardTitle} cardImage={value.cardImage} />
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
