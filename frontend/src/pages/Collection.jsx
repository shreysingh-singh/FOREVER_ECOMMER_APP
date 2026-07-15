import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopingContext'
import { assets } from '../assets/assets';
import Tittle from '../components/Tittle';
import ProductItem from '../components/ProductItem';

function Collection() {
  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter]= useState(false);
  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setsortType] = useState("relative");



  const categoryToggle = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const subCategoryToggle = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value))
    }
    else{
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  }

  const applyFiltter = () => {

    let productCopy = products.slice();

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) => {
        return subCategory.includes(item.subCategory);
      });
    }

    setfilterProducts(productCopy);
  }

  const sortProduct = () => {
    let fpCopy = [...filterProducts];

    switch (sortType) {
      case "low-high":
        setfilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
        break;

      case "high-low":
        setfilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
        break

      default:
        applyFiltter();
        break;
    }

     setfilterProducts(fpCopy);
  }

  

useEffect(() => {
  sortProduct();
}, [sortType]);

  useEffect(() => {
    applyFiltter()
  },[category, subCategory])

  
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filters  */}
      {/* Left Side  */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        {/* Category  */}
        <div
          className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          {/* CheckBox Filter  */}
          <div className="flex flex-col gap-2 text-gray-700 text-sm font-light">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={categoryToggle}
              />
              MEN
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={categoryToggle}
              />
              WOMEN
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={categoryToggle}
              />
              KIDS
            </p>
          </div>
        </div>
        {/* Type  */}
        <div
          className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          {/* CheckBox Filter  */}
          <div className="flex flex-col gap-2 text-gray-700 text-sm font-light">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={subCategoryToggle}
              />
              Topwears
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={subCategoryToggle}
              />
              Bottomwears
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={subCategoryToggle}
              />
              Winterwears
            </p>
          </div>
        </div>
      </div>

      {/* Right Side  */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Tittle text1={"ALL"} text2={"COLLECTION"} />
          {/* Product sort   */}
          <select onChange={(e) => setsortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2 ">
            <option value="relative">Sort by: relative</option>
            <option value="low-high">Sort by:Low-High</option>
            <option value="high-low">Sort by:High-Lwo</option>
          </select>
        </div>
        {/* Map Product  */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection
