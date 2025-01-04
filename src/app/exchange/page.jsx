import { Spacer } from "@nextui-org/react";
import TextMotionCustom from "../components/newC/textMotion";
import FooterPages from "../components/newC/footerPages";

const Page = () => {
    return (
        <div className="flex w-screen flex-col pt-8 ">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-80 bg-red-400  flex items-center justify-center">
                <TextMotionCustom text={'طرح تعویض خودرو '} /> 
                </div>
                <div className="w-full md:w-1/2 h-80 bg-green-400"></div>
            </div>

<div className="flex flex-col items-center justify-center m-6">
<h2>طرح  
تعویض  
مدیران  
خودرو  
ویژه  
ساکنین  
تهران  
 </h2>
 <Spacer y={6} />
 <div className="md:px-60">
 طرح تعویض انواع خودرو کارکرده با محصولات صفر کمپانی مدیران‌خودرو و کمپانی چری با اقساط ۱۲ تا ۶۰ ماه و به تعداد محدود در نمایندگی مدیران خودرو کد ۳۵۰ دهقان‌پور انجام می‌پذیرد.
 جهت استفاده از طرح تعویض خودرو اطلاعات خود را ثبت کرده تا کارشناسان ما در اسرع وقت با شما تماس بگیرند.
 </div>
</div>
<FooterPages scrollDisabled={true} tab={3}  /> 
        </div>
    );
};

export default Page;