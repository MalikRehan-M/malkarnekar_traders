import React from "react";
import CTABanner from "../Components/CTA/CTABanner";
import { Container } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <>
      <CTABanner />
      <Container maxW="7xl"rounded={10} p={0}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          speed={1000}
          effect="cube"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
         <SwiperSlide className="swiper1">
          <img
            src="https://itcstore.in/cdn/shop/files/Freshnesh-Banner-Mobile-without-CTA-_5_2.jpg?v=1692711408"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://itcstore.in/cdn/shop/files/Aashirvaad_Svasti_paneer_1500_375_110_with.jpg?v=1695298256"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://itcstore.in/cdn/shop/files/01-WEB_Desktop_HB_1500x375-_ICC-World-cup-2023_-WITH-CTA_2.jpg?v=1696857594"
            alt=""
          />
        </SwiperSlide>
        
        </Swiper>
      </Container>
    </>
  );
};

export default Home;
