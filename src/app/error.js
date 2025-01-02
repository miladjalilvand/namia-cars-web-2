"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-red-600">خطا!</h1>
      <p className="text-lg mt-4">{error?.message || "مشکلی پیش آمده است."}</p>
      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        تلاش مجدد
      </button>
    </div>
  );
}
