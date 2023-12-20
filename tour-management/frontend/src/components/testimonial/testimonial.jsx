import React from "react";
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial =() => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed:1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll:1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            }
        ]
    }

    return (<Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>"Absolutely fantastic! The level of service provided by this tour company is unmatched. The seamless organization, friendly guides, and the ability to tailor the tour to our interests made it an outstanding experience. We can't wait to book our next adventure!"</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3"> Sadykova Ultay </h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Thank you for the customized tour that perfectly suited our preferences. Your team's dedication to creating a memorable trip truly sets you apart. We're already planning our next vacation with you! </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3"> Sadykova Ultay </h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Weather updates were spot on, ensuring we were prepared for every destination. The tour guides were not just knowledgeable but also passionate, adding a unique touch to our explorations. Highly recommend!</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3"> Sadykova Ultay </h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>An incredible travel experience! From start to finish, the attention to detail and personalized service made our journey unforgettable. We can't wait for the next adventure!</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3"> Sadykova Ultay </h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>)
};

export default Testimonial;