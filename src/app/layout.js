import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import NavbarCustom from "./components/navbar";
import Footer from "./components/footer";
import { BusinessProvider } from "./providers/businessContext";

// فونت‌ها
const vazir = localFont({
  src: "./fonts/Vazir-FD.woff2",
  display: "swap",
});

export async function generateMetadata() {
  const response = await fetch('https://namya.ir/api/v3/businesses/1165');
  const businessData = await response.json();

  return {
    title: businessData?.data?.name || "مدیران خودرو ایوبی یزد",
    description: businessData?.data?.aboutus || "نمایندگی رسمی مدیران خودرو ایوبی در یزد",
    keywords: businessData?.data?.tags?.join(", ") || "مدیران خودرو, یزد, خودرو",
    openGraph: {
      title: businessData?.data?.name || "مدیران خودرو ایوبی یزد",
      description: businessData?.data?.aboutus || "نمایندگی رسمی مدیران خودرو ایوبی در یزد",
      url: businessData?.website || "https://yourdomain.com",
      images: [
        {
          url: businessData?.data?.logo || "https://yourdomain.com/images/cover.jpg",
          width: 800,
          height: 600,
          alt: businessData?.data?.name || "مدیران خودرو ایوبی یزد",
        },
      ],
      siteName: "مدیران خودرو ایوبی",
    },
    // twitter: {
    //   card: "summary_large_image",
    //   site: "@yourtwitterhandle",
    //   title: businessData?.data?.name || "مدیران خودرو ایوبی یزد",
    //   description: businessData?.data?.aboutus || "نمایندگی رسمی مدیران خودرو ایوبی در یزد",
    //   images: [businessData?.data?.image || "https://yourdomain.com/images/cover.jpg"],
    // },
  };
}

export default async function RootLayout({ children }) {
  const response = await fetch('https://namya.ir/api/v3/businesses/1165');
  const businessData = await response.json();

  return (
    <html dir="rtl" lang="fa-IR" suppressHydrationWarning>
      <body className={`${vazir.className} min-h-screen antialiased bg-background`}>
        <ThemeProvider>
          <NextUIProvider>
            <BusinessProvider value={businessData}>
              <NavbarCustom />
              <main className="pt-9 min-h-screen">{children}</main>
              <Footer data={businessData?.data} />
            </BusinessProvider>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
