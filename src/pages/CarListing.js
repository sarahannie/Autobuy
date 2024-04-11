import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../assets/carList.jpg";
import BrandLink from "../components/BrandGrid.js";
import List from "../components/ListingCard.js";
import CategoryGrid from "../components/CategoryGrid.js";
import { useState } from "react";

function CarListing() {
  const [category, setCategory] = useState("");
  const [make, setMake] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching...");
  };
  return (
    <section className="">
      <Navbar />
      <div className="w-full h-[800px] relative  bg-gradient-to-t from-[#002C52] to-[#034885] inset-0 opacity-85  bg-cover bg-no-repeat flex items-center justify-center">
        <img
          src={Hero}
          alt="bannerIcon"
          className="w-full h-full absolute lg:object-cover object-bottom mix-blend-overlay"
          fetchpriority="high"
        />
        <div className="w-full max-w-[663px] md:h-[130px] absolute mx-auto top-[300px] md:top-[217px] text-white flex flex-col gap-1">
          <p className="lg:w-[217px]  mx-auto text-[16px] font-bold leading-[26.6px] ">
            Discover Your Dream Car
          </p>
          <h3 className="text-[32px] font-bold leading-[48px] ">
            Browse Thousands of Cars for Sale
          </h3>
          <p className="text-[16px] md:text-[20px] font-normal leading-[32px] lg:w-[377px] mx-auto">
            Find the Perfect Car at the Best Price
          </p>
        </div>
        {/* absolute z-10 lg:top-[560px] top-[400px] grid lg:flex lg:flex-row lg:grid-cols-6 md:flex md:flex-row md:grid-cols-3 flex flex-row grid-cols-2 gap-4 w-full lg:w-[1200px] lg:justify-between  lg:mx-10 border border-primary-light px-6 py-8 bg-primary-light shadow-2xl rounded-md overflow-x-hidden */}
        <div className="absolute z-10 lg:top-[380px] top-[480px] grid lg:flex lg:flex-row lg:grid-cols-6 md:flex md:flex-row md:grid-cols-2 flex flex-row grid-cols-2 gap-4 w-full lg:max-w-[1200px] lg:justify-between  lg:mx-10 border border-primary-light px-6 py-8 bg-primary-light shadow-2xl  rounded-md overflow-x-hidden">
          <div className="flex flex-col border border-l-4 border-r-gray-900">
            <label
              htmlFor="category"
              className="mb-1 -ml-8 font-light text-base"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              className="px-8 py-1 bg-primary-lighthover lg:mr-8 text-base"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" >Category</option>
              {/* Add options for categories */}
            </select>
          </div>

          <div className="flex flex-col lg:-ml-14 border border-l-4 border-r-gray-900">
            <label htmlFor="make" className="mb-1  font-light text-base">
              Make
            </label>
            <select
              id="make"
              value={make}
              className="px-4 py-1 bg-primary-lighthover lg:mr-8 text-base"
              onChange={(e) => setMake(e.target.value)}
            >
              <option value="">Select Make</option>
              {/* Add options for makes */}
            </select>
          </div>

          <div className="flex flex-col lg:-ml-14 border border-l-4 border-r-gray-900">
            <label
              htmlFor="bodyType"
              className="mb-1 -ml-8 font-light text-base"
            >
              Body Type
            </label>
            <select
              id="bodyType"
              value={bodyType}
              className="px-8 py-1 bg-primary-lighthover lg:mr-8 text-base"
              onChange={(e) => setBodyType(e.target.value)}
            >
              <option value="">Select Body Type</option>
              {/* Add options for body types */}
            </select>
          </div>

          <div className="flex flex-col lg:-ml-14 border border-l-4 border-r-gray-900">
            <label htmlFor="year" className="mb-1 -ml-8 font-light text-base">
              Year
            </label>
            <select
              id="year"
              value={year}
              className="px-8 bg-primary-lighthover lg:mr-8 text-base "
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="" className="">
                2019
              </option>
              {/* Add options for body types */}
            </select>
            {/* <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} /> */}
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="mb-1 -ml-8 font-light text-base">
              Price range
            </label>
            <select
              id="price"
              value={price}
              className="px-8 py-1 bg-primary-lighthover text-base"
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="">$10000</option>
              {/* Add options for body types */}
            </select>
            {/* <input
          type="text"
          id="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        /> */}
          </div>

          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="bg-primary-normal hover:bg-secondary-normal text-white font-bold py-2 px-4 rounded"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:h-[322.58px] mt-6  max-w-[1280px] mx-auto">
        <h3 className="text-[36px] text-[#003B6D] font-bold">Trusted Brand</h3>
        <BrandLink />
      </div>
      <div className="lg:max-w-[1122px] lg:h-[968px]  mx-auto mt-9 mb-11 p-2 lg:p-0">
        <h3 className="text-[36px] text-[#003B6D] font-bold">Listings</h3>
        <List />
      </div>
      <div className="lg:max-w-[1122px] mb-16  mx-auto mt-9 md:mb-11 p-2 lg:p-0">
        <h3 className="text-[36px] text-[#003B6D] font-bold">Category</h3>
        <CategoryGrid />
      </div>

      <Footer />
    </section>
  );
}
export default CarListing;
