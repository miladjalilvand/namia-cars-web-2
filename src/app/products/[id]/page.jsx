"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";



const itemsIndex = [
{title:"item1",content :   (<Image 
  alt="تصویر" 
  width={10000} 
  height={240}
  style={{ objectFit: "cover", height: "100%", width: "100%" }} 
   src={'/assets/24.png'}/>)},
   {
    title:'item1',
    content:(<div>milad</div>)
  },
  {
    title:'item1',
    content:(<div>milad</div>)
  },
  {
    title:'item1',
    content:(<div>milad</div>)
  },
  {
    title:'item1',
    content:(<div>milad</div>)
  },
  {
    title:'item1',
    content:(<div>milad</div>)
  },
  {
    title:'item1',
    content:(<div>milad</div>)
  },
  {
    title:'item1',
    content:(<div>milad</div>)
  },
  {
    title:'item1',
    content:(<div>milad</div>)
  },
];

export default function Item({ params }) {
  const [item, setItem] = useState(null);
  const refs = useRef([]);
  const [isScrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [visibleItems, setVisibleItems] = useState(Array(itemsIndex.length).fill(false));

  console.log(visibleItems);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target);

          if (index !== -1) {
            setVisibleItems((prev) => {
              const newVisibility = [...prev];
              newVisibility[index] = entry.isIntersecting;
              return newVisibility;
            });
          }
        });
      },
      { threshold:1 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const fetchItem = async () => {
      const { id } = await params;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      const data = await res.json();
      setItem(data);
    };

    fetchItem();
  }, [params]);

  const scrollToSection = (index) => {
    const section = refs.current[index];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="flex flex-col pt-8">
      <div className="fixed overflow-x-auto w-full bg-black text-white z-10">
        <div className="flex flex-row min-w-max justify-around items-center px-4 h-10">
          {itemsIndex.map((val, ind) => {
            const isVis = visibleItems[ind];
            console.log("isVis:" + isVis);
            return (
              <div
                key={ind}
                className={`cursor-pointer ${isVis ? "bg-gray-900" : ""}`}
                onClick={() => scrollToSection(ind)}
              >
                {val.title}
              </div>
            );
          })}
        </div>
      </div>

      {itemsIndex.map((val, ind) => {
        return (
          <div
            ref={(el) => (refs.current[ind] = el)}
            id={`section-${ind}`}
            key={ind}
            className="flex flex-col mt-12 cursor-pointer h-96 bg-gray-400 m-1 items-center justify-center"
          >
            {val.content}
          </div>
        );
      })}

      {item ? (
        <div className="flex flex-col mt-16">
          <h1>{item.id}</h1>
          <p>{item.title}</p>
          {/* <Image
            loading="lazy"
            src={item.thumbnailUrl}
            alt={item.url}
            width={150}
            height={150}
            className="object-cover rounded-md"
          /> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div>isScrolled : {isScrolled ? "True" : "False"}</div>

      {isScrolled && (
        <div className="fixeds bottom-0 left-0 w-full h-6 bg-fuchsia-900 flex">
          <div className="w-1/2 bg-red-400 text-center flex items-center justify-center">
            a
          </div>
          <div className="w-1/2 bg-purple-100 text-center flex items-center justify-center">
            a
          </div>
        </div>
      )}
    </div>
  );
}