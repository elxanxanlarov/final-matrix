import React from "react";
import Instagram from "../../Components/Instagram/Instagram";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-page">
      <div className="contact-head text-center">
        <h2>{t('contact.title')}</h2>
        <div>
          <span>{t('contact.home')}</span> / <span>{t('contact.title')}</span>
        </div>
      </div>
      <div className="my-container">
        <div className="contact-body row">
          <div className="col-md-6 col-sm-12 col-12">
            <div className="left">
              <ul>
                <li>
                  <h3>{t('contact.collaborate')}</h3>
                </li>
                <li>
                  <p>{t('contact.description')}</p>
                </li>
                <li>
                  <span>{t('contact.phone')}</span>
                  <p>+(2) 123 -456 -789</p>
                </li>
                <li>
                  <span>{t('contact.email')}</span>
                  <p>support@example.com</p>
                </li>
                <li>
                  <span>{t('contact.office')}</span>
                  <p>{t('contact.officeAddress')}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-12">
            <div className="right">
              <ul>
                <li>
                  <h3>{t('contact.sayHello')}</h3>
                </li>
                <li>
                  <input placeholder={t('contact.name')} type="text" />
                </li>
                <li>
                  <input placeholder={t('contact.emailInput')} type="email" />
                </li>
                <li>
                  <input placeholder={t('contact.phoneInput')} type="number" />
                </li>
                <li>
                  <textarea rows="5" placeholder={t('contact.message')} />
                </li>
              </ul>
              <button className="btn btn-dark">{t('contact.send')}</button>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4763.632209202783!2d-6.27158!3d53.346548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9b76719607%3A0x9d13471d963893a7!2s1%20Grafton%20Street%2C%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sus!4v1725873215326!5m2!1sen!2sus"
            width="100%"
            height="550"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <Instagram dpNoneTwo={"dp-none"} />
    </section>
  );
};

export default Contact;
