import BranchDetails from "./component";

export async function generateMetadata() {
    const response = await fetch('https://namya.ir/api/v3/businesses/1165');
    const businessData = await response.json();
  
    return {
      title: `${businessData?.data?.name} - جزئیات شعبه‌ها`,
      description: businessData?.data?.aboutus || 'نمایندگی رسمی مدیران خودرو ایوبی در یزد. جزئیات شعبه‌ها و اطلاعات تماس.',
      keywords: 'مدیران خودرو, یزد, شعبه‌ها, تماس با ما, آدرس',
      openGraph: {
        title: businessData?.data?.name || 'مدیران خودرو ایوبی یزد',
        description: businessData?.data?.aboutus || 'نمایندگی رسمی مدیران خودرو ایوبی در یزد',
        url: businessData?.website || 'https://yourdomain.com',
        images: [
          {
            url: businessData?.data?.logo || 'https://yourdomain.com/images/cover.jpg',
            width: 800,
            height: 600,
            alt: businessData?.data?.name || 'مدیران خودرو ایوبی یزد',
          },
        ],
        siteName: 'مدیران خودرو ایوبی',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@yourtwitterhandle',
        title: businessData?.data?.name || 'مدیران خودرو ایوبی یزد',
        description: businessData?.data?.aboutus || 'نمایندگی رسمی مدیران خودرو ایوبی در یزد',
        images: [businessData?.data?.logo || 'https://yourdomain.com/images/cover.jpg'],
      },
    };
  }
  

  export default function Page(){
    return <BranchDetails/>;
  }