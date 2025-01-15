"use client";
import React, { useEffect, useState } from "react";
import { useBusiness } from "../providers/businessContext";

const BranchDetails = () => {
  const businessData = useBusiness();
  const [data, setData] = useState([]);

  const handleClickGEO = (lat , lon) => {
    const mapUrl = `https://www.google.com/maps?q=${lat},${lon}`;
    window.open(mapUrl, "_blank");
  };

  useEffect(() => {
    if (businessData?.data?.addresses) {
      setData(businessData.data.addresses);
    }
  }, [businessData]);

  return (
    <div className="flex flex-col min-h-screen pb-6 pt-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">جزئیات شعبه‌ها</h1>
        <p className="text-base">اطلاعات شعبه‌های ما در زیر نمایش داده شده است</p>
      </div>

      <div className="flex flex-col gap-6">
        {data.map((val, ind) => (
          <div
            key={ind}
            className="flex flex-col p-6 rounded border border-gray-300"
          >
            <h2 className="text-xl font-semibold mb-4 ">{val.title}</h2>
            <p onClick={()=>handleClickGEO(val.lat , val.lng)} className="mb-2 hover:text-blue-500 cursor-pointer">آدرس: {val.address}</p>
            <p
              className={`mb-4 font-bold ${
                val.is_open ? "text-green-600" : "text-red-600"
              }`}
            >
              وضعیت: {val.is_open ? "باز" : "بسته"}
            </p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">شماره تماس:</h3>
              <ul className="list-none pl-5">
                {val.mobiles && val.mobiles.length > 0 ? (
                  val.mobiles.map((mobile, index) => <li key={index}>

<a href={`tel:${mobile}`} className="cursor-pointer hover:text-blue-500">{mobile}</a>
                  </li>)
                ) : (
                  <li>تلفن همراهی موجود نیست</li>
                )}
                {val.phones && val.phones.length > 0 ? (
                  val.phones.map((phone, index) => <li key={index}>

<a href={`tel:${phone}`} className="cursor-pointer hover:text-blue-500">{phone}</a>
                  </li>)
                ) : (
                  <li>تلفن ثابتی موجود نیست</li>
                )}
              </ul>
            </div>

            <div>
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
                        <td className="border border-gray-300 px-4 py-2">
                          {schedule.day}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {schedule.time_open || "تعطیل"}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {schedule.time_close || "تعطیل"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="3"
                        className="border border-gray-300 px-4 py-2 text-center"
                      >
                        جدول زمانی موجود نیست
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchDetails;
