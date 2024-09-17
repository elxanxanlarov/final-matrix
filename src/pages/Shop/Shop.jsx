import {useEffect, useState } from "react";
import "./style.scss";
import SingleCard from "../../Components/SingleCard/SingleCard";
import { useSelector } from "react-redux";

const Shop = () => {
  const productData = useSelector((state) => state.product);
  

  const [selectedItem, setSelectedItem] = useState(
    localStorage.getItem("productSort") || ""
  );
  const [categoryItem, setCategoryItem] = useState(
    localStorage.getItem("category") || "All"
  );

  useEffect(() => {
    if (selectedItem) {
      localStorage.setItem("productSort", selectedItem);
    }
    if (categoryItem) {
      localStorage.setItem("category", categoryItem);
    }
  }, [selectedItem, categoryItem]);

  const handleSort = (products, sortOption) => {
    switch (sortOption) {
      case "Price, low to high":
        return products.sort((a, b) => a.price - b.price);
      case "Price, high to low":
        return products.sort((a, b) => b.price - a.price);
      case "Alphabetically, A-Z":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case "Alphabetically, Z-A":
        return products.sort((a, b) => b.title.localeCompare(a.title));
      case "Date, old to new":
        return products.sort((a, b) => new Date(a.date) - new Date(b.date));
      case "Date, new to old":
        return products.sort((a, b) => new Date(b.date) - new Date(a.date));
      default:
        return products;
    }
  };

  const handleSelect = (event) => {
    const itemText = event.currentTarget.textContent;
    setSelectedItem(itemText);
  };

  const clickCategory = (event) => {
    const itemText = event.currentTarget.textContent;
    setCategoryItem(itemText);
  };

  return (
    <section className="shop">
      <div className="shop-con">
        <div className="shop-head">
          <div className="my-container">
            <h4>Shop</h4>
          </div>
        </div>
        <div className="shop-body">
          <div className="my-container">
            <div className="top dp-between">
              <div className="left"></div>
              <div className="right dp-align gap-4">
                <div className="dp-align gap-2">
                  <span className="sort-span">Sort by:</span>
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-dark dropdown-toggle dp-between"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {selectedItem || "Dropdown button"}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleSelect}
                        >
                          Alphabetically, A-Z
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleSelect}
                        >
                          Alphabetically, Z-A
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleSelect}
                        >
                          Price, low to high
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleSelect}
                        >
                          Price, high to low
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleSelect}
                        >
                          Date, old to new
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleSelect}
                        >
                          Date, new to old
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom row">
              <div className="col-md-3">
                <div className="category">
                  <h3>Category</h3>
                  <ul>
                    <li
                      onClick={clickCategory}
                      className={`category-li ${
                        categoryItem === "All" ? "active" : ""
                      }`}
                    >
                      All
                    </li>
                    <li
                      onClick={clickCategory}
                      className={`category-li ${
                        categoryItem === "Laptop" ? "active" : ""
                      }`}
                    >
                      Laptop
                    </li>
                    <li
                      onClick={clickCategory}
                      className={`category-li ${
                        categoryItem === "Mobile" ? "active" : ""
                      }`}
                    >
                      Mobile
                    </li>
                    <li
                      onClick={clickCategory}
                      className={`category-li ${
                        categoryItem === "Router" ? "active" : ""
                      }`}
                    >
                      Router
                    </li>
                    <li
                      onClick={clickCategory}
                      className={`category-li ${
                        categoryItem === "Speaker" ? "active" : ""
                      }`}
                    >
                      Speaker
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="products row g-3">
                  {handleSort(
                    productData.filter(
                      (item) =>
                        categoryItem === "All" || item.category === categoryItem
                    ),
                    selectedItem
                  ).map((item) => (
                    <SingleCard key={item.id} product={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
