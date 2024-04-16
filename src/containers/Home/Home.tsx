import React, { useEffect, useState } from 'react'
import Style from './Home.module.css'
import ChangingWords from '../../components/ChangingWords/ChangingWords'
import ExpandingComponent from '../../components/ExpandingComponent/ExpandingComponent'
import SgNavBar from '../../components/Navbar/SgNavBar'
import { ServicesCard } from '../../components/ServicesCard/ServicesCard'
import services from '../../utils/data';

const Home: React.FC = () => {
	const [scrollY, setScrollY] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollY]);
	console.log(scrollY);
	return (
		
		<>
			<main className={Style.main}>
				<SgNavBar />
				<div className={Style.hero_image}>
					<img src="/hero.png" alt="hero" />
					<div className={Style.overlay}></div>
				</div>
				<div className={Style.hero_text}>
					<h1>
						S<span className={Style.blue}>&</span>G Trans
						<span className={Style.blue}>port</span>
					</h1>
					<p>
						Delivering your cargo with egg-ceptional care! <br />{' '}
						<ChangingWords />
					</p>
					{scrollY < 3 && <p className={Style.hero_scroll_indicator}> &darr;</p>}
				</div>
				<ExpandingComponent bcg={'transparent'}>
					<div className={Style.why_us}>
						<h1 className={`py-5 ${Style.why_us_h1}`}>Why Choose Us?</h1>
						<div className="d-md-flex flex-row">
							<div className="col-md-6">
								<div className={`px-4 ${Style.image_container}`}>
									<img
										className="shadow-lg rounded"
										src="/why_us.jpg"
										alt="why us"
									/>
								</div>
								<h1>Best in the business</h1>
								<p className={`${Style.why_us_p}`}>
									We are a team of egg-ceptional individuals who are dedicated
									to delivering your cargo with care. We are known for our
									on-time delivery and our excellent customer service. We are
									committed to providing you with the best service possible. So
									why choose us? Because we are the best in the business!
								</p>
							</div>
							<div className="col-md-6">
								<h1>We solve problems</h1>
								<p className={`${Style.why_us_p}`}>
									We are problem solvers. We are always looking for new and
									innovative ways to solve problems. We are constantly
									thinking of new ways to improve our service and make our
									customers' lives easier. We are always looking for new
									challenges to take on. We are always looking for new ways to
									deliver your cargo with care. We are problem solvers.
								</p>
								<hr />
								<h1>We believe in people</h1>
								<p className={`${Style.why_us_p}`}>
									We believe in the power of people. We believe that people are
									the most important asset in any organization. We believe that
									by investing in people, we can achieve great things. That's
									why we are committed to providing our employees with the
									best training and development opportunities. We believe that
									by investing in our people, we can deliver the best service
									possible to our customers. We believe in people.
								</p>
								<hr />
								<h1>We are committed to excellence</h1>
								<p className={`${Style.why_us_p}`}>
									We are committed to excellence. We are always striving to
									deliver the best service possible to our customers. We are
									always looking for new ways to improve our service and make
									our customers' lives easier. We are always looking for new
									challenges to take on. We are always looking for new ways to
									deliver your cargo with care. We are committed to excellence.
								</p>
								<hr />
							</div>
						</div>
					</div>
				</ExpandingComponent>
				<section>
					<div className={Style.services}>
						<h1 className={`py-5 ${Style.why_us_h1}`}>Our Services</h1>
						<div className="d-flex flex-row">
							<ServicesCard services={services}/>
						</div>
					</div>
				</section>
				<section>
				</section>
			</main>
		</>
	)
}

export default Home
