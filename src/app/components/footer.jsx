"use client"
import Link from 'next/link';
import { FaInstagram, FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';

const Footer = ({ data }) => {

  const handleClickGEO = (lat , lon) => {
    const mapUrl = `https://www.google.com/maps?q=${lat},${lon}`;
    window.open(mapUrl, "_blank");
  };
  return (
    <footer className="bg-redasli text-white py-8 mt-60">
      <div className="max-w-6xl mx-auto px-6">
        {/* توضیحات */}
        <div className="mb-6">
          <p className="text-lg leading-relaxed">
{data.aboutus}          </p>
        </div>

        {/* لینک‌های تماس */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">تماس با ما</h3>
          <ul>
            <li><a href="tel:+9821xxxxxxxx" className="text-blue-400 hover:underline flex flex-row"><IoMdCall/> {data.addresses[0].phones[0]}  </a></li>
            {/* <li><a href="mailto:info@example.com" className="text-blue-400 hover:underline">ایمیل: info@example.com</a></li> */}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">موقعیت ما</h3>
          <ul className="flex gap-3 items-center space-x-2">
            <li>
              <FaMapMarkedAlt className="text-red-500" />
            </li>
            <li>
              <span onClick={()=>handleClickGEO(data.addresses[0].lat , data.addresses[0].lng)} className='text-blue-400 hover:text-blue-600 cursor-pointer'> {data.addresses[0].address}</span> {/* اطلاعات موقعیت مکانی */}
            </li>
          </ul>
        </div>
        {/* شبکه‌های اجتماعی */}
        <div>
          <h3 className="text-xl font-semibold mb-3"> شبکه های اجتماعی</h3>
          <ul className="flex space-x-4">
            <li><Link href={`https://wa.me/${data.addresses[0].whatsapp}`}  target="_blank" className="text-blue-400 hover:text-blue-600 px-3 items-center justify-center flex flex-row"   ><FaWhatsapp/>  واتس اپ </Link></li>
            <br />

            <li><Link href={`https://instagram.com/${data.addresses[0].instagram}`} className="text-blue-400 hover:text-blue-600items-center justify-center flex flex-row"   ><FaInstagram/>اینستاگرام</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
