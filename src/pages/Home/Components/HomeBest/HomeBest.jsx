import { useState, useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import SingleCard from "../../../../Components/SingleCard/SingleCard";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const HomeBest = () => {
  const { t } = useTranslation(); 
  const productData = useSelector((state) => state.product);
  const langProduct = productData.filter(
    (item) => item.lang == t("productLang")
  );


  return (
    <div className="best pt-5">
      <div className="my-container">
        <div className="best-top">
          <div className="best-head">
            <h3>{t("home.hero.homeBest.bestSellingTitle")}</h3>
            <div className="dp-between">
              <p>{t("home.hero.homeBest.description")}</p>
              <Link to="/shop" className="btn btn-light">
                {t("home.hero.homeBest.viewAll")}
              </Link>
            </div>
          </div>
          <div className="best-body row g-5 mt-4">
            {langProduct.map((item) => (
              <SingleCard key={item.id} product={item} />
            ))}
          </div>
        </div>
        <div className="best-bottom">
          <div className="body row">
            <div className="col-md-4 col-sm-12 col-12">
              <div className="box box-one dp-align">
                <div className="text-con">
                  <span>{t("home.banner.securityCamera.title")}</span>
                  <h3>{t("home.banner.securityCamera.discount")}</h3>
                  <Link to="/shop" className="link">
                    {t("home.banner.buyNow")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 col-12">
              <div className="box box-two dp-align">
                <div className="text-con">
                  <span>{t("home.banner.limitedTime.title")}</span>
                  <h3>{t("home.banner.limitedTime.discount")}</h3>
                  <Link to="/shop" className="link">
                    {t("home.banner.buyNow")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 col-12">
              <div className="box box-three dp-align">
                <div className="text-con">
                  <span>{t("home.banner.laptop.title")}</span>
                  <h3>{t("home.banner.laptop.discount")}</h3>
                  <Link to="/shop" className="link">
                    {t("home.banner.buyNow")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBest;
