import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIAL'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    review.map(data => <SwiperSlide key={data._id}>
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180}}
                                value={3}
                                readOnly
                            />
                            <p>{data.details}</p>
                            <h2 className="text-2xl text-orange-500">{data.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;