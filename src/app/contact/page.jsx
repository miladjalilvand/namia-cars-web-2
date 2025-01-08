"use client";
import React, { useEffect, useState } from "react";
import { useBusiness } from "../providers/businessContext";

const BranchDetails = () => {
  const businessData = useBusiness();

  const [data, setData] = useState([]);

  // بررسی اگر داده‌ها هنوز بارگذاری نشده‌اند


  useEffect(() => {
    if (businessData?.data?.addresses) {
      setData(businessData.data.addresses);
    }
  }, [businessData]);

  return (
    <div className="flex flex-col bg-background  justify-around min-h-screen pb-6   pt-12 ">



    <div className="flex flex-col md:flex-row gap-6 p-4 ">

      {data.map((val, ind) => (
        <div key={ind} className="flex-1 p-4  rounded border border-foreground ">
          <h2 className="text-2xl font-bold mb-4">{val.title}</h2>
          <p>آدرس: {val.address}</p>
          <p>وضعیت: {val.is_open ? "باز" : "بسته"}</p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">شماره تماس:</h3>
            <ul  className="list-none pl-5">
              {val.mobiles && val.mobiles.length > 0 ? (
                val.mobiles.map((mobile, index) => (
                  <li  key={index}>{mobile}</li>
                ))
              ) : (
                <li>تلفن همراهی موجود نیست</li>
              )}
              {val.phones && val.phones.length > 0 ? (
                val.phones.map((phone, index) => (
                  <li key={index}>{phone}</li>
                ))
              ) : (
                <li>تلفن ثابتی موجود نیست</li>
              )}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">جدول زمان‌بندی:</h3>
            <table className="w-full border-collapse border border-gray-300 mt-2">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">روز</th>
                  <th className="border border-gray-300 px-4 py-2">باز شدن</th>
                  <th className="border border-gray-300 px-4 py-2">بسته شدن</th>
                </tr>
              </thead>
              <tbody>
                {val.schedules && val.schedules.length > 0 ? (
                  val.schedules.map((schedule, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{schedule.day}</td>
                      <td className="border border-gray-300 px-4 py-2">{schedule.time_open || "تعطیل"}</td>
                      <td className="border border-gray-300 px-4 py-2">{schedule.time_close || "تعطیل"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center">
                      جدول زمانی موجود نیست
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div></div>
  );
};

export default BranchDetails;
