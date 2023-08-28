// import next image
import Image from "next/image";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";

const Slider = ({ clients }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      slidesOffsetBefore={60}
      grabCursor={true}
      className="testimonialSlider"
    >
      {clients.map((client, idx) => {
        // destructure client
        const { message, image, name } = client;

        return (
          <SwiperSlide key={idx}>
            <div className="bg-white h-[360px] drop-shadow-primary rounded-[10px] px-[50px] pt-[60px] pb-[40px] flex flex-col justify-between">
              {/* message */}
              <p className="font-light leading-[30px]">{message}</p>
              {/* name & image */}
              <div className="flex flex-row items-center gap-x-5">
                <Image src={image} height={60} width={60} />
                <span className="font-semibold">{name}</span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
