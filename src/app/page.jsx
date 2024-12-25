
import AnyMot from "./components/animot";
import CarsPicker from "./components/CarsPicker";
import CarsAnim from "./components/carsPickerAnim";
import ImageSlider from "./components/imagesSwiper";
import ItemSlidesImage from "./components/motionSlide";
export default function Home() {
  return (
  <div className="flex flex-col pt-9  ">
   
   <AnyMot />
    <CarsAnim/>
{/* <ImageSlider />
    <CarsPicker/>
    <ItemSlidesImage/> */}

  </div>
  );
}
