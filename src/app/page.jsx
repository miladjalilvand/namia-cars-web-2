
import CarsPicker from "./components/CarsPicker";
import ImageSlider from "./components/imagesSwiper";
import ItemSlidesImage from "./components/motionSlide";
export default function Home() {
  return (
  <div className="flex flex-col">
<ImageSlider />
    <CarsPicker/>
    <ItemSlidesImage/>

  </div>
  );
}
