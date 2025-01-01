import { Spacer } from "@nextui-org/react";
import TextMotionCustom from "../components/newC/textMotion";
import FooterPages from "../components/newC/footerPages";

const Page = () => {
    return (
        <div className="flex w-screen flex-col pt-8 ">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-80 bg-red-400  flex items-center justify-center">
                <TextMotionCustom text={'ی تست بزن '} /> 
                </div>
                <div className="w-full md:w-1/2 h-80 bg-green-400"></div>
            </div>

<div className="flex flex-col items-center justify-center m-6">
<h2>  
تست  
درایو  
مدیران  
خودرو  
ویژه  
ساکنین  
تهران
 </h2>
 <Spacer y={6} />
 <div className="md:px-60">
 اگر پيش از اين تجربه رانندگی با خودروهای MVM را داشته‌اید، حتما طعم لذت و آرامش خاطر رانندگی با اين خودرو ها را چشيده‌ايد. افرادی که علاقه رانندگی تجربی هستند، علاوه بر لمس هيجان و نوآوری، می‌توانند از آموزش‌های حين رانندگی بهره‌مند و با امکانات و ويژگی‌های اين خودروها بخوبی آشنا شوند.
در تمامی روزهای تعطیل نمایندگی مدیران خودرو ۳۵۰ فعال و جهت تست درایو خودروهای MVM و CHERY در خدمت مشتریان عزیز می باشد.
در صورت تمایل به شرکت در این برنامه خواهشمندیم فرم پیوست را بدقت تکمیل نمایید. </div>
</div>
<FooterPages scrollDisabled={true} tab={3}  /> 
        </div>
    );
};

export default Page;