module.exports = {
  siteUrl: process.env.SITE_URL || "https://localhost:3000", // URL سایت
  generateRobotsTxt: true, // تولید فایل robots.txt به طور خودکار

  changefreq: "daily", // فرکانس تغییرات سایت
  priority: 0.7, // اولویت صفحات
  sitemapSize: 7000, // حداکثر تعداد URL ها در هر سایت‌مپ
  additionalPaths: async (config) => {
    // درخواست API برای کاتالوگ‌ها
    const catalogsResponse = await fetch("https://namya.ir/api/v1/businesses/1165/catalogs");
    const catalogs = await catalogsResponse.json();

    // درخواست API برای پست‌ها
    const postsResponse = await fetch("https://namya.ir/api/v3/posts?business_id=1165");
    const posts = await postsResponse.json();

    // ساخت URL کاتالوگ‌ها
    const catalogsUrls = catalogs.map(catalog => ({
      loc: `${config.siteUrl}/catalogs/${catalog.id}`,
      lastmod: new Date(catalog.updatedAt).toISOString(),
      priority: 0.8,
      changefreq: "weekly",
    }));

    // ساخت URL پست‌ها
    const postsUrls = posts.map(post => ({
      loc: `${config.siteUrl}/posts/${post.id}`,
      lastmod: new Date(post.updatedAt).toISOString(),
      priority: 0.7,
      changefreq: "daily",
    }));

    // اضافه کردن مسیر جدید
    const customUrls = [
      {
        loc: `${config.siteUrl}/about`, // مسیر جدید
        lastmod: new Date().toISOString(), // تاریخ آخرین به‌روزرسانی
        priority: 0.6, // اولویت مسیر
        changefreq: "monthly", // فرکانس تغییر
      },
    ];

    // ترکیب همه مسیرها
    return [...catalogsUrls, ...postsUrls, ...customUrls];
  },
};
