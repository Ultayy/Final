import React from "react";
import TourCard from "../../shared/tourCard";
import {Col} from "reactstrap";
import useFetch from "../../hooks/UseFetch";
import {URL} from "../../util/config";

const FeaturedTourList = () => {

    const {data:tourData, loading, error} = useFetch(`${URL}/tours/search/getFeaturedTours`)
    console.log(tourData);
return(
    <>
        {
            loading && <h4>Loading...</h4>
        }
        {
            error && <h4>{error}</h4>
        }
        {!loading && !error && tourData?.map(tour => (
            <Col lg="3" className="mb-4" key={tour._id}>
                <TourCard tour={tour}/>
            </Col>
        ))}
    </>
)
}

export default FeaturedTourList