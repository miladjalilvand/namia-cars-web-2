
import AnyMot from "./components/animot";
import CarsPicker from "./components/CarsPicker";
import CarsAnim from "./components/carsPickerAnim";
import ImageSlider from "./components/imagesSwiper";
import ItemSlidesImage from "./components/motionSlide";
import TextMotionCustom from "./components/newC/textMotion";
export default function Home() {
  return (
  <div className=" flex-col pt-9  ">

<TextMotionCustom text={'سلام دنیا'} />
<ImageSlider />
   <AnyMot />
    <CarsAnim/>
    <ItemSlidesImage/>

  </div>
  );
}
