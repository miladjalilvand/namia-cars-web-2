module.exports = {
    siteUrl: process.env.SITE_URL || "https://localhost:3000", // URL سایت
    generateRobotsTxt: true, // تولید فایل robots.txt به طور خودکار
   
    changefreq: "daily", // فرکانس تغییرات سایت
    priority: 0.7, // اولویت صفحات
    sitemapSize: 7000, // حداکثر تعداد URL ها در هر سایت‌مپ
    additionalPaths: async (config) => {
      // این بخش را برای اضافه کردن مسیرهای اضافی مانند پست‌ها و کاتالوگ‌ها اضافه می‌کنیم
      const catalogsResponse = await fetch("https://namya.ir/api/v1/businesses/1165/catalogs");
      const catalogs = await catalogsResponse.json();
      
      const postsResponse = await fetch("https://namya.ir/api/v3/posts?business_id=1165");
      const posts = await postsResponse.json();
  
      const catalogsUrls = catalogs.map(catalog => ({
        loc: `${config.siteUrl}/catalogs/${catalog.id}`,
        lastmod: new Date(catalog.updatedAt).toISOString(),
        priority: 0.8,
        changefreq: "weekly",
      }));
  
      const postsUrls = posts.map(post => ({
        loc: `${config.siteUrl}/posts/${post.id}`,
        lastmod: new Date(post.updatedAt).toISOString(),
        priority: 0.7,
        changefreq: "daily",
      }));
  
      return [...catalogsUrls, ...postsUrls]; // ترکیب URL های کاتالوگ‌ها و پست‌ها
    },
  };
  