
import AnyMot from "./components/animot";
import CarsPicker from "./components/CarsPicker";
import CarsAnim from "./components/carsPickerAnim";
import ImageSlider from "./components/imagesSwiper";
import ItemSlidesImage from "./components/motionSlide";
import FooterPages from "./components/newC/footerPages";
import BannerImage from "./components/newC/imageSwiperBanner";
import TextMotionCustom from "./components/newC/textMotion";
export default function Home() {
  return (
  <div className=" flex-col pt-9 overflow-x-hidden  ">



<ImageSlider />
   <AnyMot />
    <CarsAnim/>
    <ItemSlidesImage/>


  </div>
  );
}
