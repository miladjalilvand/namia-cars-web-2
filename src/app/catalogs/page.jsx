export const metadata = {
  title: "کاتالوگ محصولات - مدیران خودرو ایوبی یزد",
  description: "مشاهده و دانلود کاتالوگ محصولات مدیران خودرو در یزد.",
};

import GalleryPage from "./component";

export default async function Page() {
  const response = await fetch("https://namya.ir/api/v1/businesses/1165/catalogs", {
    // next: { revalidate: 60 }, // کش کردن داده‌ها
  });
  const catalogs = await response.json();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "کاتالوگ محصولات",
            itemListElement: catalogs.data.map((catalog, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "CreativeWork",
                name: catalog.title,
                image: catalog.preview,
                url: catalog.url,
              },
            })),
          }),
        }}
      />
      <GalleryPage catalogs={catalogs.data} />
    </>
  );
}
