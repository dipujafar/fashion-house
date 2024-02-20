import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import img1 from '../../assets/image/img1.jpg'
import img2 from '../../assets/image/img2.png'
import img3 from '../../assets/image/img3.jpg'
import img4 from '../../assets/image/img4.jpg'


const Banner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <div>
            <Swiper
        pagination={pagination}
        modules={[Pagination,Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt=""  className='w-full max-h-[500px] '/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" className='w-full max-h-[500px] '/></SwiperSlide>
        <SwiperSlide><img src={img3} alt=""  className='w-full max-h-[500px] '/></SwiperSlide>
        <SwiperSlide><img src={img4} alt=""  className='w-full max-h-[500px] '/></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;