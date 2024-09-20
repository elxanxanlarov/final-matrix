import { Link } from "react-router-dom";
import "../HomeHero/style.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const HomeHero = () => {
  const { t } = useTranslation();
  const controls = useAnimation();

  const animateText = async () => {
    await controls.start({ opacity: 0, y: 40 });
    controls.start({ opacity: 1, y: 0 });
  };

  useEffect(() => {
    const carousel = document.querySelector("#carouselExample");
    carousel.addEventListener("slide.bs.carousel", animateText);
    return () => {
      carousel.removeEventListener("slide.bs.carousel", animateText);
    };
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-top">
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <motion.div
                  animate={controls}
                  initial={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <span>{t("home.hero.slider-one.span")}</span>
                    <h2>{t("home.hero.slider-one.title")}</h2>
                    <p>{t("home.hero.slider-one.description")}</p>
                    <div className="btn-con dp-align gap-3">
                      <Link to="/shop" className="btn btn-light">
                        {t("home.hero.slider-one.preOrder")}
                      </Link>
                      <Link to="/shop" className="btn btn-dark">
                        {t("home.hero.slider-one.viewMore")}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="carousel-item">
                <motion.div
                  animate={controls}
                  initial={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <span>{t("home.hero.slider-two.span")}</span>
                    <h2>{t("home.hero.slider-two.title")}</h2>
                    <p>{t("home.hero.slider-two.description")}</p>
                    <div className="btn-con dp-align gap-3">
                      <Link to="/shop" className="btn btn-light">
                        {t("home.hero.slider-two.preOrder")}
                      </Link>
                      <Link to="/shop" className="btn btn-dark">
                        {t("home.hero.slider-two.viewMore")}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="carousel-item">
                <motion.div
                  animate={controls}
                  initial={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <span>{t("home.hero.slider-three.span")}</span>
                    <h2>{t("home.hero.slider-three.title")}</h2>
                    <p>{t("home.hero.slider-three.description")}</p>
                    <div className="btn-con dp-align gap-3">
                      <Link to="/shop" className="btn btn-light">
                        {t("home.hero.slider-three.preOrder")}
                      </Link>
                      <Link to="/shop" className="btn btn-dark">
                        {t("home.hero.slider-three.viewMore")}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="carousel-item">
                <motion.div
                  animate={controls}
                  initial={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <span>{t("home.hero.slider-four.span")}</span>
                    <h2>{t("home.hero.slider-four.title")}</h2>
                    <p>{t("home.hero.slider-four.description")}</p>
                    <div className="btn-con dp-align gap-3">
                      <Link to="/shop" className="btn btn-light">
                        {t("home.hero.slider-four.preOrder")}
                      </Link>
                      <Link to="/shop" className="btn btn-dark">
                        {t("home.hero.slider-four.viewMore")}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">{t("home.hero.previous")}</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">{t("home.hero.next")}</span>
            </button>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="row">
            <div data-aos="zoom-in-right" className="col-md-4 col-sm-12 col-12">
              <div className="box dp-align box-one">
                <div className="text-con">
                  <span>{t("home.hero.herobottom.box-1.subtitle")}</span>
                  <h3>{t("home.hero.herobottom.box-1.title")}</h3>
                  <Link className="link">
                    {t("home.hero.herobottom.box-1.cta")}
                  </Link>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-down" className="col-md-4 col-sm-12 col-12">
              <div className="box dp-align box-two">
                <div className="text-con">
                  <span>{t("home.hero.herobottom.box-2.subtitle")}</span>
                  <h3>{t("home.hero.herobottom.box-2.title")}</h3>
                  <Link className="link">
                    {t("home.hero.herobottom.box-2.cta")}
                  </Link>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-left" className="col-md-4 col-sm-12 col-12">
              <div className="box dp-align box-three">
                <div className="text-con">
                  <span>{t("home.hero.herobottom.box-3.subtitle")}</span>
                  <h3>{t("home.hero.herobottom.box-3.title")}</h3>
                  <Link className="link">
                    {t("home.hero.herobottom.box-3.cta")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
