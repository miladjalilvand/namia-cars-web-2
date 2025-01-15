import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import NavbarCustom from "./components/navbar";
import { BusinessProvider } from "./providers/businessContext";
import Footer from "./components/footer";

const vazir = localFont({
  src: "./fonts/Vazir-FD.woff2",
  display: "swap",
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "مدیران خودرو ایوبی یزد",
  description: "نمایندگی مدیران خودرو ",
};

// Fetch داده‌ها در سمت سرور
async function fetchBusinessData() {
  try {
    const response = await fetch('https://namya.ir/api/v3/businesses/1165', {
      cache: "force-cache", // استفاده از کش برای بهبود عملکرد
    });
    if (!response.ok) {
      throw new Error("Failed to fetch business data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching business data:", error);
    return null; // مدیریت خطاها
  }
}

export default async function RootLayout({ children }) {
  const businessData = await fetchBusinessData();

  return (
    <html dir="rtl" lang="fa-IR" suppressHydrationWarning>
      <body
        className={`${vazir.className} min-h-screen antialiased bg-background`}
      >
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
