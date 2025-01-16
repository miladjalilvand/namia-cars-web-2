import GalleryPage from "./component";

export const metadata = {
    title: "پست‌ها و تصاویر مدیران خودرو",
    description: "مشاهده ویدیوها و تصاویر مربوط به مدیران خودرو ایوبی یزد.",
  };
  
  export default async function Page() {
    const response = await fetch("https://namya.ir/api/v3/posts?business_id=1165", {
      next: { revalidate: 60 }, // کش کردن داده‌ها
    });
    const posts = await response.json();
  
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "پست‌های مدیران خودرو",
              itemListElement: posts.data.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "CreativeWork",
                  name: post.title,
                  image: post.media_files?.[0]?.thumbnail,
                  url: post.url,
                },
              })),
            }),
          }}
        />
        <GalleryPage posts={posts.data} />
      </>
    );
  }
  