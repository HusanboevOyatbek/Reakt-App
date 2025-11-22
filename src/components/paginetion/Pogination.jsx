import React, { useRef,  } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Pogination() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://img.freepik.com/premium-photo/creative-desktop-wallpaper_941097-67554.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://lean-group-tau.vercel.app/static/media/hero-bg-2.d61a9cd353986914c27c.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://lean-group-tau.vercel.app/static/media/hero-bg-3.6bee3d305f573e4024ea.jpg" alt="" /></SwiperSlide>
              
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>



                    
                </div>
            </Swiper>

            
        </>
    );
}
