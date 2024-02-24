"use client";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const page = () => {
  const items = [
    { id: 8, category: "JavaScript", image: "/javascript.png" },
    { id: 3, category: "JavaScript", image: "/react-js.png" },
    { id: 4, category: "JavaScript", image: "/node-js.png" },
    { id: 5, category: "JavaScript", image: "/express-js.png" },
    { id: 6, category: "JavaScript", image: "/next-js.png" },
    { id: 7, category: "JavaScript", image: "/angular-js.png" },
    { id: 10, category: "JavaScript", image: "/react-native.png" },
    { id: 9, category: "JavaScript", image: "/redux-js.png" },
    { id: 2, category: "PHP", image: "/php.png" },
    { id: 14, category: "PHP", image: "/wordpress.png" },
    { id: 15, category: "PHP", image: "/laravel.png" },
    { id: 11, category: "Databases", image: "/my-sql.png" },
    { id: 12, category: "Databases", image: "/mongo-db.png" },
    { id: 13, category: "Databases", image: "/postgre-sql.png" },
    { id: 1, category: "Java", image: "/java.png" },
    { id: 18, category: "Java", image: "/spring.png" },
    { id: 16, category: "Python", image: "/python.jfif" },
    { id: 17, category: "Python", image: "/django.png" },
    { id: 19, category: "CSS", image: "/css.png" },
    { id: 20, category: "CSS", image: "/sass.png" },
    { id: 21, category: "CSS", image: "/bootstrap.png" },
    { id: 22, category: "CSS", image: "/tailwindcss.png" },
  ];
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilter = (event) => {
    const selectedValue = event.target.value || event.target.innerText;
    setSelectedFilter(selectedValue);
  };

  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredItems(items); // Show all items
    } else {
      const filtered = items.filter((item) => item.category === selectedFilter);
      setFilteredItems(filtered); // Show only items of selected category
    }
  }, [selectedFilter, items]);

  return (
    <>
      <Navbar />
      <BreadCrumb currentPage="Technologies" />
      <section className=" px-7 md:px-36 pb-16">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 tracking-widest">
          OUR TECH EXPERTISE
        </div>
        <div className="my-6">
          <span className="font-medium text-4xl sm:text-5xl xl:text-6xl ">
            <b className=" text-gray-900/90 my-4">What’s your stack?&nbsp;</b>
            <br className="xl:block hidden" />
            <b className=" text-orange-600/95 my-4">We cover top of them.</b>
          </span>
        </div>
      </section>

      <section className=" bg-gray-200/70 px-7 md:pl-36 md:pr-10 pt-10 md:pt-20 pb-32">
        <h2 className="text-3xl font-medium">Quick Filters</h2>
        <select
          onChange={handleFilter}
          value={selectedFilter}
          className="block xl:hidden w-52 px-3 py-2 outline-none border-none my-10"
        >
          <option value="All">All</option>
          <option value="Databases">Databases</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Java">Java</option>
          <option value="PHP">PHP</option>
          <option value="Python">Python</option>
        </select>
        <ul className="hidden xl:flex gap-4 py-10">
          <li
            onClick={handleFilter}
            className={`bg-gray-600/20 rounded-md py-2 px-2 cursor-pointer ${
              selectedFilter === "All" ? "bg-orange-500/95 text-white" : ""
            }`}
          >
            All
          </li>
          <li
            onClick={handleFilter}
            className={`bg-gray-600/20 rounded-md py-2 px-2 cursor-pointer ${
              selectedFilter === "Databases"
                ? "bg-orange-500/95 text-white"
                : ""
            }`}
          >
            Databases
          </li>
          <li
            onClick={handleFilter}
            className={`bg-gray-600/20 rounded-md py-2 px-2 cursor-pointer ${
              selectedFilter === "Java" ? "bg-orange-500/95 text-white" : ""
            }`}
          >
            Java
          </li>
          <li
            onClick={handleFilter}
            className={`bg-gray-600/20 rounded-md py-2 px-2 cursor-pointer ${
              selectedFilter === "JavaScript"
                ? "bg-orange-500/95 text-white"
                : ""
            }`}
          >
            JavaScript
          </li>
          <li
            onClick={handleFilter}
            className={`bg-gray-600/20 rounded-md py-2 px-2 cursor-pointer ${
              selectedFilter === "PHP" ? "bg-orange-500/95 text-white" : ""
            }`}
          >
            PHP
          </li>
          <li
            onClick={handleFilter}
            className={`bg-gray-600/20 rounded-md py-2 px-2 cursor-pointer ${
              selectedFilter === "Python" ? "bg-orange-500/95 text-white" : ""
            }`}
          >
            Python
          </li>
          <li
            onClick={handleFilter}
            className={`bg-gray-600/20 rounded-md py-2 px-2 cursor-pointer ${
              selectedFilter === "CSS" ? "bg-orange-500/95 text-white" : ""
            }`}
          >
            CSS
          </li>
        </ul>
        <div className="flex gap-5 flex-wrap ">
          {filteredItems.map((item) => (
            <a key={item.id} href={item.link}>
              <div className="bg-white rounded-2xl h-28 w-40  overflow-hidden">
                <img
                  className="px-10 py-2 border object-contain h-full w-full"
                  src={item.image}
                  alt={item.category}
                />
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
