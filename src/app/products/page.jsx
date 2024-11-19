  "use client"
  import { useTheme } from "next-themes";
  import ItemProducts from "../components/itemView";
  const data = [
      {
        img: "/assets/1.jpg",
        title: "Product 1",
        subtitle: "Subtitle for Product 1",
        date: "2024-11-18",
        price: 100,
        status: "available",
      },
      {
        img: "/assets/2.jpg",
        title: "Product 2",
        subtitle: "Subtitle for Product 2",
        date: "2024-11-17",
        price: 200,
        status: "sold out",
      },
      {
        img: "/assets/3.jpg",
        title: "Product 3",
        subtitle: "Subtitle for Product 3",
        date: "2024-11-16",
        price: 150,
        status: "available",
      },
      {
        img: "/assets/4.jpg",
        title: "Product 4",
        subtitle: "Subtitle for Product 4",
        date: "2024-11-15",
        price: 300,
        status: "available",
      },
      {
        img: "/assets/4.jpg",
        title: "Product 5",
        subtitle: "Subtitle for Product 5",
        date: "2024-11-14",
        price: 120,
        status: "sold out",
      },
      {
        img: "/assets/4.jpg",
        title: "Product 6",
        subtitle: "Subtitle for Product 6",
        date: "2024-11-13",
        price: 180,
        status: "available",
      },
      {
        img: "/assets/4.jpg",
        title: "Product 7",
        subtitle: "Subtitle for Product 7",
        date: "2024-11-12",
        price: 250,
        status: "available",
      },
      {
        img: "/assets/3.jpg",
        title: "Product 8",
        subtitle: "Subtitle for Product 8",
        date: "2024-11-11",
        price: 220,
        status: "sold out",
      },
      {
        img: "/assets/2.jpg",
        title: "Product 9",
        subtitle: "Subtitle for Product 9",
        date: "2024-11-10",
        price: 90,
        status: "available",
      },
      {
        img: "/assets/1.jpg",
        title: "Product 10",
        subtitle: "Subtitle for Product 10",
        date: "2024-11-09",
        price: 140,
        status: "available",
      },
    ];
    
    
    export default function ProductsPage() {
      const { theme } = useTheme();
      return (
        <div className="relative">
          <div className="bg-blue-700 bottom-0 w-full fixed z-40 flex-row flex">
            <div className="w-1/2 bg-orange-700">a</div>
            <div className="w-1/2">b</div>
          </div>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 gap-4 pt-12 pb-12 ${
              theme === "light" ? "bg-white" : "bg-black"
            }`}
          >
            {data.map((val, ind) => (
              <div key={ind}>
                <ItemProducts details={val} theme={theme} />
              </div>
            ))}
          </div>
        </div>
       
      );
    }
    