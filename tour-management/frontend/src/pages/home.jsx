import React from "react";
import '../styles/home.css'

import { Container, Row, Col} from "reactstrap";
import  heroImg from '../assets/images/hero-img01.jpg'
import  heroVideo from '../assets/images/hero-video.mp4'
import  heroImg02 from '../assets/images/hero-img02.jpg'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import ImageGallery from "../components/gallery/ImageGallery";
import Subtitle from "../shared/subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../serviceList/serviceList";
import featuredTourList from "../components/featured-tours/featuredTourList";
import FeaturedTourList from "../components/featured-tours/featuredTourList";
import Testimonial from "../components/testimonial/testimonial";
//@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

const Home = () => {
    return <>
        <section>
            <Container>
                <Row>
                    <Col lg = '6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                            {/*<Subtitle subtitle={'Know Before You Go'}/>*/}
                            {/*<img src = {worldImg} alt="" />*/}
                        </div>
                            <h1>
                                Vacation in the Best style!{" "}
                                <span className="highlight"> memorise</span>
                            </h1>
                            <p>
                                We offer individual, group and last-minute tours from Almaty and other cities of Kazakhstan. Popular destinations: Turkey, Egypt, Thailand, UAE, we are ready to organize holidays in any country for any budget.
                            </p>
                    </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={heroImg} alt=""/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-4">
                            <video src={heroVideo} alt="" controls/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02} alt="" />
                        </div>
                    </Col>
                    <SearchBar/>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="3">
                        <h5 className="services__subtitle">What we serve</h5>
                        <h2 className="services__title">We offer our best services</h2>
                    </Col>
                    <ServiceList/>
                </Row>
            </Container>
        </section>


        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <h2 className="featured__tour-title">Our featured tours</h2>
                    </Col>
                    <FeaturedTourList/>
                </Row>
            </Container>
        </section>


        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="experience__content">

                            <h2>
                                With our al experience <br /> we will serve you
                            </h2>
                            <p>
                                Discover seamless travel experiences, personalized recommendations, and expert guidance.
                                <br />
                                Your next extraordinary tour awaits – let us make it uniquely yours.
                            </p>
                        </div>

                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful Trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>2k+</span>
                                <h6>Regular clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>15</span>
                                <h6>Years experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="experience__img">
                            <img src={experienceImg} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <h2 className="gallery__title">
                        Visit our customers tour gallery
                        </h2>
                    </Col>
                    <Col lg="12">
                        <ImageGallery/>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <h2 className="testimonial__title">
                            What our fans say about us
                        </h2>
                    </Col>
                    <Col lg="12">
                        <Testimonial/>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
};

export default Home;