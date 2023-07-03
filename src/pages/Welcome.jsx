import Nav from './index.jsx';
import FoodJoke from '../components/FoodJoke.jsx';
import Footer from '../components/Footer/Footer.jsx';
import isabelle from '../img/isabelle.png'
import karl from '../img/karl.jpeg'
import pierce from '../img/pierce.jpeg'
{/* youll return html, run JS above */}

function Welcome () {
	let name = localStorage.getItem("myname")

	{/* JS end */}
	return (
		<div>
			<Nav />

		<div className= "welc-hero">
			<h1>Welcome!</h1>

			<div className="row">
				<a class="welcome-btn" href="#jokediv">About us</a>
				<a class="welcome-btn" href="#bio">Who we are</a>
			</div>
		</div>

		<div id = "jokediv">
			<FoodJoke />
		</div>


		<div id="about">
			<h2>About Pantrillo</h2>
			<section>
				<p>Pantrillo started in early 2022 after the three founders, Pierce, Isabelle and Karl, met in an intensive college course where many conversations circled around how difficult it became to sit and eat dinner after the classes were all done. </p> <p> Whether the struggle came from not having the time to shop or energy to cook, we all realized it was an issue for almost everyone in the course. With that realization, the founders set out to help the busy-bodies, like them, all around the world with the hope of ensuring a healthy and easy meal for everybody. </p>
			</section>
		</div>


	<div id = "bio">
	<div id="biggercont">
	<div className = "name">
		<a href = "https://github.com/Isa-Jer-Li"> <img className = "isabelle" src = {isabelle} /> </a>
			<h6> Isabelle Link </h6>
		<div className = "para">
		</div>
	</div>
	<div className = "name">
		<a href = "https://github.com/krshinn"> <img className = "karl" src = {karl} /> </a>
			<h6> Karl Shinn </h6>
		<div className = "para">
		</div>
	</div>
	<div className = "name">
		<a href = "https://github.com/piercelawson"> <img className = "pierce" src = {pierce} /> </a>
			<h6> Pierce Lawson </h6>
		<div className = "para">
		</div>
	</div>
	</div>
	</div>

		<Footer />

	</div>
	)
}

export default Welcome