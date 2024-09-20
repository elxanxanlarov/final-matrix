import { CiCreditCard2 } from "react-icons/ci";
import "./style.scss";
import { LiaShippingFastSolid } from "react-icons/lia";
import { useTranslation } from 'react-i18next';

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section className="about-hero">
      <div className="container">
        <div className="hero-con">
          <div className="hero-top">
            <div className="row g-5">
              <div className="col-md-6 col-sm-12 col-12">
                <div
                  data-aos="fade-right"
                  data-aos-offset="500"
                  data-aos-easing="ease-in-sine"
                  className="left"
                >
                  <img
                    src="../../../../../src/pages/About/Components/AboutHero/image/hero.webp"
                    alt={t('about.hero.img_alt')} 
                  />
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                className="col-md-6 col-sm-12 col-12"
              >
                <div className="right">
                  <h4>{t('about.hero.title')}</h4>
                  <p>{t('about.hero.description')}</p>
                  <ul className="dp-align">
                    <div>
                      <li>{t('about.hero.latest_technology')}</li>
                      <li>{t('about.hero.best_team')}</li>
                    </div>
                    <div>
                      <li>{t('about.hero.quick_servicing')}</li>
                      <li>{t('about.hero.expert_team')}</li>
                    </div>
                  </ul>
                  <button className="btn btn-dark mt-5">{t('about.hero.shop_now')}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bottom row"> {/* 'about.hero-bottom' əvəzinə 'hero-bottom' */}
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              className="col-md-4 col-sm-12 col-12"
            >
              <div className="my-box dp-align gap-3">
                <div className="icon-block dp-center">
                  <LiaShippingFastSolid />
                </div>
                <div>
                  <p>{t('about.hero.shipping')}</p>
                  <span>{t('about.hero.shipping_description')}</span>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              className="col-md-4 col-sm-12 col-12"
            >
              <div className="my-box dp-align gap-3">
                <div className="icon-block dp-center">
                  <CiCreditCard2 />
                </div>
                <div>
                  <p>{t('about.hero.payment')}</p>
                  <span>{t('about.hero.payment_description')}</span>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              className="col-md-4 col-sm-12 col-12"
            >
              <div className="my-box dp-align gap-3">
                <div className="icon-block dp-center">
                  <CiCreditCard2 />
                </div>
                <div>
                  <p>{t('about.hero.points')}</p>
                  <span>{t('about.hero.points_description')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
