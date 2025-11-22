// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./swipers.css"

// Import Swiper styles
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

export default function Efect() {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-full h-full' src="https://i.ytimg.com/vi/zQr1aZLRroc/maxresdefault.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src="https://i.ytimg.com/vi/gH9CJOUvgxI/maxresdefault.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full'  src="https://img.freepik.com/free-vector/innovation-award-certificate-design-with-particle-face_1017-14690.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src=" https://static.vecteezy.com/system/resources/previews/023/285/952/non_2x/professional-it-certificate-template-free-vector.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src="https://img.freepik.com/free-vector/creative-colorful-certificate-template-design_1017-14235.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src="https://img.freepik.com/free-vector/gradient-modern-certificate-template_23-2148987656.jpg?semt=ais_incoming&w=740&q=80" alt="" /></SwiperSlide>
                
            </Swiper>
        </>
    );
}
