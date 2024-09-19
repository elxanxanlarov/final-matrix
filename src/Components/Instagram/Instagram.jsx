import { useTranslation } from 'react-i18next';
import { FaInstagram } from "react-icons/fa";
import "./style.scss";

const Instagram = ({ dpNone, dpNoneTwo }) => {
  const { t } = useTranslation();

  return (
    <section className="instagram">
      <div className={`instagram-top ${dpNone}`}>
        <div className="head text-center py-5">
          <h3>{t('instagram.shopTitle')}</h3>
        </div>
        <div className="body row g-0">
          <div className="col-md-3 col-sm-6 col-12">
            <div className="box box-one dp-center">
              <div className="icon-con dp-center">
                <FaInstagram className="icon" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="box box-two dp-center">
              <div className="icon-con dp-center">
                <FaInstagram className="icon" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="box box-three dp-center">
              <div className="icon-con dp-center">
                <FaInstagram className="icon" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="box box-four dp-center">
              <div className="icon-con dp-center">
                <FaInstagram className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`instagram-bottom ${dpNoneTwo}`}>
        <div className="my-container">
          <div className="bottom-con dp-between">
            <h2>{t('instagram.subscribeTitle')}</h2>
            <div className="input-con">
              <input placeholder={t('instagram.emailPlaceholder')} type="text" />
              <button className="btn btn-light">{t('instagram.submitButton')}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
