import React from 'react'
import bannerimg from "/images/banner-img1.png"
import bannerimg1 from "/images/banner-img2.png"
import bannerMini1 from "/images/banner-img3.png"
import bannerMini2 from "/images/banner-img4.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__wrap">
                    <div className="banner__card">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                            
                        >
                            <SwiperSlide> <img src={bannerimg} alt="sd" /> </SwiperSlide>
                            <SwiperSlide> <img src={bannerimg1} alt="sd" /> </SwiperSlide>

                        </Swiper>

                    </div>
                    <div className="banner__card-mini">
                        <img src={bannerMini1} alt="banner" />
                    </div>
                    <div className="banner__card-mini">
                        <img src={bannerMini2} alt="banner-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner