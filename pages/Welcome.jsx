import Navbar from '../components/Navbar/NavbarElements.jsx';
import './welcome.css';
import FoodJoke from '../components/FoodJoke';
import Footer from '../components/Footer/Footer.jsx';
{/* youll return html, run JS above */}

function Welcome () {
	let name = localStorage.getItem("mytime")

	{/* JS end */}
	return (
		<div>
				{/* HTML start here */}
			<Navbar />

<section className = "welc">
	<div id = "background-img">
		<div className = "h1">
			<h1>Welcome!</h1>
				<h2> {name} </h2>
		</div>

		<div className = "about">
			<a href="#down">About us</a>
			<a href="#bottom">Who we are</a>
		</div>
	</div>			{/* joke -*/}
			<div className = "TitleJok">
					<FoodJoke />
			</div>
				{/* Joke end  */}
			<div id="down">

					<br />
				<section className = "accent-bg">
					<div className = "h2">
						<h2>About Pantrillo</h2>
					</div>
						<p>
							Pantrillo started in early 2022 after the three founders, Pierce, Isabelle and Karl, met in an intensive college course where many conversations circled around how difficult it became to sit and eat dinner after the classes were all done. </p> <p> Whether the struggle came from not having the time to shop or energy to cook, we all realized it was an issue for almost everyone in the course. With that realization, the founders set out to help the busy-bodies, like them, all around the world with the hope of ensuring a healthy and easy meal for everybody. </p>

				</section>
			</div>
<div id="bottom">
	<hr />

<div className = "h3Bio">

		<h3> Pierce </h3>

		<h3> Isabelle </h3>


		<h3> Karl </h3>

</div>
<hr />

	<Footer />
</div>
				{/* HTML end here */}
</section>



		</div>
	)
}

export default Welcome