import React from "react";
import ServiceCard from "./ServiceCard";
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customiationImg from '../assets/images/customization.png'

const serviceData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Seamless Travel with Accurate Weather Updates.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Guiding Your Adventures with the Best Tour Guides",
    },
    {
        imgUrl: customiationImg,
        title: "Customization",
        desc: "Tailored Experiences for Your Perfect Getaway.",
    },
]
const ServiceList = () => {
    return(
        <>
            {serviceData.map((item, index) => (
                <Col lg="3" key={index}>
                    <ServiceCard item={item}/>
                </Col>
            ))}
        </>
    )
}
export default ServiceList