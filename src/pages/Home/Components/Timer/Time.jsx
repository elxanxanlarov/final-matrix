import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./timer.css";
const Time = () => {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState(new Date());

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
    <div className="timer">
      <div className="my-container">
        <div className="timer-con">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-12">
              <div className="left">
                <img
                  src="https://elexy-demo.myshopify.com/cdn/shop/files/prom-product-image.png?v=1713853006"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
              <div className="right">
                <div>
                  <span>{t("home.timer.getUpTo")}</span>
                  <h3>{t("home.timer.productName")}</h3>
                  <span className="price">{t("home.timer.price")}</span>
                  <p>{t("home.timer.description")}</p>
                  <div className="btn btn-light">{t("home.timer.shopNow")}</div>
                  <div className="dp-center">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
