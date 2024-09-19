import { Link } from "react-router-dom";
import SingleCard from "../../../../Components/SingleCard/SingleCard";
import "./style.scss";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const HomeHighly = () => {
  const { t } = useTranslation();
  const productData = useSelector((state) => state.product);
  const langProduct = productData.filter(
    (item) => item.lang == t("productLang")
  );

  return (
    <div className="highly pt-5">
      <div className="my-container">
        <div className="highly-top">
          <div className="highly-head">
            <h3 data-aos="fade-down-right">
              {t("home.hero.homeHighly.recommendedTitle")}
            </h3>
            <div className="dp-between">
              <p data-aos="fade-right">
                {t("home.hero.homeHighly.description")}
              </p>
              <button data-aos="fade-left" className="btn btn-light">
                {t("home.hero.homeHighly.viewAll")}
              </button>
            </div>
          </div>
          <div className="highly-body row g-5 mt-4">
            {langProduct.map((item) => (
              <SingleCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="highly-bottom row g-0">
        <div className="col-md-4 col-sm-12 col-12">
          <div className="box box-one">
            <div className="text-con">
              <span>{t("home.hero.homeHighly.box-1.title")}</span>
              <h3>{t("home.hero.homeHighly.box-1.description")}</h3>
              <Link to="/shop" className="link">
                {t("home.hero.homeHighly.box-1.buyNow")}
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 col-12">
          <div className="box box-two">
            <div className="text-con">
              <span>{t("home.hero.homeHighly.box-2.title")}</span>
              <h3>{t("home.hero.homeHighly.box-2.description")}</h3>
              <Link to="/shop" className="link">
                {t("home.hero.homeHighly.box-2.buyNow")}
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 col-12">
          <div className="box box-three">
            <div className="text-con">
              <span>{t("home.hero.homeHighly.box-3.title")}</span>
              <h3>{t("home.hero.homeHighly.box-3.description")}</h3>
              <Link to="/shop" className="link">
                {t("home.hero.homeHighly.box-3.buyNow")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHighly;
