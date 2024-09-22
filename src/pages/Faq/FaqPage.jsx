import React from "react";
import { Collapse } from "antd";
import { useTranslation } from "react-i18next";
import "./faq.css";

const FaqPage = () => {
  const { t } = useTranslation();

  const items = [
    {
      key: "1",
      label: t("faq.items.0.label"),
      children: (
        <div className="faq-col-body">
          <p>{t("faq.items.0.content.0")}</p>
          <p>{t("faq.items.0.content.1")}</p>
        </div>
      ),
    },
    {
      key: "2",
      label: t("faq.items.1.label"),
      children: (
        <div className="faq-col-body">
          <p>{t("faq.items.1.content.0")}</p>
          <p>{t("faq.items.1.content.1")}</p>
        </div>
      ),
    },
    {
      key: "3",
      label: t("faq.items.2.label"),
      children: (
        <div className="faq-col-body">
          <p>{t("faq.items.2.content.0")}</p>
          <p>{t("faq.items.2.content.1")}</p>
        </div>
      ),
    },
  ];

  return (
    <section className="faq-page">
      <div className="faq-head">
        <div>
          <span>Home</span> / <span>Faq</span>
        </div>
      </div>
      <div className="my-container">
        <div className="faq-body">
          <h3>{t('faq.title')}</h3>
          <Collapse items={items} defaultActiveKey={["1"]} />
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
