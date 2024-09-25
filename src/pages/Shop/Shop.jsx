import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.scss";
import SingleCard from "../../Components/SingleCard/SingleCard";
import { useSelector } from "react-redux";

const Shop = () => {
  const { t } = useTranslation();
  const productData = useSelector((state) => state.product);
  const langProduct = productData.filter(
    (item) => item.lang == t("productLang")
  );
  const [selectedItem, setSelectedItem] = useState(
    localStorage.getItem("productSort") || "Price, high to low"
  );
  const [categoryItem, setCategoryItem] = useState(
    localStorage.getItem("category") || t("shop.category.all")
  );
  useEffect(() => {
    setCategoryItem(t("productLang") == "en" ? "All" : "Hamısı");
  }, []);
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
      case t("shop.dropdown.priceAsc"):
        return products.sort((a, b) => a.price - b.price);
      case t("shop.dropdown.priceDesc"):
        return products.sort((a, b) => b.price - a.price);
      case t("shop.dropdown.alphabetAsc"):
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case t("shop.dropdown.alphabetDesc"):
        return products.sort((a, b) => b.title.localeCompare(a.title));
      case t("shop.dropdown.dateAsc"):
        return products.sort((a, b) => new Date(a.date) - new Date(b.date));
      case t("shop.dropdown.dateDesc"):
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
            <h4>{t("shop.title")}</h4>
          </div>
        </div>
        <div className="shop-body">
          <div className="my-container">
            <div className="top dp-between">
              <div className="left"></div>
              <div className="right dp-align gap-4">
                <div className="dp-align gap-2">
                  <span className="sort-span">{t("shop.sortBy")}</span>
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
                          {t("shop.dropdown.alphabetAsc")}
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleSelect}
                        >
                          {t("shop.dropdown.alphabetDesc")}
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleSelect}
                        >
                          {t("shop.dropdown.priceAsc")}
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleSelect}
                        >
                          {t("shop.dropdown.priceDesc")}
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleSelect}
                        >
                          {t("shop.dropdown.dateAsc")}
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleSelect}
                        >
                          {t("shop.dropdown.dateDesc")}
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
                  <h3>{t("shop.category.title")}</h3>
                  <ul>
                    <li
                      onClick={clickCategory}
                      className={`category-li ${
                        categoryItem === t("shop.category.all") ? "active" : ""
                      }`}
                    >
                      {t("shop.category.all")}
                    </li>
                    <li
                      onClick={clickCategory}
                      className={`category-li ${
                        categoryItem === t("shop.category.laptop")
                          ? "active"
                          : ""
                      }`}
                    >
                      {t("shop.category.laptop")}
                    </li>
                    <li
                      onClick={clickCategory}
                      className={`category-li ${
                        categoryItem === t("shop.category.mobile")
                          ? "active"
                          : ""
                      }`}
                    >
                      {t("shop.category.mobile")}
                    </li>
                    <li
                      onClick={clickCategory}
                      className={`category-li ${
                        categoryItem === t("shop.category.router")
                          ? "active"
                          : ""
                      }`}
                    >
                      {t("shop.category.router")}
                    </li>
                    <li
                      onClick={clickCategory}
                      className={`category-li ${
                        categoryItem === t("shop.category.speaker")
                          ? "active"
                          : ""
                      }`}
                    >
                      {t("shop.category.speaker")}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="products row g-3">
                  {handleSort(
                    langProduct.filter(
                      (item) =>
                        categoryItem === t("shop.category.all") ||
                        item.category === categoryItem
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
