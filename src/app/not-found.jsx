import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Image
        src="/assets/not-found.webp"
        alt="404 Error"
        width={300}
        height={300}
        className="mb-6"
      />
      <h1 className="text-4xl font-bold">صفحه پیدا نشد</h1>
      <p className="text-lg mt-4 text-center">
        متأسفیم، صفحه‌ای که به دنبال آن هستید وجود ندارد.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
      >
        بازگشت به صفحه اصلی
      </a>
    </div>
  );
}
