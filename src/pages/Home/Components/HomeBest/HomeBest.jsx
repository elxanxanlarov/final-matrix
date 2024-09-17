import { useState, useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import SingleCard from "../../../../Components/SingleCard/SingleCard";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const HomeBest = () => {
  const { t } = useTranslation(); // Hook for translation
  const [currentTime, setCurrentTime] = useState(new Date());
  const productData = useSelector((state) => state.product);
  const langProduct=productData.filter(item=>item.lang==t("productLang"));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const day = currentTime.getDate();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  return (
    <div className="best pt-5">
      <div className="my-container">
        <div className="best-top">
          <div className="best-head">
            <h3>{t("home.hero.homeBest.bestSellingTitle")}</h3>
            <div className="dp-between">
              <p>{t("home.hero.homeBest.description")}</p>
              <button className="btn btn-light">{t("home.hero.homeBest.viewAll")}</button>
            </div>
          </div>
          <div className="best-body row g-5 mt-4">
            {langProduct.map((item) => (
              <SingleCard key={item.id} product={item} />
            ))}
          </div>
        </div>
        <div className="best-bottom">
          <div className="head dp-between">
            <div className="time dp-align text-center">
              <div>
                <p>{day}</p>
                <span>{t("home.hero.homeBest.time.days")}</span>
              </div>
              <span className="dots">:</span>
              <div>
                <p>{hour}</p>
                <span>{t("home.hero.homeBest.time.hours")}</span>
              </div>
              <span className="dots">:</span>
              <div>
                <p>{minute}</p>
                <span>{t("home.hero.homeBest.time.minutes")}</span>
              </div>
              <span className="dots">:</span>
              <div>
                <p>{second}</p>
                <span>{t("home.hero.homeBest.time.seconds")}</span>
              </div>
            </div>
            <button className="btn btn-light">{t("home.hero.homeBest.shopNow")}</button>
          </div>
          <div className="body row">
            <div className="col-md-4 col-sm-12 col-12">
              <div className="box box-one dp-align">
                <div className="text-con">
                  <span>{t("home.hero.homeBest.vrFest")}</span>
                  <h3>
                    {t("home.hero.homeBest.virtualRealityExperience")}
                  </h3>
                  <Link className="link" to="#">
                    {t("home.hero.homeBest.buyNow")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-12">
              <div className="box box-two dp-align">
                <div className="text-con">
                  <span>{t("home.hero.homeBest.vrFest")}</span>
                  <h3>
                    {t("home.hero.homeBest.virtualRealityExperience")}
                  </h3>
                  <Link className="link" to="#">
                    {t("home.hero.homeBest.buyNow")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-12">
              <div className="box box-three dp-align">
                <div className="text-con">
                  <span>{t("home.hero.homeBest.vrFest")}</span>
                  <h3>
                    {t("home.hero.homeBest.virtualRealityExperience")}
                  </h3>
                  <Link className="link" to="#">
                    {t("home.hero.homeBest.buyNow")}
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
