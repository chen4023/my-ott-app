import { useMovieContext } from "./context/MovieDataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Mousewheel,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BannerCard from "./BannerCard";

export default function Banner() {
  const { nowMovies } = useMovieContext();
  console.log(nowMovies);
  return (
    <Swiper
      effect={"coverflow"}
      navigation={true}
      grabCursor={true}
      centeredSlides={true}
      initialSlide={10}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      mousewheel={true} // 마우스 휠
      modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
      className="w-full bg-cover"
    >
      {nowMovies &&
        nowMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <BannerCard movie={movie} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
