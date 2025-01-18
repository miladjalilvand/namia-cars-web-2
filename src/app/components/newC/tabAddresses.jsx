"use client"
import React from "react";
import { FaMap, FaMobile, FaMobileAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const BranchDetails = ({ data }) => {


  const handleClickGEO = (lat , lon) => {
    const mapUrl = `https://www.google.com/maps?q=${lat},${lon}`;
    window.open(mapUrl, "_blank");
  };

  if (!data) {
    return <div>در حال بارگذاری...</div>;
  }

  const { title, lat, lng, address, mobiles, phones, is_open, schedules } = data;

  return (
    <div className="flex flex-col overflow-y-scroll  p-4 rounded shadow-md  ">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="mb-4">
        <p onClick={()=>handleClickGEO(lat , lng)} className="cursor-pointer hover:text-blue-500
        flex flex-row gap-3"><FaMap/>آدرس: {address}</p>
        <p className={`mb-4 font-bold ${
                is_open ? "text-green-600" : "text-red-600"
              }`}>وضعیت: {is_open ? "باز" : "بسته"}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">شماره تماس:</h3>
        <ul className="list-none pl-5">
          {mobiles.map((mobile, index) => (
            <li key={index}>
              <a href={`tel:${mobile}`} className="cursor-pointer hover:text-blue-500 flex flex-row"><FaMobileAlt/>{mobile}</a>

            </li>
          ))}
          {phones.map((phone, index) => (
            <li key={index}>
  <a href={`tel:${phone}`} className="cursor-pointer hover:text-blue-500 flex flex-row"><IoMdCall/>{phone}</a>

            </li>
          ))}
        </ul>
      </div>

      {/* <div className="mb-4">
        <h3 className="text-lg font-semibold">مختصات جغرافیایی:</h3>
        <p>عرض جغرافیایی: {lat}</p>
        <p>طول جغرافیایی: {lng}</p>
      </div> */}

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
            {schedules.map((schedule, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{schedule.day}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {schedule.time_open || "تعطیل"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {schedule.time_close || "تعطیل"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BranchDetails;
